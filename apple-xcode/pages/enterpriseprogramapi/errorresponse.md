> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/errorresponse](https://developer.apple.com/documentation/enterpriseprogramapi/errorresponse)

# ErrorResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The error details that an API returns in the response body whenever the API request isn’t successful.

## Declaration

```
object ErrorResponse
```

## Properties

- `errors` — `[ErrorResponse.Errors]`: An array of one or more errors.

## Mentioned In

- [Parsing the Error Response Code](parsing-the-error-response-code.md)
- [About the HTTP Status Code](about-the-http-status-code.md)
- [Pinpointing the Location of Errors](pinpointing-the-location-of-errors.md)

## Topics

### Objects

- [ErrorResponse.Errors](errorresponse/errors-data.dictionary.md): The details about an error that are returned when an API request isn’t successful.

## See Also

### Error Handling

- [Interpreting and Handling Errors](interpreting-and-handling-errors.md): Learn how the Enterprise Program API returns errors and handle them in your code.
