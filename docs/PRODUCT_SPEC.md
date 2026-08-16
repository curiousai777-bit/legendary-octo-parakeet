# PortfolioAI MVP Product Specification

## Product goal

Help students who struggle to create a portfolio discover what they should showcase, build missing evidence through practical projects, and publish a professional niche-specific portfolio.

## Core principle

A portfolio is an evidence system, not a collection of generic profile fields. Every portfolio section should be justified by the student's target niche and the evidence they can provide.

## Onboarding modes

Students choose their preferred interaction mode:

- Guided interview: one question at a time.
- Structured form: complete a multi-step form.
- Adaptive AI: questions change based on previous answers.

All modes write to the same normalized student profile and assessment model.

## Niche engine

Each niche defines:

- display name and slug
- description
- target roles
- recommended portfolio sections
- required evidence types
- optional evidence types
- question bank
- project templates
- project difficulty levels
- suggested tools/skills
- content-generation guidance
- visual/layout hints

Initial niche families:

- Software development
- UI/UX design
- Graphic design
- Data analytics
- Content writing
- Photography
- Video editing
- Digital marketing

The data model must allow additional niches without application-code rewrites.

## Student assessment

Collect enough information to determine:

- target role/niche
- current skill level
- skills and tools
- education
- interests
- existing projects
- academic work
- achievements
- links and evidence
- preferred project types
- time available for a new project
- confidence/gaps

If evidence is weak, the system creates an evidence-gap plan rather than inventing experience.

## Project engine

When a student lacks portfolio-worthy projects:

1. Recommend projects based on niche, skill level, interests, and gaps.
2. Generate a detailed project brief.
3. Guide the student through implementation.
4. Help produce truthful project documentation and portfolio content from the student's inputs.

A project brief contains:

- title
- problem
- target outcome
- skills demonstrated
- tools
- requirements
- milestones
- deliverables
- suggested enhancements
- evidence to capture
- portfolio case-study prompts

## Portfolio generator

Generate a niche-specific portfolio from structured profile data and verified student evidence.

Portfolio sections are configurable. Examples:

Developer: hero, about, skills, featured projects, GitHub, experience, education, contact.

Designer: hero, about, skills, case studies, process, visual gallery, tools, experience, contact.

Data analyst: hero, about, skills, projects, dashboards, analysis/case studies, tools, education, contact.

Writer: hero, about, specialties, selected writing, publications, services/roles, experience, contact.

The generator must never fabricate achievements, clients, employment, metrics, or credentials.

## Editing and publishing

Students can:

- edit generated content
- reorder sections
- hide/show sections
- replace media
- edit project details
- preview desktop/mobile
- choose from niche-appropriate visual themes
- publish/unpublish
- share a public portfolio URL

## Roles

### Student
Own profile, projects, portfolio drafts, published portfolio, and applications/evidence.

### Recruiter
Create recruiter profile, search/discover student portfolios, save candidates, and manage opportunities.

### College
Manage institution profile, student/community discovery, and institution-level resources.

### Admin
Manage niches, questions, project templates, users, moderation, and platform configuration.

## MVP architecture principles

- PostgreSQL as the primary relational database.
- Role-based authorization.
- API-first backend.
- Responsive web application.
- Server-side validation and database constraints.
- AI generation isolated behind a provider/service boundary.
- Public portfolio pages must not expose private student data.
- Generated content is editable and traceable to student-provided source data.
