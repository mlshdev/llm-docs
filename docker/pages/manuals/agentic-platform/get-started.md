> Pinned source for Docker main: [content/manuals/agentic-platform/get-started.md](https://github.com/docker/docs/blob/31d174d090fd7111ca2199ed54a3978e0d4ac74d/content/manuals/agentic-platform/get-started.md)

# Get started with Docker Agentic Platform

Use a cloud sandbox to have an agent review a project without setting up the
project on your computer. In this walkthrough, you'll launch Claude Code,
clone a public sample application, and save a project review. Then you'll
pause the sandbox to return later or delete it when you're finished.

You can complete the walkthrough in the browser. An optional step shows how
to open the same project in VS Code or Cursor over SSH.

## Before you begin

You need:

- A personal Docker account with an active
  [Docker Agentic Platform subscription](https://docs.docker.com/agentic-platform/signup/#activate-cloud-access).
- An Anthropic API key for the Claude Code kit. Add it under **Secrets** or
  enter it when you launch the sandbox. Your model provider bills inference
  separately from Docker's sandbox compute charges.

This example uses a public repository, so you don't need a GitHub token.
For other agents and their credentials, see [Kits](https://docs.docker.com/agentic-platform/kits/) and
[Secrets](https://docs.docker.com/agentic-platform/secrets/).

## Start a sandbox

1. Open [Docker Agentic Platform](https://agentic-platform.docker.com/) and
   select **New**.
2. Choose the Claude Code kit.
3. Add your Anthropic API key if it isn't already saved. Don't enter it in
   the agent's prompt or in a file inside the sandbox.
4. Keep the defaults and select **Run**.

On your first launch, the default **Open** network policy permits outbound
access to any host. If you're using a custom policy, make sure it permits
GitHub and your model provider. See [Network policies](https://docs.docker.com/agentic-platform/policies/).

When the sandbox is ready, its terminal opens with Claude Code. After launch,
you can't change the selected credentials, tools, network policies, or compute
size. See [Sandbox options](#sandbox-options) for other launch settings.

## Give the agent a task

Your local files aren't mounted in a cloud sandbox. Ask Claude Code to clone
and review a public sample project:

```text
Clone https://github.com/docker/welcome-to-docker.git into
/home/agent/workspace/project, then review the application.
Read the source, package.json, and Dockerfile. Don't modify the application
or install dependencies.
Write /home/agent/workspace/review.md with:
- A short explanation of what the application does.
- The commands defined in package.json for running and building it.
- An explanation of how the Dockerfile builds and serves the application.
- One small improvement you'd recommend, with the relevant file path.
Base the review on the files you read. Don't claim to have run the application.
Summarize your findings in your response.
```

Claude Code summarizes the project in the conversation and saves the review
at `/home/agent/workspace/review.md`. You can ask follow-up questions or give
it another task in the same session.

## Keep your work

The cloned project and review are stored in the sandbox. Files don't sync
automatically with your computer or a remote repository. They remain available
when you pause and resume the sandbox, but are lost when you delete it.

To keep files outside the sandbox, use the CLI to
[transfer files](https://docs.docker.com/ai/sandboxes/cloud/usage/#transfer-files), or commit
and push changes to a repository. Include a
[GitHub credential](https://docs.docker.com/agentic-platform/secrets/#github-credential) when launching a sandbox that
needs to push changes.

## Open the project in your editor (optional)

Open the project and review in VS Code or Cursor over SSH. Your editor
runs on your computer, while the files and terminal commands stay in the
cloud sandbox.

1. Install the [Docker Sandboxes CLI](https://docs.docker.com/ai/sandboxes/install/),
   version 0.45.0 or later.

2. In a terminal on your computer, sign in with the same Docker account you
   used in the Console and configure cloud SSH access:

   ```console
   $ sbx login
   $ sbx --cloud setup ssh
   $ sbx --cloud ls
   ```

3. Find your sandbox in the list and copy its `sbx_`-prefixed ID. Test the
   connection, replacing `<SANDBOX_ID>` with that ID:

   ```console
   $ ssh <SANDBOX_ID>@sbx_cloud
   ```

   A successful connection opens a shell inside the cloud sandbox. Run `exit`
   to return to your computer's terminal.

4. In VS Code, install the
   [Remote - SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh).
   In Cursor, install its Remote - SSH support.

5. Open your editor's Command Palette and run **Remote-SSH: Connect to Host**.
   Enter `<SANDBOX_ID>@sbx_cloud`, using the same ID as in the SSH command.

6. Open `/home/agent/workspace` in the remote window. You'll find the cloned
   application in `project` and the agent's output in `review.md`.

The first connection installs the editor's server inside the sandbox.

To download the review, run this command in a terminal on your computer:

```console
$ sbx --cloud cp <SANDBOX_ID>:/home/agent/workspace/review.md ./review.md
```

## Pause, keep running, or delete the sandbox

Closing the browser or disconnecting your editor leaves the sandbox running.
An agent can continue working until you pause or delete the sandbox, or its
timer expires. Compute is billed while the sandbox runs, even when the agent
has finished its task.

Return to **Sandboxes** in the Console and choose what to do next:

- Pause the sandbox to stop compute charges and keep its files. Confirm that
  it is paused in the list. To continue later, reopen the sandbox and resume
  it. Resuming starts a fresh timer with the original duration.
- Leave it running if the agent still has work to do. Check the expiration
  time: the default **Stop** action stops the sandbox after one hour, including
  background processes, and keeps its files.
- Delete it when you no longer need it. Save the review or push any changes
  you want to keep first. Deletion removes files stored only in the sandbox.

For more detail, see [Lifecycle actions](https://docs.docker.com/agentic-platform/sandboxes/#manage-the-lifecycle).
To run a task from your own terminal, follow the
[cloud CLI walkthrough](https://docs.docker.com/ai/sandboxes/cloud/#get-started).
For programmatic workflows, see the
[Sandboxes API quickstart](https://docs.docker.com/ai/sandboxes-api/get-started/).

## Sandbox options

Configure these options before selecting **Run**:

| Option               | What to choose                                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Agent credentials    | Add the API keys or tokens your kit needs. Saved credentials are reused by default; deselect optional credentials you don't want to include. See [Secrets](https://docs.docker.com/agentic-platform/secrets/).                                                           |
| GitHub token         | Provide a token for Copilot or for cloning private repositories and pushing changes. Copilot uses the same token for both. Repository access is optional for other agents. See [GitHub credential](https://docs.docker.com/agentic-platform/secrets/#github-credential). |
| Network policies     | Review the hosts and services the sandbox can reach. See [Network policies](https://docs.docker.com/agentic-platform/policies/).                                                                                                                                         |
| MCP tools            | Choose the servers your agent can use and authorize them if prompted. See [MCP](https://docs.docker.com/agentic-platform/mcp/).                                                                                                                                          |
| Compute and platform | Choose CPU and memory resources. Under **Platform**, use **auto** or a platform supported by the kit's image. See [Sandbox platforms](https://docs.docker.com/agentic-platform/sandboxes/#choose-a-platform).                                                            |
| Timer                | Under **Run for**, choose 1 to 24 hours. Under **When the time is up**, choose **Stop**, **Delete**, or **Restart** if offered. See [Lifecycle actions](https://docs.docker.com/agentic-platform/sandboxes/#manage-the-lifecycle).                                       |

The launcher remembers your policy selections from the previous launch in the
same browser. Policies marked **Always applied** are selected automatically.
Review the selected policies before launching. Selecting **Balanced** alongside
**Open** doesn't restrict Open's access; see [How policies combine](https://docs.docker.com/agentic-platform/policies/#how-policies-combine).
