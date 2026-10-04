> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/info

# Info

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Additional context that supplements an error detail’s message, varying by endpoint and error type.

## Declaration

```
object Info
```

<a id="Discussion"></a>

## Discussion

`Info` supplements an [ErrorDetail](errordetail.md)’s `message` with structured context, such as the field name, the invalid value, or acceptable alternatives. Its shape depends on the endpoint and the specific error condition, so it carries no fixed set of properties.

## See Also

### Error Responses

- [Error](error.md): The standard error envelope that the API returns when a request fails.
- [ErrorDetail](errordetail.md): Field-level or request-level detail for a specific part of a failed API request.
- [ErrorResponse](errorresponse.md): Certain endpoints return this envelope, which wraps an `Error` object, when a request fails.
