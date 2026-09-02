> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/visualizations/annotations/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/visualizations/annotations/index.md)

# Annotations list

The annotations list shows a list of available annotations you can use to view annotated data. Various options are available to filter the list based on tags and on the current dashboard.

![The annotations list visualization](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-annotations-list-viz-v12.0.png)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Annotation query options

The following options control the source query for the list of annotations:

| Option                        | Description                                                                                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Query filter](#query-filter) | Specify which annotations are included in the list.                                                                                                                                                                      |
| [Time range](#time-range)     | Specify whether the list should be limited to the current time range.                                                                                                                                                    |
| Tags                          | Filter the annotations by tags. You can add multiple tags to refine the list. Optionally, leave the tag list empty and filter in view mode by selecting tags that are listed as part of the results on the panel itself. |
| Limit                         | Limit the number of results returned. The default is `10`.                                                                                                                                                               |

#### Query filter

Use the **Query filter** option to create a list of annotations from all dashboards in your organization or the current dashboard in which this panel is located.
Choose from:

- **All dashboards** - List annotations from all dashboards in the current organization.
- **This dashboard** - Limit the list to the annotations on the current dashboard.

#### Time range

Specify whether the list should be limited to the current time range.
Choose from:

- **None** - No time range limit for the annotations query.
- **This dashboard** - Limit the list to the time range of the dashboard where the annotations list is available.

### Display options

These options control additional metadata included in the annotations list display:

| Option    | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| Show user | Show or hide which user created the annotation.                                                                     |
| Show time | Show or hide the time the annotation creation time.                                                                 |
| Show tags | Show or hide the tags associated with an annotation. Note that you can use the tags to filter the annotations list. |

### Link behavior options

Use the following options to control the behavior of annotation links in the list:

| Option      | Description                                                                                                                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Link target | Set how to view the annotated data. The default is **Panel**. Choose from:<ul><li>**Panel** - The link takes you directly to a full-screen view of the panel with the corresponding annotation.</li><li>**Dashboard** - Focuses the annotation in the context of a complete dashboard.</li></ul> |
| Time before | Set the time range before the annotation. Use duration string values like `1h` for one hour and `10m` for 10 minutes. The default is `10m`.                                                                                                                                                      |
| Time after  | Set the time range after the annotation. The default is `10m`.                                                                                                                                                                                                                                   |
