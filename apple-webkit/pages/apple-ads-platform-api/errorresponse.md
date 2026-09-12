> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/errorresponse](https://developer.apple.com/documentation/apple-ads-platform-api/errorresponse)

# ErrorResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Certain endpoints return this envelope, which wraps an `Error` object, when a request fails.

## Declaration

```
object ErrorResponse
```

## Properties

- `error` — `Error`: The error object containing details about the failure. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The `ErrorResponse` object is a response envelope that wraps an `Error` object. Certain endpoints return it when a request fails, providing the full `Error` structure including `code`, `message`, and `details`.

A `429` status indicates the caller has exceeded its request quota. See [Applying Rate Limits](rate-limits.md) for the rate-limit headers and a sample backoff implementation to use before retrying.

<a id="Example"></a>

### Example

```json
{
  "error": {
    "code": "INVALID_ARGUMENT",
    "message": "The request could not be processed because of missing or invalid fields.",
    "details": [
      {
        "code": "MISSING_REQUIRED_FIELD",
        "message": "The field 'name' is required for campaign AwayFinder Summer Launch."
      }
    ]
  }
}
```

## See Also

### Error Responses

- [Error](error.md): The standard error envelope that the API returns when a request fails.
- [ErrorDetail](errordetail.md): Field-level or request-level detail for a specific part of a failed API request.
