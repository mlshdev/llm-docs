> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/passtypeid](https://developer.apple.com/documentation/enterpriseprogramapi/passtypeid)

# PassTypeId

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a pass type ID.

## Declaration

```
object PassTypeId
```

## Properties

- `attributes` — `PassTypeId.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `PassTypeId.Relationships`:
- `type` — `string` (required): **Allowed values:** `passTypeIds`

## Topics

### Objects

- [PassTypeId.Attributes](passtypeid/attributes-data.dictionary.md): Attributes that describe a PassTypeId resource.
- [PassTypeId.Relationships](passtypeid/relationships-data.dictionary.md): The data structure that represents the relationships of a pass type ID.

## See Also

### Object and Data Types

- [PassTypeIdCreateRequest](passtypeidcreaterequest.md): The request body you use to create a pass type ID.
- [PassTypeIdResponse](passtypeidresponse.md): A response that contains a pass type ID resource.
- [PassTypeIdsResponse](passtypeidsresponse.md): A response that contains a list of pass type ID resources.
- [PassTypeIdUpdateRequest](passtypeidupdaterequest.md): The request body you use to update a pass type ID name.
