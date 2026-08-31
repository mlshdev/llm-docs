> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.jenkins.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.jenkins.md)

# Jenkins node <a id="jenkins-node"></a>

Use the Jenkins node to automate work in Jenkins, and integrate Jenkins with other applications. n8n has built-in support for a wide range of Jenkins features, including listing builds, managing instances, and creating and copying jobs.

On this page, you'll find a list of operations the Jenkins node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Jenkins credentials](https://docs.n8n.io/integrations/builtin/credentials/jenkins) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Build
  - List Builds
- Instance
  - Cancel quiet down state
  - Put Jenkins in quiet mode, no builds can be started, Jenkins is ready for shutdown
  - Restart Jenkins immediately on environments where it's possible
  - Restart Jenkins once no jobs are running on environments where it's possible
  - Shutdown once no jobs are running
  - Shutdown Jenkins immediately
- Job
  - Copy a specific job
  - Create a new job
  - Trigger a specific job
  - Trigger a specific job

## Templates and examples <a id="templates-and-examples"></a>

[Browse Jenkins node documentation integration templates](https://n8n.io/integrations/jenkins) or [search all templates](https://n8n.io/workflows/)
