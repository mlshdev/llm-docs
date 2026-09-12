> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/countryorregion](https://developer.apple.com/documentation/apple_ads/countryorregion)

# CountryOrRegion

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The supported locales of a product page.

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

- [LocaleInfo](localeinfo.md): The supported languages and language codes.
- [CountriesOrRegionsListResponse](countriesorregionslistresponse.md): A container for product page responses.
- [MediaAppVideoAsset](mediaappvideoasset.md): The app preview or screenshot asset detail.
- [ProductPageLocaleDetail](productpagelocaledetail.md): The product page locale metadata on App Store Connect.
- [ProductPageDetail](productpagedetail.md): The product page metadata.
- [ProductPageDetailWithAssets](productpagedetailwithassets.md): The product page asset metadata.
- [ProductPageLocaleDetailListResponse](productpagelocaledetaillistresponse.md): A container for product page responses.
- [ProductPageDetailResponse](productpagedetailresponse.md): A container for product page responses.
- [ProductPageDetailWithAssetInfoResponse](productpagedetailwithassetinforesponse.md): A container for product page responses.
- [ProductPageDetailListResponse](productpagedetaillistresponse.md): A container for product page responses.
- [ProductPageReasonCreate](productpagereasoncreate.md): The ad creative rejection reason based on a product page.
