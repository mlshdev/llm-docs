> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/vars.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/vars.md)

# `vars` <a id="vars"></a>

> **Info**
> **Feature availability**
>
> `vars` is available on:
>
> - **n8n Cloud:** Pro, Enterprise
> - **Self-hosted:** Business, Enterprise
>
> You need access to the n8n instance owner account to create variables.

`vars` contains all [Variables](https://docs.n8n.io/build/code-in-n8n/define-custom-variables) for the active environment. It's read-only: you can access variables using `vars`, but must set them using the UI.

**JavaScript**

```js
// Access a variable
$vars.<variable-name>
```

**Python**

```python
# Access a variable
_vars.<variable-name>
```

> **Info**
> **`vars` and `env`**
>
> `vars` gives access to user-created variables. It's part of the [Environments](https://docs.n8n.io/administer/use-source-control-and-environments) feature. `env` gives access to the [configuration environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables) for your n8n instance.
