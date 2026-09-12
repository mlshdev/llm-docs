> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/forbiddenresponse](https://developer.apple.com/documentation/applemusicapi/forbiddenresponse)

# ForbiddenResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A response object indicating that the request wasn’t accepted due to an issue with the authentication.

## Declaration

```
object ForbiddenResponse
```

## Properties

- `errors` — `[Error]` (required): The collection of errors that occurred while processing the request.

## See Also

### Related Objects

- [EmptyBodyResponse](emptybodyresponse.md): A response object that contains no content.
- [ErrorsResponse](errorsresponse.md): A response object indicating that an error occurred while processing the request.
- [UnauthorizedResponse](unauthorizedresponse.md): A response object indicating that the request’s authorization is missing or invalid.
- [ResourceCollectionResponse](resourcecollectionresponse.md): A response object composed of resource objects for the request.
