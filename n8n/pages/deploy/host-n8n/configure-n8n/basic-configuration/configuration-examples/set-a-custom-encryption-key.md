> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-a-custom-encryption-key.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-a-custom-encryption-key.md)

# Set a custom encryption key <a id="set-a-custom-encryption-key"></a>

n8n creates a random encryption key automatically on the first launch and saves
it in the `~/.n8n` folder. n8n uses that key to encrypt the credentials before
they get saved to the database. If the key isn't yet in the settings file,
you can set it using an environment variable, so that n8n
uses your custom key instead of generating a new one.

In [queue mode](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode), you must specify the encryption key environment variable for all workers.

```bash
export N8N_ENCRYPTION_KEY=<SOME RANDOM STRING>
```

Refer to [Environment variables reference](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment) for more information on this variable.
