> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/localeinfo

# LocaleInfo

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The supported languages and language codes.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object LocaleInfo
```

## Properties

- `language` — `string`: The language associated with the ISO 3166-1 alpha-2 country code, such as `US`.
- `languageCode` — `string`: The ISO 639-1 language code appended to the ISO 3166-1 alpha-2 country code, such as `en-US`.

## See Also

### Product Page Request and Response Objects

- [CountryOrRegion](countryorregion.md): Deprecated. The supported locales of a product page.
- [CountriesOrRegionsListResponse](countriesorregionslistresponse.md): Deprecated. A container for product page responses.
- [MediaAppVideoAsset](mediaappvideoasset.md): Deprecated. The app preview or screenshot asset detail.
- [ProductPageLocaleDetail](productpagelocaledetail.md): Deprecated. The product page locale metadata on App Store Connect.
- [ProductPageDetail](productpagedetail.md): Deprecated. The product page metadata.
- [ProductPageDetailWithAssets](productpagedetailwithassets.md): Deprecated. The product page asset metadata.
- [ProductPageLocaleDetailListResponse](productpagelocaledetaillistresponse.md): Deprecated. A container for product page responses.
- [ProductPageDetailResponse](productpagedetailresponse.md): Deprecated. A container for product page responses.
- [ProductPageDetailWithAssetInfoResponse](productpagedetailwithassetinforesponse.md): Deprecated. A container for product page responses.
- [ProductPageDetailListResponse](productpagedetaillistresponse.md): Deprecated. A container for product page responses.
- [ProductPageReasonCreate](productpagereasoncreate.md): The ad creative rejection reason based on a product page.
