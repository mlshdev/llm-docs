> Commit-pinned source for n8n main: [docs/administer/use-source-control-and-environments/README.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/administer/use-source-control-and-environments/README.md)

# Source control and environments <a id="source-control-and-environments"></a>

> **Info**
> **Feature availability**
>
> - Available on Business and Enterprise plans.
> - You must be an n8n instance owner or instance admin to enable and configure source control.
> - Instance owners and instance admins can push changes to and pull changes from the connected repository.
> - Project admins can push changes to the connected repository. They can't pull changes from the repository.

n8n uses Git-based source control to support environments. Linking your n8n instances to a Git repository lets you create multiple n8n environments, backed by Git branches.

In this section:

- [Understand](https://docs.n8n.io/administer/use-source-control-and-environments/understand-source-control):
  - [Environments in n8n](https://docs.n8n.io/administer/use-source-control-and-environments/work-with-environments): The purpose of environments, and how they work in n8n.
  - [Git and n8n](https://docs.n8n.io/administer/use-source-control-and-environments/use-git-in-n8n): How n8n uses Git.
  - [Branch patterns](https://docs.n8n.io/administer/use-source-control-and-environments/choose-branching-patterns): The possible relationships between n8n instances and Git branches.
- [Set up source control for environments](https://docs.n8n.io/administer/use-source-control-and-environments/set-up-source-control): How to connect your n8n instance to Git.
- Using:
  - [Push and pull](https://docs.n8n.io/administer/use-source-control-and-environments/push-and-pull-changes): Send work to Git, and fetch work from Git to your instance.
  - [Copy work between environments](https://docs.n8n.io/administer/use-source-control-and-environments/move-work-between-environments): How to copy work between different n8n instances.
- [Tutorial: Create environments with source control](https://docs.n8n.io/administer/use-source-control-and-environments/tutorial-create-environments-with-source-control): An end-to-end tutorial, setting up environments using n8n's recommended configurations.

Related sections:

- [Variables](https://docs.n8n.io/build/code-in-n8n/define-custom-variables): reusable values.
- [External secrets](https://docs.n8n.io/administer/manage-credentials/use-external-secret-stores): manage credentials[^1] with an external secrets vault.

[^1]: In n8n, credentials store authentication information to connect with specific apps and services. After creating credentials with your authentication information (username and password, API key, OAuth secrets, etc.), you can use the associated app node to interact with the service.
