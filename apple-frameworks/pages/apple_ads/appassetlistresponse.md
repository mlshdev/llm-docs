> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/appassetlistresponse

# AppAssetListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.8+ (deprecated in 5.2)

The response to a request that returns a list of app assets.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object AppAssetListResponse
```

## Properties

- `data` — `[AppAsset]`: Response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Ad Rejection Reason Objects

- [AppAsset](appasset.md): Deprecated. The app assets associated with an adam ID.
- [ProductPageReason](productpagereason.md): Deprecated. The ad creative rejection reason based on a product page.
- [ProductPageReasonListResponse](productpagereasonlistresponse.md): Deprecated. The response to a request that returns a list of product page rejection reasons.
- [ProductPageReasonResponse](productpagereasonresponse.md): Deprecated. A container for product page reasons.
