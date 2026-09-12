> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/resourcecollectionresponse](https://developer.apple.com/documentation/devicemanagement/resourcecollectionresponse)

# ResourceCollectionResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A response that contains the resource objects for the request.

## Declaration

```
object ResourceCollectionResponse
```

## Properties

- `data` — `[Resource]` (required): A resource object for the request.

## See Also

### Interpreting responses

- [ResultsResponse](resultsresponse.md): A response that contains the resource objects for the request.
- [AppsResponse](appsresponse.md): A response that contains the resource objects for the request.
- [BooksResponse](booksresponse.md): A response that contains the resource objects for the request.
- [UnauthorizedResponse](unauthorizedresponse.md): A response that indicates an incorrect authorization header.
- [ErrorsResponse](errorsresponse.md): The collection of errors that occurred while processing the request.
