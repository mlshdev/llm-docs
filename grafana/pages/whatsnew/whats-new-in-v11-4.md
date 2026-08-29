> Release-pinned source for Grafana v13.2.0: [docs/sources/whatsnew/whats-new-in-v11-4.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/whatsnew/whats-new-in-v11-4.md)

# What’s new in Grafana v11.4

Welcome to Grafana 11.4! This is a special release with one new feature, created in partnership with AWS. We’ve made improvements to Cloudwatch so you can query your logs using two additional query languages: Opensearch PPL and Opensearch SQL. We’ve also updated the querying experience by providing a sample of commonly-used queries, syntax highlighting in the query editor, and auto-completion suggestions for complex queries. Read on to learn more about this new feature.

For even more detail about all the changes in this release, refer to the [changelog](https://github.com/grafana/grafana/blob/main/CHANGELOG.md). For the specific steps we recommend when you upgrade to v11.4, check out our [Upgrade Guide](https://grafana.com/docs/grafana/v13.2/upgrade-guide/upgrade-v11.4/).

## Query Cloudwatch Logs Insights with PPL and SQL

*Generally available in all editions of Grafana*

The AWS CloudWatch data source plugin now offers two new query languages for searching through logs: OpenSearch PPL and OpenSearch SQL. You now have increased flexibility to choose a more familiar query language and to take advantage of their unique features (like the SQL JOIN command) when querying AWS CloudWatch Logs Insights. In addition to the already supported **Logs Insights QL** option, you can find the added query language options in the new **Query language** drop-down list.

![CloudWatch logs explore query languages drop-down list opened](https://grafana.com/media/docs/grafana/data-sources/screenshot-awscw-query-languages-v11.4.png)

We’ve also updated the query editor to support syntax highlighting and to provide suggestions while you type, which simplifies writing complex queries. When you select log groups, the suggestions also include [discovered fields](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html).

Not sure where to start? We’ve also updated our **CloudWatch Logs cheat sheet** with the most commonly used queries so you can paste and customize to fit exactly what you need. Clicking on any of the example queries prefills the query input field.

![CloudWatch Logs cheat sheet with help icon highlighted](https://grafana.com/media/docs/grafana/data-sources/screenshot-cwl-cheat-sheet-v11.4.png)

For the complete list of commands supported for OpenSearch PPL and SQL, refer to the [Cloudwatch Logs Insights documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).

[Watch the video on YouTube](https://www.youtube.com/watch?v=g1BfokyzF4Q)
