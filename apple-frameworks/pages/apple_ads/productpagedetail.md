> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/productpagedetail](https://developer.apple.com/documentation/apple_ads/productpagedetail)

# ProductPageDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The product page metadata.

## Declaration

```
object ProductPageDetail
```

## Properties

- `adamId` — `int64`: Your unique App Store app identifier. Use [Get a Campaign](get-a-campaign.md) or [Get all Campaigns](get-all-campaigns.md) to obtain your `adamId` used in your campaign.
- `creationTime` — `date-time`: The date and time the object was created.

  This field is not modifiable.
- `deepLink` — `string`: The deep link set up in your custom product page metadata on [App Store Connect](https://appstoreconnect.apple.com).

  Deep links are available on iOS 18 and later for Today tab and search results ad variations, and iPadOS 18 and later for search results ad variations.

  Note that deep links are not available for ads with demographic targeting (age or gender).

  This field is not modifiable.
- `id` — `string`: A unique string to identify a product page on [App Store Connect](https://appstoreconnect.apple.com). For example, `45812c9b-c296-43d3-c6a0-c5a02f74bf6e`.
- `modificationTime` — `date-time`: The date and time of the most recent modification of the object.

  This field is not modifiable.
- `name` — `string`: The name of your custom product page on [App Store Connect](https://appstoreconnect.apple.com).
- `state` — `string`: The system state of the custom product page that indicates whether the page is visible or not.
  **Allowed values:** `HIDDEN`, `VISIBLE`

## Mentioned In

- [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md)

## See Also

### Product Page Request and Response Objects

- [LocaleInfo](localeinfo.md): The supported languages and language codes.
- [CountryOrRegion](countryorregion.md): The supported locales of a product page.
- [CountriesOrRegionsListResponse](countriesorregionslistresponse.md): A container for product page responses.
- [MediaAppVideoAsset](mediaappvideoasset.md): The app preview or screenshot asset detail.
- [ProductPageLocaleDetail](productpagelocaledetail.md): The product page locale metadata on App Store Connect.
- [ProductPageDetailWithAssets](productpagedetailwithassets.md): The product page asset metadata.
- [ProductPageLocaleDetailListResponse](productpagelocaledetaillistresponse.md): A container for product page responses.
- [ProductPageDetailResponse](productpagedetailresponse.md): A container for product page responses.
- [ProductPageDetailWithAssetInfoResponse](productpagedetailwithassetinforesponse.md): A container for product page responses.
- [ProductPageDetailListResponse](productpagedetaillistresponse.md): A container for product page responses.
- [ProductPageReasonCreate](productpagereasoncreate.md): The ad creative rejection reason based on a product page.
