> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/recordlabels/views-data.dictionary/recordlabelslatestreleasesview](https://developer.apple.com/documentation/applemusicapi/recordlabels/views-data.dictionary/recordlabelslatestreleasesview)

# RecordLabels.Views.RecordLabelsLatestReleasesView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this record label to a selection of its latest releases.

## Declaration

```
object RecordLabels.Views.RecordLabelsLatestReleasesView
```

## Properties

- `href` — `string`: A relative location for the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.
- `attributes` — `RecordLabels.Views.RecordLabelsLatestReleasesView.Attributes` (required): The attributes for the view.
- `data` — `[Albums]` (required): A selection of latest releases from this record label.

## Topics

### Related Objects

- [RecordLabels.Views.RecordLabelsLatestReleasesView.Attributes](recordlabelslatestreleasesview/attributes-data.dictionary.md): The attributes for the record label latest releases view.

## See Also

### Related Objects

- [RecordLabels.Views.RecordLabelsTopReleasesView](recordlabelstopreleasesview.md): A relationship view from this record label to a selection of its top releases.
