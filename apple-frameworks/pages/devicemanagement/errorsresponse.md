> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorsresponse](https://developer.apple.com/documentation/devicemanagement/errorsresponse)

# ErrorsResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

The collection of errors that occurred while processing the request.

## Declaration

```
object ErrorsResponse
```

## Properties

- `errors` — `[Error]` (required): An error that occurred while processing the request.

## See Also

### Interpreting responses

- [ResourceCollectionResponse](resourcecollectionresponse.md): A response that contains the resource objects for the request.
- [ResultsResponse](resultsresponse.md): A response that contains the resource objects for the request.
- [AppsResponse](appsresponse.md): A response that contains the resource objects for the request.
- [BooksResponse](booksresponse.md): A response that contains the resource objects for the request.
- [UnauthorizedResponse](unauthorizedresponse.md): A response that indicates an incorrect authorization header.
