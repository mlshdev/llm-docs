> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/creativestatereason

# CreativeStateReason

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

Reasons the system provides when an ad isn’t running.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string CreativeStateReason
```

## Possible Values

- `ASSET_DELETED`: The creative asset was deleted from [App Store Connect](https://appstoreconnect.apple.com).
- `CREATIVE_SET_UNSUPPORTED`: See section 4.1 in [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md) for additional details.
- `PRODUCT_PAGE_DELETED`: The product page was deleted from [App Store Connect](https://appstoreconnect.apple.com).
- `PRODUCT_PAGE_HIDDEN`: The product page is hidden on [App Store Connect](https://appstoreconnect.apple.com).

## See Also

### Data Types

- [CreativeType](creativetype.md): Deprecated. The type of creative.
- [CreativeState](creativestate.md): Deprecated. The system state of the creative.
