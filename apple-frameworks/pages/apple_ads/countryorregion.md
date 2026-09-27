> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/countryorregion

# CountryOrRegion

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The supported locales of a product page.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object CountryOrRegion
```

## Properties

- `countryOrRegion` — `string`: The supported App Store territory of your product page.
- `defaultLanguages` — `[LocaleInfo]`: The default languages of assets to use for a campaign’s [CountryOrRegion](countryorregion.md).
- `supportedLanguages` — `[LocaleInfo]`: The supported `languages` and `languageCodes` that you use on your product page.

## Mentioned In

- [Apple Ads Campaign Management API 2](apple-search-ads-campaign-management-api-2.md)

<a id="Discussion"></a>

## Discussion

Countries and regions use ISO alpha-2 country codes. Use the `Get Supported Countries or Regions` endpoint to fetch supported languages ands language codes.

## See Also

### Product Page Request and Response Objects

- [LocaleInfo](localeinfo.md): Deprecated. The supported languages and language codes.
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
