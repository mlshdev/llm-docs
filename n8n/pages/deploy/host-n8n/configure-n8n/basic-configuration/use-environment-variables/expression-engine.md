> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/expression-engine.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/expression-engine.md)

# Expression engine environment variables <a id="expression-engine-environment-variables"></a>

> **Info**
> **File-based configuration**
>
> You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration#keeping-sensitive-data-in-separate-files) for more details.

[Expressions](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes) are the JavaScript snippets n8n evaluates at runtime to set node parameters dynamically. The expression engine is the component that runs that evaluation. This page lists environment variables for configuring it.

> **Info**
> **Experimental**
>
> The `vm` engine is experimental. n8n runs the `legacy` engine by default. The variables below other than `N8N_EXPRESSION_ENGINE` only take effect when you set `N8N_EXPRESSION_ENGINE` to `vm`.

| Variable                                    | Type                        | Default  | Description                                                                                                                                                                |
| :------------------------------------------ | :-------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_EXPRESSION_ENGINE`                     | Enum string: `legacy`, `vm` | `legacy` | Which expression engine to use. `legacy` runs expressions without isolation. `vm` runs them in a sandboxed V8 isolate. `vm` is experimental; `legacy` remains the default. |
| `N8N_EXPRESSION_ENGINE_POOL_SIZE`           | Number                      | `1`      | Number of V8 isolates kept warm in the pool.                                                                                                                               |
| `N8N_EXPRESSION_ENGINE_MAX_CODE_CACHE_SIZE` | Number                      | `1024`   | Maximum number of compiled expressions to cache.                                                                                                                           |
| `N8N_EXPRESSION_ENGINE_TIMEOUT`             | Number                      | `5000`   | Execution timeout in milliseconds for each expression evaluation.                                                                                                          |
| `N8N_EXPRESSION_ENGINE_MEMORY_LIMIT`        | Number                      | `128`    | Memory limit in MiB for each V8 isolate.                                                                                                                                   |
| `N8N_EXPRESSION_ENGINE_IDLE_TIMEOUT`        | Number                      | -        | If set, scales the isolate pool to zero warm isolates after this many seconds with no activity.                                                                            |
