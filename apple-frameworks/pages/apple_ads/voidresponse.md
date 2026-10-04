> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/voidresponse

# VoidResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

A default generic null response.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object VoidResponse
```

## Properties

- `data` — `VoidResponse.Data`: Response data that the API provides.
- `error` — `ErrorResponseBody`:
- `pagination` — `PageDetail`:

## Topics

### Objects

- [VoidResponse.Data](voidresponse/data-data.dictionary.md): A default generic null response that triggers when no data returns.

## See Also

### Error Responses

- [ApiErrorResponse](apierrorresponse.md): Deprecated. A parent object of the error response body.
- [ErrorResponseBody](errorresponsebody.md): Deprecated. A parent object of the error response.
- [ErrorResponseItem](errorresponseitem.md): Deprecated. The error response details in the response body.
- [IntegerResponse](integerresponse.md): Deprecated. A common integer type response.
