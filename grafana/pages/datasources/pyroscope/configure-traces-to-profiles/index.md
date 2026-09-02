> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/pyroscope/configure-traces-to-profiles/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/pyroscope/configure-traces-to-profiles/index.md)

# Configure Trace to profiles

Trace to profiles lets you navigate from a trace span directly to the profiling data for that span. You configure it in the Tempo data source, which connects your tracing data in Tempo with your profiling data in Pyroscope.

> **Note**
>
> Your application must be instrumented for profiles and traces. For more information, refer to [Link traces to profiles](https://grafana.com/docs/pyroscope/latest/configure-client/trace-span-profiles/).

[//]: # "Shared content for Trace to profiles in the Tempo data source"

[//]: # "This file documents the Traces to profile configure and usage for the Tempo data source."

[//]: # "This shared file is included in these locations:"

[//]: # "/grafana/docs/sources/datasources/tempo/configure-tempo-data-source.md"

[//]: # "/website/docs/grafana-cloud/data-configuration/traces/traces-query-editor.md"

[//]: #

[//]: # "If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included."

[//]: # "Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/."

Using Trace to profiles, you can use the ability to correlate different signals in Grafana by adding the functionality to link between traces and profiles.

**Trace to profiles** lets you link your Grafana Pyroscope data source to tracing data.
When configured, this connection lets you run queries from a trace span into the profile data using **Explore**.
Each span links to your queries. Clicking a link runs the query in a split panel.
If tags are configured, Grafana dynamically inserts the span attribute values into the query.
The query runs over the time range of the (span start time - 60) to (span end time + 60 seconds).

Embedded flame graphs are also inserted into each span details section that has a linked profile.
This lets you see resource consumption in a flame graph visualization for each span without having to navigate away from the current view.

[Watch the video on YouTube](https://www.youtube.com/watch?v=AG8VzfFMLxo)

There are two ways to configure the trace to profiles feature:

- Use a basic configuration with default query, or
- Configure a custom query where you can use a template language to interpolate variables from the trace or span.

![Traces to profiles section in the Tempo data source](https://grafana.com/media/docs/grafana/data-sources/tempo/tempo-data-source-trace-to-profiles.png)

## Before you begin

To use Trace to profiles, you need:

- A [Grafana Pyroscope data source](https://grafana.com/docs/grafana/v13.2/datasources/grafana-pyroscope/) connected to your Pyroscope instance.
- A Tempo data source configured with the Trace to profiles settings described on this page.
- Your application instrumented with all three of the following:
  1. **Profiling**: A Pyroscope SDK or Grafana Alloy sending profiling data to Pyroscope. Refer to [Configure the client to send profiles](https://grafana.com/docs/pyroscope/latest/configure-client/) for setup instructions.
  2. **Tracing**: An OpenTelemetry SDK sending trace data to Tempo. Refer to the [OpenTelemetry getting started documentation](https://opentelemetry.io/docs/getting-started/) for setup instructions.
  3. **Span profiling bridge**: A language-specific OpenTelemetry integration package that links profiling data with trace spans. Without this package, traces and profiles are independent signals with no connection between them. Refer to [Link tracing and profiling with span profiles](https://grafana.com/docs/pyroscope/latest/configure-client/trace-span-profiles/) for per-language setup instructions.

## Use a basic configuration

To use a basic configuration, follow these steps:

1. In the left menu, select **Connections** > **Data sources**.

2. Select your configured Tempo data source from the **Data source** list.

3. Scroll down to the **Traces to profiles** section.

4. Select a Pyroscope data source in the **Data source** drop-down.

5. Optional: Add one or more tags to use in the query. If left blank, the default values of `service.name` and `service.namespace` are used.

   The tags you configure must be present in the spans attributes or resources for a trace-to-profiles span link to appear.

   You can optionally configure a new name for the tag. This is useful if the tag has dots in the name and the target data source doesn't allow dots in labels. In that case, you can remap `service.name` to `service_name`.

6. Select a profile type to use in the query. Select the drop-down and choose an option from the menu.

   The profile type or app must be selected for the query to be valid. Grafana doesn't show any data if the profile type or app isn't selected when a query runs.

7. Select **Save and Test**.

If you have configured a Pyroscope data source and no profile data is available or the **Profiles for this span**
button and the embedded flame graph isn't visible, verify that the `pyroscope.profile.id` key-value pair exists in your span tags.

## Configure a custom query {#configure-custom-query-traces-profiles}

To use a custom query with the configuration, follow these steps:

1. In the left menu, select **Connections** > **Data sources**.

2. Select a configured Tempo data source from the **Data source** list.

3. Scroll down to the **Traces to profiles** section.

4. Select a Pyroscope data source in the **Data source** drop-down.

5. Optional: Choose any tags to use in the query. If left blank, the default values of `service.name` and `service.namespace` are used.

   These tags can be used in the custom query with `${__tags}` variable. This variable interpolates the mapped tags as list in an appropriate syntax for the data source. Only tags present in the span are included. Tags that aren't present are omitted.

   You can also configure a name for the tag. Tag names are useful where the tag has dots in the name and the target data source doesn't allow using dots in labels. For example, you can remap `service.name` to `service_name`. If you don't map any tags here, you can still use any tag in the query, for example: `method="${__span.tags.method}"`. Learn more about [custom query variables](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/#custom-query-variables).

6. Select a profile type to use in the query. Select the drop-down and choose an option from the menu.

7. Switch on **Use custom query** to enter a custom query.

8. Specify a custom query to be used to query profile data. You can use various variables to make that query relevant for current span. The link shows only if all the variables are interpolated with non-empty values to prevent creating an invalid query. You can interpolate the configured tags using the `$__tags` keyword.

9. Select **Save and Test**.

## Configuration options

The following table describes options for configuring your **Trace to profiles** settings:

| Setting name     | Description                                                                                                                                                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data source      | Defines the target data source. You can select a Pyroscope \[profiling] data source.                                                                                                                                                                                                                           |
| Tags             | Defines the tags to use in the profile query. Default: `cluster`, `hostname`, `namespace`, `pod`, `service.name`, `service.namespace`. You can change the tag name for example to remove dots from the name if they're not allowed in the target data source. For example, map `http.status` to `http_status`. |
| Profile type     | Defines the profile type to use in the query.                                                                                                                                                                                                                                                                  |
| Use custom query | Toggles use of custom query with interpolation.                                                                                                                                                                                                                                                                |
| Query            | Input to write custom query. Use variable interpolation to customize it with variables from span.                                                                                                                                                                                                              |

## Verify the connection

After you configure the Tempo data source and instrument your application, verify that Trace to profiles works.

1. Open a trace in **Explore** using your Tempo data source.
2. Expand a span to view its details.
3. Confirm that the **Profiles for this span** button appears in the span details.
4. Confirm that an embedded flame graph appears in the span details section.

If the span attribute `pyroscope.profile.id` isn't present on the span, the OpenTelemetry bridge package isn't configured correctly. Refer to [Link tracing and profiling with span profiles](https://grafana.com/docs/pyroscope/latest/configure-client/trace-span-profiles/) for per-language setup instructions.

## Troubleshoot trace to profiles

Use the following checklist to diagnose common issues with Trace to profiles.

### No "Profiles for this span" button appears

1. Verify that you installed and configured the OTel bridge package for your language. This is a separate package from the Pyroscope SDK and OpenTelemetry SDK. Refer to [Link tracing and profiling with span profiles](https://grafana.com/docs/pyroscope/latest/configure-client/trace-span-profiles/) for per-language instructions.
2. Check that the `pyroscope.profile.id` attribute exists on the span in Tempo. If it's missing, the bridge package isn't tagging spans correctly.
3. Check that the `span_name` label exists on the profiling data in Pyroscope. If it's missing, the bridge package isn't labeling profiling samples correctly.
4. Verify that the tags you configured in the Tempo data source are present in the span's attributes or resources. If the tags don't match, the span link doesn't appear.

### Button appears but no profile data is shown

1. The span might be shorter than the sampling interval of the profiler. Span profiling is most effective on spans longer than 20ms.
2. CPU profiling only captures time spent actively executing on the CPU. If the span is mostly waiting on I/O, network calls, or database queries, the CPU profile for that span may be sparse or empty.
3. Verify that the profile type selected in the Tempo data source configuration matches the profile type your application sends.

### Tags don't match

Tags you configure in the Tempo data source must be present in the span's attributes or resources. If a tag has dots in its name, for example, `service.name`, and the Pyroscope data source doesn't allow dots in labels, remap it to a name without dots, for example, `service_name`.
