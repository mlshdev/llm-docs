> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/enable-modules-in-code-node.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/enable-modules-in-code-node.md)

# Enable modules in Code node <a id="enable-modules-in-code-node"></a>

For security reasons, the Code node restricts importing modules. It's possible to lift that restriction for built-in and external modules by setting the following environment variables:

- `NODE_FUNCTION_ALLOW_BUILTIN`: For built-in modules
- `NODE_FUNCTION_ALLOW_EXTERNAL`: For external modules sourced from n8n/node\_modules directory. External module support is disabled when an environment variable isn't set.

```bash
# Allows usage of all builtin modules <a id="allows-usage-of-all-builtin-modules"></a>
export NODE_FUNCTION_ALLOW_BUILTIN=*

# Allows usage of only crypto <a id="allows-usage-of-only-crypto"></a>
export NODE_FUNCTION_ALLOW_BUILTIN=crypto

# Allows usage of only crypto and fs <a id="allows-usage-of-only-crypto-and-fs"></a>
export NODE_FUNCTION_ALLOW_BUILTIN=crypto,fs

# Allow usage of external npm modules. <a id="allow-usage-of-external-npm-modules"></a>
export NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash
```

> **Info**
> **If using Task Runners**
>
> If n8n instance is setup with [Task Runners](https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-task-runners), add the environment variables to the Task Runners instead to the main n8n node.

Refer to [Environment variables reference](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes) for more information on these variables.
