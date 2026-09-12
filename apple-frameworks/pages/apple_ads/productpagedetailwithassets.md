> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/productpagedetailwithassets](https://developer.apple.com/documentation/apple_ads/productpagedetailwithassets)

# ProductPageDetailWithAssets

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The product page asset metadata.

## Declaration

```
object ProductPageDetailWithAssets
```

## Properties

- `adamId` — `int64`: Your unique App Store app identifier. Use [Get a Campaign](get-a-campaign.md) or [Get all Campaigns](get-all-campaigns.md) to obtain your `adamId` used in your campaign.
- `contentProviderId` — `int64`: A unique identifier of the registered content owner.
- `creationTime` — `date-time`: The date and time the object was created.

  This field is not modifiable.
- `id` — `int64`: A unique string to identify a product page on [App Store Connect](https://appstoreconnect.apple.com). For example, `45812c9b-c296-43d3-c6a0-c5a02f74bf6e`.
- `isDefault` — `boolean`: Indicates if the custom product page is the default on [App Store Connect](https://appstoreconnect.apple.com).
- `localization` — `[CreativeLocalizationWithAssets]`: Localized metadata used on a product page with app preview.
- `modificationTime` — `date-time`: The date and time of the most recent modification of the object.

  This field is not modifiable.
- `name` — `string`: The name of your custom product page, as input through [App Store Connect](https://appstoreconnect.apple.com).

## See Also

### Product Page Request and Response Objects

- [LocaleInfo](localeinfo.md): The supported languages and language codes.
- [CountryOrRegion](countryorregion.md): The supported locales of a product page.
- [CountriesOrRegionsListResponse](countriesorregionslistresponse.md): A container for product page responses.
- [MediaAppVideoAsset](mediaappvideoasset.md): The app preview or screenshot asset detail.
- [ProductPageLocaleDetail](productpagelocaledetail.md): The product page locale metadata on App Store Connect.
- [ProductPageDetail](productpagedetail.md): The product page metadata.
- [ProductPageLocaleDetailListResponse](productpagelocaledetaillistresponse.md): A container for product page responses.
- [ProductPageDetailResponse](productpagedetailresponse.md): A container for product page responses.
- [ProductPageDetailWithAssetInfoResponse](productpagedetailwithassetinforesponse.md): A container for product page responses.
- [ProductPageDetailListResponse](productpagedetaillistresponse.md): A container for product page responses.
- [ProductPageReasonCreate](productpagereasoncreate.md): The ad creative rejection reason based on a product page.
