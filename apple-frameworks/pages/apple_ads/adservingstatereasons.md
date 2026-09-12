> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/adservingstatereasons](https://developer.apple.com/documentation/apple_ads/adservingstatereasons)

# AdServingStateReasons

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+

Reasons the system provides when an ad isn’t running.

## Declaration

```
string AdServingStateReasons
```

## Possible Values

- `AD_APPROVAL_PENDING`: The ad is approved.
- `AD_APPROVAL_REJECTED`: The ad is rejected. The system doesn’t serve rejected ads.
- `AD_PROCESSING_IN_PROGRESS`: The ad status is processing.
- `DELETED_BY_USER`: The user has deleted the ad.
- `PAUSED_BY_USER`: The user has paused the ad.
- `PAUSED_BY_SYSTEM`: The system has paused the ad.
- `PRODUCT_PAGE_DELETED`: The product page has been deleted from [App Store Connect](https://appstoreconnect.apple.com).
- `PRODUCT_PAGE_HIDDEN`: The product page is hidden on [App Store Connect](https://appstoreconnect.apple.com).
- `PRODUCT_PAGE_INCOMPATIBLE`: The product page is incompatible.
- `PRODUCT_PAGE_INSUFFICIENT_ASSETS`: The product page contains an insufficient number of assets.
- `CREATIVE_SET_INVALID`:
- `CREATIVE_SET_UNSUPPORTED`:

## See Also

### Data Types

- [AdStatus](adstatus.md): The user-controlled status of the ad.
- [AdServingStatus](adservingstatus.md): The status of whether the ad is serving.
