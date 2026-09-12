> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/errorlinks](https://developer.apple.com/documentation/appstoreconnectapi/errorlinks)

# ErrorLinks

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.5+

Navigation links within an error response, providing references to related resources or documentation.

## Declaration

```
object ErrorLinks
```

## Properties

- `about` — `uri-reference`:
- `associated` — `*`: **Allowed types:** `uri-reference`, `ErrorLinks.Associated`

## Topics

### Objects

- [ErrorLinks.Associated](errorlinks/associated-data.dictionary.md): The associated resource links within an error’s navigation links.

## See Also

### Objects

- [ErrorResponse](errorresponse.md): The error details that an API returns in the response body whenever the API request isn’t successful.
- [JsonPointer](jsonpointer.md): An object that contains the JSON pointer that indicates the location of the error.
- [Parameter](parameter.md): An object that contains the query parameter that produced the error.
