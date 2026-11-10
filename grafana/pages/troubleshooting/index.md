> Pinned source for Grafana v13.3.1: [docs/sources/troubleshooting/_index.md](https://github.com/grafana/grafana/blob/5db6ba887630c7fa12e5bfd063f2fa854025468c/docs/sources/troubleshooting/_index.md)

# Troubleshooting

This page lists some tools and advice to help troubleshoot common Grafana issues.

- [Generate diagnostic bundle](https://grafana.com/docs/grafana/v13.3/troubleshooting/generate-diagnostic-bundle/): Generate a data source diagnostic bundle and send it to Grafana Labs Support for troubleshooting.
- [HAR captures](https://grafana.com/docs/grafana/v13.3/troubleshooting/har-captures/): Generate a HAR capture to send to Grafana Labs support for troubleshooting.
- [Send panel to Grafana Support](https://grafana.com/docs/grafana/v13.3/troubleshooting/send-panel-to-grafana-support/): Send a panel to Grafana Labs support for troubleshooting.

## Troubleshoot transformations

The order of transformations matters. If the final data output from multiple transformations looks wrong, try changing the transformation order. Each transformation transforms data returned by the previous transformation, not the original raw data.

For more information, refer to [Debug a transformation](https://grafana.com/docs/grafana/v13.3/visualizations/panels-visualizations/query-transform-data/transform-data/#debug-a-transformation).

## Troubleshoot with logs

If you encounter an error or problem, then you can check the Grafana server log. Usually located at `/var/log/grafana/grafana.log` on Unix systems or in `<grafana_install_dir>/data/log` on other platforms and manual installations.

You can enable more logging by changing log level in the Grafana configuration file. For more information, refer to [the `gcx` Grafana CLI](https://grafana.com/docs/grafana/latest/as-code/observability-as-code/grafana-cli/gcx/) and the [log section in Configuration](https://grafana.com/docs/grafana/v13.3/setup-grafana/configure-grafana/#log).

## Text is missing when rendering server-side images (RPM-based Linux)

Server-side image rendering is an optional feature that helps you to share visualizations, for example in alert notifications.

If the image is missing text, make sure you have font packages installed:

```bash
sudo yum install fontconfig
sudo yum install freetype*
sudo yum install urw-fonts
```

## Troubleshoot backend performance

If you're experiencing backend performance problems, such as high memory or CPU usage, please refer to [Configure profiling and tracing to troubleshoot Grafana](https://grafana.com/docs/grafana/v13.3/setup-grafana/configure-grafana/configure-tracing/).

## More help

Use the right place to ask questions, report problems, and propose changes.

- **GitHub issues and pull requests**: Use for reproducible bugs in core Grafana and maintained plugins, small and actionable feature requests, and code or docs changes via pull requests. Avoid general “how do I” questions. For security issues, follow the [security policy](https://github.com/grafana/grafana/security/policy).
- **Grafana community forums**: Use for questions, troubleshooting, best practices, plugin development Q\&A, and early idea discussion. Forums create a searchable public knowledge base that helps others with the same problems and questions. Start here if you are unsure: [Grafana community forums](https://community.grafana.com/).
- **Grafana Community Slack**: Use for quick, time-sensitive chats and networking. Do not rely on Slack for long troubleshooting or decisions. Share outcomes back to a forum topic or GitHub issue/PR to keep a public record: [Grafana Community Slack](https://slack.grafana.com).

> **Note**
>
> **Not sure where to start?** Open a new topic in the forum! Maintainers and community members will redirect you if a GitHub issue or pull request is more appropriate.
