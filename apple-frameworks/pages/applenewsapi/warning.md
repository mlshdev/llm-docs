> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/warning](https://developer.apple.com/documentation/applenewsapi/warning)

# Warning

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Object  
**Availability:** Apple News API 1.0+

See the properties of a warning the Apple News API returned.

## Declaration

```
object Warning
```

## Properties

- `keypath` — `[string]`: An array of field names that uniquely identifies a field in the JSON input of the request.
- `message` — `string`: A user-friendly, detailed explanation of the nonfatal warning.
- `value` — `string`: If applicable, the value supplied in the request for the field that `keyPath` specifies.

## See Also

### Errors

- [About Apple News API Error Messages](../applenews/about-apple-news-api-error-messages.md): Understand the error message format for the Apple News API.
- [Error](error.md): See the properties of an error the Apple News API returned.
- [Code](code.md): See the error codes the Apple News API returned.
- [Status](status.md): See the HTTP status codes the Apple News API returned.
