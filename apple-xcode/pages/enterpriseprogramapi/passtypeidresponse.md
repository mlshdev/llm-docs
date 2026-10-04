> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/enterpriseprogramapi/passtypeidresponse

# PassTypeIdResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a pass type ID resource.

## Declaration

```
object PassTypeIdResponse
```

## Properties

- `data` — `PassTypeId` (required):
- `included` — `[Certificate]`:
- `links` — `DocumentLinks` (required):

## See Also

### Object and Data Types

- [PassTypeId](passtypeid.md): The data structure that represents a pass type ID.
- [PassTypeIdCreateRequest](passtypeidcreaterequest.md): The request body you use to create a pass type ID.
- [PassTypeIdsResponse](passtypeidsresponse.md): A response that contains a list of pass type ID resources.
- [PassTypeIdUpdateRequest](passtypeidupdaterequest.md): The request body you use to update a pass type ID name.
