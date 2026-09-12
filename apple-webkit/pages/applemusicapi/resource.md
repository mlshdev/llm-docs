> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/resource](https://developer.apple.com/documentation/applemusicapi/resource)

# Resource

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource—such as an album, song, or playlist.

## Declaration

```
object Resource
```

## Properties

- `id` — `string` (required): Persistent identifier of the resource.
- `type` — `string` (required): The type of resource.
- `href` — `string`: A URL subpath that fetches the resource as the primary object. This member is only present in responses.
- `attributes` — `Resource.Attributes`: Attributes belonging to the resource (can be a subset of the attributes). The members are the names of the attributes defined in the object model.
- `relationships` — `Resource.Relationships`: Relationships belonging to the resource (can be a subset of the relationships). The members are the names of the relationships defined in the object model. See [Relationship](relationship.md) object for the values of the members.
- `meta` — `Resource.Meta`: Information about the request or response. The members may be any of the endpoint parameters.
- `views` — `Resource.Views`: The relationship views for the resource.

<a id="Discussion"></a>

## Discussion

A Resource object may contain just these identifier members: `id`, `type`, `href`, and `meta`.

## Topics

### Related Objects

- [Resource.Attributes](resource/attributes-data.dictionary.md): Attributes representing the metadata of the resource.
- [Resource.Relationships](resource/relationships-data.dictionary.md): Relationships belonging to the resource.

### Dictionaries

- [Resource.Meta](resource/meta-data.dictionary.md): Information about the request or response.
- [Resource.Views](resource/views-data.dictionary.md): Views belonging to the resource.

## See Also

### Getting Resource and Relationship Information

- [Relationship](relationship.md): A to-one or to-many relationship from one resource object to others.
