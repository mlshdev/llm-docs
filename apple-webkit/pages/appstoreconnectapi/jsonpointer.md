> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/jsonpointer](https://developer.apple.com/documentation/appstoreconnectapi/jsonpointer)

# JsonPointer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

An object that contains the JSON pointer that indicates the location of the error.

## Declaration

```
object JsonPointer
```

## Properties

- `pointer` — `string` (required): A JSON pointer that indicates the location in the request entity where the error originates.

<a id="Discussion"></a>

## Discussion

In some cases, the JSON pointer may indicate an element that isn’t in the request entity, but should be. For more information about JSON pointers, see the [RFC 6901](https://tools.ietf.org/html/rfc6901) proposed standards document.

## See Also

### Objects

- [ErrorLinks](errorlinks.md): Navigation links within an error response, providing references to related resources or documentation.
- [ErrorResponse](errorresponse.md): The error details that an API returns in the response body whenever the API request isn’t successful.
- [Parameter](parameter.md): An object that contains the query parameter that produced the error.
