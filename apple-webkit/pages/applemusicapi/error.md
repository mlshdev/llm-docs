> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/error](https://developer.apple.com/documentation/applemusicapi/error)

# Error

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Information about an error that occurred while processing a request.

## Declaration

```
object Error
```

## Properties

- `code` — `string` (required): The code for this error. For possible values, see [HTTP Status Codes](http-status-codes.md).
- `detail` — `string`: A long, possibly localized, description of the problem.
- `id` — `string` (required): A unique identifier for this occurrence of the error.
- `source` — `Error.Source`: An object containing references to the source of the error. For possible members, see `Source` object.
- `status` — `string` (required): The HTTP status code for this problem.
- `title` — `string` (required): A short, possibly localized, description of the problem.

## Mentioned In

- [Handling Requests and Responses](handling-requests-and-responses.md)
- [HTTP Status Codes](http-status-codes.md)

<a id="Discussion"></a>

## Discussion

If a request is unsuccessful, the `errors` in the response may contain an Error object for each problem that occurred.

## Topics

### Related Objects

- [Error.Source](error/source-data.dictionary.md): The Source object represents the source of an error.

## See Also

### Handling Errors

- [HTTP Status Codes](http-status-codes.md): Reference error codes returned by the Apple Music API.
