> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/keywordlistresponse

# KeywordListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response details of targeting keyword requests.

## Declaration

```
object KeywordListResponse
```

## Properties

- `data` — `[Keyword]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Keywords Request and Response Objects

- [Keyword](keyword.md): Targeting keyword parameters to use in requests and responses.
- [NegativeKeyword](negativekeyword.md): Negative keyword parameters to use in requests and responses.
- [KeywordResponse](keywordresponse.md): A container for the targeting keywords response body.
- [KeywordUpdateRequest](keywordupdaterequest.md): Targeting keyword parameters to use in requests and responses.
- [NegativeKeywordResponse](negativekeywordresponse.md): A container for the negative keyword response body.
- [NegativeKeywordListResponse](negativekeywordlistresponse.md): The response details of negative keyword requests.
