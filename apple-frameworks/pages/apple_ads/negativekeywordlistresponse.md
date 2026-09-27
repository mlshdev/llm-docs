> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/negativekeywordlistresponse

# NegativeKeywordListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response details of negative keyword requests.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object NegativeKeywordListResponse
```

## Properties

- `data` — `[NegativeKeyword]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Keywords Request and Response Objects

- [Keyword](keyword.md): Deprecated. Targeting keyword parameters to use in requests and responses.
- [NegativeKeyword](negativekeyword.md): Deprecated. Negative keyword parameters to use in requests and responses.
- [KeywordResponse](keywordresponse.md): Deprecated. A container for the targeting keywords response body.
- [KeywordListResponse](keywordlistresponse.md): Deprecated. The response details of targeting keyword requests.
- [KeywordUpdateRequest](keywordupdaterequest.md): Deprecated. Targeting keyword parameters to use in requests and responses.
- [NegativeKeywordResponse](negativekeywordresponse.md): Deprecated. A container for the negative keyword response body.
