> Pinned source for Runpod main: [flash/cli/init.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/flash/cli/init.mdx)
> Canonical documentation: https://docs.runpod.io/flash/cli/init

# init

Initialize a Flash project with a FastAPI server, example GPU and CPU workers, configuration files, and a ready-to-run directory structure.

Create a new Flash project with a ready-to-use template structure including a FastAPI server, example GPU and CPU workers, and configuration files.

```bash
flash init PROJECT_NAME [OPTIONS]
```

## Example

Create a new project directory:

```bash
flash init PROJECT_NAME
cd PROJECT_NAME
pip install -r requirements.txt
flash dev
```

Initialize in the current directory:

```bash
flash init .
```

## Arguments

**PROJECT\_NAME (type: string; required)**

Name of the project directory to create. Use `.` to initialize in the current directory.

## Flags

**--force, -f**

Overwrite existing files if they already exist in the target directory.

## What it creates

The command creates the following project structure:

- `PROJECT_NAME`
  - `lb_worker.py`
  - `gpu_worker.py`
  - `cpu_worker.py`
  - `.env.example`
  - `.gitignore`
  - `pyproject.toml`
  - `requirements.txt`
  - `README.md`
  - `AGENTS.md`
  - `CLAUDE.md`

### Template contents

- **lb\_worker.py**: load-balanced endpoint with HTTP routes. Contains `@Endpoint` functions with custom HTTP methods and paths (e.g., `POST /process`, `GET /health`). Multiple routes can share the same endpoint.
- **gpu\_worker.py**: GPU queue-based endpoint. Contains an `@Endpoint` function that runs on GPU hardware. Provides `/run` or `/runsync` routes for job submission. Creates one Serverless endpoint when deployed.
- **cpu\_worker.py**: CPU queue-based endpoint. Contains an `@Endpoint` function that runs on CPU-only instances. Provides `/run` or `/runsync` routes for job submission. Creates one Serverless endpoint when deployed.
- **.env**: Template for environment variables including `RUNPOD_API_KEY`.

### AI coding agent files

Flash generates context files that help AI coding assistants (Claude Code, Cursor, GitHub Copilot, Codex, Aider, and others) use Flash correctly. These files tell agents to use Flash CLI commands instead of raw Runpod API calls.

| File        | Purpose                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| `AGENTS.md` | CLI-first rules for AI coding tools (Cursor, Codex, Aider, Amp, Jules, and others) |
| `CLAUDE.md` | Symlink to `AGENTS.md` so Claude Code picks up the same rules                      |

Flash writes these files only when they don't already exist. If you have your own `AGENTS.md` or `CLAUDE.md`, Flash leaves them alone.

> **Tip**
>
> **Tools using other conventions:** GitHub Copilot reads `.github/copilot-instructions.md` and Cursor (legacy) reads `.cursorrules`. If you use those, symlink or copy `AGENTS.md`:
>
> ```bash
> ln -s ../AGENTS.md .github/copilot-instructions.md
> ln -s AGENTS.md .cursorrules
> ```

### Add agent files to existing projects

If you've already run `flash init`, add the agent files with:

```bash
python -c "from runpod_flash.rules import install_agent_files; from pathlib import Path; install_agent_files(Path.cwd())"
```

### Opt out

Delete `AGENTS.md`. Flash won't re-create it.

## Next steps

After initialization:

1. Copy `.env.example` to `.env` (if needed) and add your `RUNPOD_API_KEY`.
2. Install dependencies: `pip install -r requirements.txt`
3. Start the development server: `flash dev`
4. Open <http://localhost:8888/docs> to explore the API.
5. Customize the workers for your use case.
6. Deploy with `flash deploy` when ready.

> **Note**
>
> This command only creates local files. It doesn't interact with Runpod or create any cloud resources. Cloud resources are created when you run `flash dev` or `flash deploy`.

## Related commands

- [`flash dev`](https://docs.runpod.io/flash/cli/dev) - Start the development server
- [`flash deploy`](https://docs.runpod.io/flash/cli/deploy) - Build and deploy to Runpod
