> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/resource](https://developer.apple.com/documentation/devicemanagement/resource)

# Resource

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A resource such as an app or book.

## Declaration

```
object Resource
```

## Properties

- `attributes` — `Resource.Attributes`: The attribute metadata for the resource.
- `href` — `string`: The relative location for the resource, if it may be fetched directly.
- `id` — `string` (required): The identifier of the resource.
- `meta` — `Resource.Meta`: Contextual data about the resource.
- `relationships` — `Resource.Relationships`: The relationships for the resource.
- `type` — `string` (required): The type of the resource.
- `views` — `Resource.Views`: The views for the resource.

## Topics

### Related Objects

- [View](view.md): A view for the resource.
- [Resource.Attributes](resource/attributes-data.dictionary.md)
- [Resource.Meta](resource/meta-data.dictionary.md)
- [Resource.Relationships](resource/relationships-data.dictionary.md)
- [Resource.Views](resource/views-data.dictionary.md)

## See Also

### Getting resource and relationship information

- [Relationship](relationship.md): A to-one or to-many relationship from one resource object to others.
