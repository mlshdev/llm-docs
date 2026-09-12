> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/passtypeidsresponse](https://developer.apple.com/documentation/enterpriseprogramapi/passtypeidsresponse)

# PassTypeIdsResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of pass type ID resources.

## Declaration

```
object PassTypeIdsResponse
```

## Properties

- `data` — `[PassTypeId]` (required):
- `included` — `[Certificate]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Object and Data Types

- [PassTypeId](passtypeid.md): The data structure that represents a pass type ID.
- [PassTypeIdCreateRequest](passtypeidcreaterequest.md): The request body you use to create a pass type ID.
- [PassTypeIdResponse](passtypeidresponse.md): A response that contains a pass type ID resource.
- [PassTypeIdUpdateRequest](passtypeidupdaterequest.md): The request body you use to update a pass type ID name.
