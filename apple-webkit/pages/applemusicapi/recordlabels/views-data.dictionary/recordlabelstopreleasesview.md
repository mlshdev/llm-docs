> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/recordlabels/views-data.dictionary/recordlabelstopreleasesview](https://developer.apple.com/documentation/applemusicapi/recordlabels/views-data.dictionary/recordlabelstopreleasesview)

# RecordLabels.Views.RecordLabelsTopReleasesView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this record label to a selection of its top releases.

## Declaration

```
object RecordLabels.Views.RecordLabelsTopReleasesView
```

## Properties

- `href` — `string`: A relative location for the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.
- `attributes` — `RecordLabels.Views.RecordLabelsTopReleasesView.Attributes` (required): The attributes for the view.
- `data` — `[Albums]` (required): A selection of top releases from this record label.

## Topics

### Related Objects

- [RecordLabels.Views.RecordLabelsTopReleasesView.Attributes](recordlabelstopreleasesview/attributes-data.dictionary.md): The attributes for the record label top releases view.

## See Also

### Related Objects

- [RecordLabels.Views.RecordLabelsLatestReleasesView](recordlabelslatestreleasesview.md): A relationship view from this record label to a selection of its latest releases.
