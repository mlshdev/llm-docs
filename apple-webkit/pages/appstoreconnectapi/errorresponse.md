> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/errorresponse](https://developer.apple.com/documentation/appstoreconnectapi/errorresponse)

# ErrorResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

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
- [Uploading Assets to App Store Connect](uploading-assets-to-app-store-connect.md)

## Topics

### Objects

- [ErrorResponse.Errors](errorresponse/errors-data.dictionary.md): The details about an error that are returned when an API request isn’t successful.

## See Also

### Objects

- [ErrorLinks](errorlinks.md): Navigation links within an error response, providing references to related resources or documentation.
- [JsonPointer](jsonpointer.md): An object that contains the JSON pointer that indicates the location of the error.
- [Parameter](parameter.md): An object that contains the query parameter that produced the error.
