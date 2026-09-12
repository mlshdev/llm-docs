> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/view](https://developer.apple.com/documentation/applemusicapi/view)

# View

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A to-one or to-many relationship view from one resource object to others representing interesting associations.

## Declaration

```
object View
```

## Properties

- `href` — `string`: A URL subpath that fetches the view resources and attributes as the primary objects. This member is only present in responses.
- `next` — `string`: Link to the next page of resources in the view. Contains the `offset` query parameter that specifies the next page. See `Fetch Resources by Page`.
- `attributes` — `View.Attributes`: Attributes specific to the view.
- `data` — `[Resource]` (required): One or more destination objects.
- `meta` — `View.Meta`: Contextual information about the view for the request or response.

## Topics

### Related Objects

- [View.Attributes](view/attributes-data.dictionary.md): Attributes representing the metadata of the view.
- [View.Meta](view/meta-data.dictionary.md): Information about the request or response.
