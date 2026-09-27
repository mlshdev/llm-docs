> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/reasonlevel

# ReasonLevel

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.9+ (deprecated in 5.2)

The level at which the system applies an ad rejection reason.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string ReasonLevel
```

## Possible Values

- `CUSTOM_PRODUCT_PAGE_LOCALE`: The rejection reason level applies to a custom product page locale. See [ProductPageReason](productpagereason.md) for locale-based rejection reason code descriptions.
- `DEFAULT_PRODUCT_PAGE`: The rejection reason level applies to a default product page. See [ProductPageReason](productpagereason.md) for rejection reason code descriptions.
- `DEFAULT_PRODUCT_PAGE_LOCALE`: The rejection reason level applies to a default product page locale. See [ProductPageReason](productpagereason.md) for locale-based rejection reason code descriptions.
- `CUSTOM_PRODUCT_PAGE`:

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)
