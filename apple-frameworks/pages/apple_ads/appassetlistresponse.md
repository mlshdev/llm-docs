> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/appassetlistresponse

# AppAssetListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.8+

The response to a request that returns a list of app assets.

## Declaration

```
object AppAssetListResponse
```

## Properties

- `data` — `[AppAsset]`: Response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Ad Rejection Reason Objects

- [AppAsset](appasset.md): The app assets associated with an adam ID.
- [ProductPageReason](productpagereason.md): The ad creative rejection reason based on a product page.
- [ProductPageReasonListResponse](productpagereasonlistresponse.md): The response to a request that returns a list of product page rejection reasons.
- [ProductPageReasonResponse](productpagereasonresponse.md): A container for product page reasons.
