> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/integerresponse

# IntegerResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

A common integer type response.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object IntegerResponse
```

## Properties

- `data` — `int32`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Error Responses

- [ApiErrorResponse](apierrorresponse.md): Deprecated. A parent object of the error response body.
- [ErrorResponseBody](errorresponsebody.md): Deprecated. A parent object of the error response.
- [ErrorResponseItem](errorresponseitem.md): Deprecated. The error response details in the response body.
- [VoidResponse](voidresponse.md): Deprecated. A default generic null response.
