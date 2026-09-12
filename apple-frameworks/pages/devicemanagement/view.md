> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/view](https://developer.apple.com/documentation/devicemanagement/view)

# View

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A view for the resource.

## Declaration

```
object View
```

## Properties

- `attributes` — `View.Attributes`: The attribute metadata for the view.
- `data` — `[Resource]` (required): A paginated collection of resources in the view.
- `href` — `string`: A relative location to fetch the view, if it’s directly fetchable.
- `meta` — `View.Meta`: Contextual data about the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.

## Topics

### Objects

- [View.Attributes](view/attributes-data.dictionary.md): The attribute metadata for the view.
- [View.Meta](view/meta-data.dictionary.md): Contextual data about the view.

## See Also

### Related Objects

- [Resource.Attributes](resource/attributes-data.dictionary.md)
- [Resource.Meta](resource/meta-data.dictionary.md)
- [Resource.Relationships](resource/relationships-data.dictionary.md)
- [Resource.Views](resource/views-data.dictionary.md)
