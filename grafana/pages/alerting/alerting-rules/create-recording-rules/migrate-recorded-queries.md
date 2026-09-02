> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/alerting-rules/create-recording-rules/migrate-recorded-queries.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/alerting-rules/create-recording-rules/migrate-recorded-queries.md)

# Migrate recorded queries

Users can transpose their [now-depreciated recorded queries](https://grafana.com/docs/grafana/latest/administration/recorded-queries/) into Grafana-managed recording rules in a few easy steps. The query PromQL for each recorded query has been exposed on the recorded queries list along with the existing datasource, time range, and interval values to simplify the migration process.

## Migrate your recorded queries to Grafana-managed alert rules

1. Navigate to **Administration** -> **Plugins and Data** -> **Recorded queries.**

2. Note the data source, query PromQL, interval, and time range, and copy them somewhere accessible.

![Example of relevant recorded query information](https://grafana.com/media/docs/alerting/rec-query-example.png)

1. Now navigate to **Alerting** -> **Alert rules.**

2. At the top of the Alert rules page, click **More** -> **New Grafana recording rule**.

   Add a name for your Recording Rule and a name for the new metric that the recording rule generates.

3. Select your data source and paste your ratio query PromQL into the query builder.

   Click **Options** and validate that the Time Range is the same as your recorded query.

4. Select the Folder you would like the rule to be created in.

5. Add any labels to the rule.

6. Select or create an evaluation group. Set your evaluation group’s evaluation interval to the interval of your recorded query.

7. Review your rule and click Save **rule and exit** when you are finished.

8. Update any areas where the recorded query was referenced to use the new Grafana-managed recording rule.
