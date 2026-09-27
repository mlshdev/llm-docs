> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/creativetype

# CreativeType

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The type of creative.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string CreativeType
```

## Possible Values

- `CUSTOM_PRODUCT_PAGE`: You can assign only one custom product page to an [AdGroup](adgroup.md).
- `DEFAULT_PRODUCT_PAGE`: Default product page ads are automatically created for APPSTORE_SEARCH_TAB campaigns when using the Campaign Management API version 5.2 or later.
- `CREATIVE_SET`: See section 4.1 in [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md) for additional details on Creative Sets deprecation.

## Mentioned In

- [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md)

## See Also

### Data Types

- [CreativeState](creativestate.md): Deprecated. The system state of the creative.
- [CreativeStateReason](creativestatereason.md): Deprecated. Reasons the system provides when an ad isn’t running.
