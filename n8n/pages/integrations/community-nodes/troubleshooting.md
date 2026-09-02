> Commit-pinned source for n8n main: [docs/integrations/community-nodes/troubleshooting.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/integrations/community-nodes/troubleshooting.md)

# Troubleshooting and errors <a id="troubleshooting-and-errors"></a>

## Error: Missing packages <a id="error-missing-packages"></a>

n8n installs community nodes directly onto the hard disk. The files must be available at startup for n8n to load them. If the packages aren't available at startup, you get an error warning of missing packages.

If running n8n using Docker: depending on your Docker setup, you may lose the packages when you recreate your container or upgrade your n8n version. You must either:

- Persist the contents of the `~/.n8n/nodes` directory. This is the best option. If you follow the [Docker installation](https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker) guide, the setup steps include persisting this directory.
- Set the `N8N_REINSTALL_MISSING_PACKAGES` environment variable to `true`.

The second option might increase startup time and may cause health checks to fail.

## Prevent loading community nodes on n8n cloud <a id="prevent-loading-community-nodes-on-n8n-cloud"></a>

If your n8n cloud instance crashes and fails to start, you can prevent installed community nodes from loading on instance startup. Visit the [Cloud Admin Panel](https://docs.n8n.io/deploy/use-n8n-cloud/use-the-admin-dashboard) > **Manage** and toggle **Disable all community nodes** to **`true`**. This toggle is only visible when you allow community node installation.
