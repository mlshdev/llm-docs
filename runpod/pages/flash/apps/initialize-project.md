> Commit-pinned source for Runpod main: [flash/apps/initialize-project.mdx](https://docs.runpod.io/flash/apps/initialize-project)

# Initialize a Flash app project

Use flash init to create a new Flash project with a ready-to-use structure. Review configuration and usage details for Runpod Flash.

The `flash init` command creates a new Flash project with a complete project structure, including example load balancing endpoints and queue-based endpoints, and configuration files. This gives you a working starting point for building Flash applications.

Use `flash init` whenever you want to start a new Flash project, fully configured for you to run `flash dev` and `flash deploy`.

## Create a new project

Create a new project in a new directory:

```bash
flash init PROJECT_NAME
cd PROJECT_NAME

# If using uv:
uv run flash init PROJECT_NAME
```

Or initialize in your current directory:

```bash
flash init .

# If using uv:
uv run flash init .
```

## Project structure

`flash init` creates the following structure:

- `PROJECT_NAME`
  - `lb_worker.py`
  - `gpu_worker.py`
  - `cpu_worker.py`
  - `.env.example`
  - `.gitignore`
  - `pyproject.toml`
  - `requirements.txt`
  - `README.md`

### Key files

**lb\_worker.py**: An example load-balanced worker with HTTP routes. Contains `@Endpoint` functions with custom HTTP methods and paths (e.g., `POST /process`, `GET /health`). Creates one endpoint when deployed.

**gpu\_worker.py**: An example GPU queue-based worker. Contains `@Endpoint` functions that run on GPU hardware. Provides `/runsync` route for job submission. Creates one endpoint when deployed.

**cpu\_worker.py**: An example CPU queue-based worker. Contains `@Endpoint` functions that run on CPU-only instances. Provides `/runsync` route for job submission. Creates one endpoint when deployed.

Each worker file defines a resource configuration and its associated functions. When you deploy, Flash creates one Serverless endpoint per unique resource configuration.

## Set up the project

After initialization, complete the setup:

```bash
# Install dependencies
pip install -r requirements.txt

# Copy environment template
cp .env.example .env

# Add your API key to .env
# RUNPOD_API_KEY=your_api_key_here
```

## Handle existing files

If you run `flash init` in a directory with existing files, Flash detects conflicts and prompts for confirmation:

```text
File Conflicts Detected

Warning: The following files will be overwritten:
  • requirements.txt
  • gpu_worker.py
  • README.md
  • lb_worker.py
  • cpu_worker.py

Continue and overwrite these files? [y/N]:
```

Use `--force` to skip the prompt and overwrite files:

```bash
flash init . --force

# If using uv:
uv run flash init . --force
```

## Start developing

Once your project is set up:

```bash
# Start the development server
flash dev

# Open the API explorer
# http://localhost:8888/docs

# If using uv:
uv run flash dev
```

Make changes to your worker files, and the server reloads automatically. When you're ready, deploy with:

```bash
flash deploy

# If using uv:
uv run flash deploy
```

## Next steps

- [Customize your app](https://docs.runpod.io/flash/apps/customize-app) to add endpoints and modify configurations.
- [Test locally](https://docs.runpod.io/flash/apps/local-testing) with `flash dev`.
- [Deploy to production](https://docs.runpod.io/flash/apps/deploy-apps) with `flash deploy`.
- [View the flash init reference](https://docs.runpod.io/flash/cli/init) for all options.
