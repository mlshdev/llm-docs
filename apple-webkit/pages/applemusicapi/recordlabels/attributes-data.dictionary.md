> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/recordlabels/attributes-data.dictionary](https://developer.apple.com/documentation/applemusicapi/recordlabels/attributes-data.dictionary)

# RecordLabels.Attributes

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The attributes for a record label resource.

## Declaration

```
object RecordLabels.Attributes
```

## Properties

- `artwork` — `Artwork` (required): Artwork associated with this content.
- `description` — `DescriptionAttribute`: A map of description information.
- `name` — `string` (required): The (potentially) censored name of the content.
- `url` — `string` (required): The URL to load the record label from.

## See Also

### Related Objects

- [RecordLabels.Views](views-data.dictionary.md): The relationship views for a record label resource.
