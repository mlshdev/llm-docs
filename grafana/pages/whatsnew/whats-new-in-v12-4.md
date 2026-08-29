> Release-pinned source for Grafana v13.2.0: [docs/sources/whatsnew/whats-new-in-v12-4.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/whatsnew/whats-new-in-v12-4.md)

# What’s new in Grafana v12.4

Welcome to Grafana 12.4!

This release doubles down on dashboard automation and Git-powered workflows while delivering a range of polish and usability improvements.

The headline is improved dashboard productivity: Dynamic dashboards and template-driven workflows make it far easier to create, reuse, and operate dashboards at scale. Create dashboards from templates, map one variable to multiple values, apply regular expression transforms to variable values or display text, and benefit from smarter visualization suggestions and an updated gauge panel that help surface the right view for your data. At the same time, Git Sync is now available in public preview, providing a smooth Git-backed workflow to keep dashboards in source control and enable safer, auditable changes to dashboard content. These two areas together are aimed at speeding up development, improving consistency, and making dashboard CI/CD practical for teams.

Beyond dashboards, this version includes improvements across the product: Logs and Logs Drilldown get better default columns and save/resume log explorations, data sources receive sensible new defaults and expanded support, SCIM provisioning simplifies user and team management, short URLs are now persistent, and a small set of breaking changes and storage migration enhancements help ensure long-term manageability.

[Watch the video on YouTube](https://www.youtube.com/watch?v=fWpL1Upc754)

For even more detail about all the changes in this release, refer to the [changelog](https://github.com/grafana/grafana/blob/main/CHANGELOG.md). For the specific steps we recommend when you upgrade to v12.4, check out our [Upgrade Guide](https://grafana.com/docs/grafana/v13.2/upgrade-guide/upgrade-v12.4/).
