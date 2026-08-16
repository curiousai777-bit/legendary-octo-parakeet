# PortfolioAI Database Design

## Identity

### users
- id UUID PK
- email unique
- password_hash / external_auth_id
- role enum: student, recruiter, college, admin
- status
- created_at
- updated_at

### student_profiles
- id UUID PK
- user_id FK users unique
- full_name
- headline
- bio
- location
- target_niche_id FK niches nullable
- target_role
- skill_level
- education_summary
- availability
- created_at
- updated_at

### recruiter_profiles
- id UUID PK
- user_id FK users unique
- company_name
- job_title
- bio
- website
- created_at
- updated_at

### college_profiles
- id UUID PK
- user_id FK users unique
- institution_name
- description
- website
- location
- created_at
- updated_at

## Niche configuration

### niches
- id UUID PK
- slug unique
- name
- description
- active
- created_at
- updated_at

### niche_roles
- id UUID PK
- niche_id FK
- name
- description

### questions
- id UUID PK
- niche_id FK nullable (null = common question)
- key
- prompt
- help_text
- type
- required
- order_index
- active

### question_options
- id UUID PK
- question_id FK
- label
- value
- order_index

### question_conditions
- id UUID PK
- question_id FK
- source_question_id FK
- operator
- expected_value

### portfolio_section_templates
- id UUID PK
- niche_id FK
- section_type
- name
- description
- required
- order_index
- config_json

### project_templates
- id UUID PK
- niche_id FK
- title
- summary
- difficulty
- estimated_hours
- skills_json
- tools_json
- requirements_json
- milestones_json
- deliverables_json
- evidence_prompts_json
- active

## Student data

### onboarding_sessions
- id UUID PK
- student_id FK users
- mode enum: interview, form, adaptive
- niche_id FK nullable
- status
- started_at
- completed_at

### answers
- id UUID PK
- onboarding_session_id FK
- question_id FK
- value_json
- created_at
- updated_at

### student_skills
- id UUID PK
- student_id FK
- skill_name
- proficiency
- source

### student_links
- id UUID PK
- student_id FK
- type
- label
- url
- visibility

### evidence_items
- id UUID PK
- student_id FK
- type
- title
- description
- url
- media_url
- verification_status
- source_data_json
- created_at

## Projects

### projects
- id UUID PK
- student_id FK
- template_id FK nullable
- title
- slug
- problem
- solution
- description
- status
- difficulty
- tools_json
- skills_json
- requirements_json
- outcome
- repository_url
- live_url
- started_at
- completed_at
- created_at
- updated_at

### project_milestones
- id UUID PK
- project_id FK
- title
- description
- order_index
- status
- completed_at

### project_evidence
- id UUID PK
- project_id FK
- evidence_type
- title
- url
- description
- created_at

## Portfolios

### portfolios
- id UUID PK
- student_id FK unique
- niche_id FK
- name
- slug unique
- status enum: draft, published
- theme_key
- meta_title
- meta_description
- created_at
- updated_at
- published_at

### portfolio_sections
- id UUID PK
- portfolio_id FK
- section_type
- title
- content_json
- visible
- order_index
- created_at
- updated_at

### portfolio_versions
- id UUID PK
- portfolio_id FK
- version_number
- snapshot_json
- created_at

## Discovery

### saved_students
- id UUID PK
- recruiter_id FK users
- student_id FK users
- created_at

### opportunities
- id UUID PK
- recruiter_id FK users
- title
- description
- niche_id FK nullable
- location
- employment_type
- url
- status
- created_at
- updated_at

### applications
- id UUID PK
- student_id FK users
- opportunity_id FK
- status
- applied_at
- updated_at

## Design constraints

- Use UUID primary keys.
- Add created_at and updated_at to mutable entities.
- Add indexes for foreign keys, public portfolio slug, niche slug, role, and discovery filters.
- Enforce unique ownership relationships where appropriate.
- Store flexible AI/configuration payloads as JSONB while keeping core searchable data relational.
- Never store generated claims as verified evidence without a student-provided source.
