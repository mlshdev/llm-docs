> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/resourcecollectionresponse](https://developer.apple.com/documentation/applemusicapi/resourcecollectionresponse)

# ResourceCollectionResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A response object composed of resource objects for the request.

## Declaration

```
object ResourceCollectionResponse
```

## Properties

- `data` — `[Resource]` (required): The collection of resources for the request.

## See Also

### Related Objects

- [EmptyBodyResponse](emptybodyresponse.md): A response object that contains no content.
- [ErrorsResponse](errorsresponse.md): A response object indicating that an error occurred while processing the request.
- [UnauthorizedResponse](unauthorizedresponse.md): A response object indicating that the request’s authorization is missing or invalid.
- [ForbiddenResponse](forbiddenresponse.md): A response object indicating that the request wasn’t accepted due to an issue with the authentication.
