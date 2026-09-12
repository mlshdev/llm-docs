> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/error](https://developer.apple.com/documentation/applenewsapi/error)

# Error

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Object  
**Availability:** Apple News API 1.0+

See the properties of an error the Apple News API returned.

## Declaration

```
object Error
```

## Properties

- `code` — `Code`: An error code that, in combination with the key path, uniquely identifies the error for the specified endpoint.

  Returned: Always
- `keyPath` — `[string]`: An array of field names that uniquely identifies a field in the JSON input of the request. See [Understanding the keyPath Array](../applenews/about-apple-news-api-error-messages.md#Understanding-the-keyPath-Array).

  Returned: Sometimes
- `message` — `string`: A user-friendly, detailed explanation of the error code.

  Returned: Sometimes
- `status` — `Status`: A code the server issues in response to a request.

  Returned: Always
- `value` — `string`: If applicable, the value supplied in the request for the field that `keyPath` specifies.

  Returned: Sometimes

## Mentioned In

- [Getting Ready to Publish and Manage Your Articles](../applenews/getting-ready-to-publish-and-manage-your-articles.md)

## See Also

### Errors

- [About Apple News API Error Messages](../applenews/about-apple-news-api-error-messages.md): Understand the error message format for the Apple News API.
- [Warning](warning.md): See the properties of a warning the Apple News API returned.
- [Code](code.md): See the error codes the Apple News API returned.
- [Status](status.md): See the HTTP status codes the Apple News API returned.
