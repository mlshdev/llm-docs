> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/recordlabels](https://developer.apple.com/documentation/applemusicapi/recordlabels)

# RecordLabels

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a record label.

## Declaration

```
object RecordLabels
```

## Properties

- `id` — `string` (required): The identifier for the record label.
- `type` — `string` (required): This value must always be `record-labels`.
  **Allowed values:** `record-labels`
- `href` — `string` (required): A relative location for the record label resource.
- `attributes` — `RecordLabels.Attributes`: The attributes of the record label.
- `views` — `RecordLabels.Views`: The relationship views for the record label.

## Topics

### Related Objects

- [RecordLabels.Attributes](recordlabels/attributes-data.dictionary.md): The attributes for a record label resource.
- [RecordLabels.Views](recordlabels/views-data.dictionary.md): The relationship views for a record label resource.

## See Also

### Handling the Response

- [RecordLabelsResponse](recordlabelsresponse.md): The response to a request for record labels.
