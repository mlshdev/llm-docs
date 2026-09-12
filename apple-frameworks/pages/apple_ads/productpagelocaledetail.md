> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/productpagelocaledetail](https://developer.apple.com/documentation/apple_ads/productpagelocaledetail)

# ProductPageLocaleDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The product page locale metadata on App Store Connect.

## Declaration

```
object ProductPageLocaleDetail
```

## Properties

- `adamId` — `int64`: Your unique App Store app identifier. Use [Get a Campaign](get-a-campaign.md) or [Get all Campaigns](get-all-campaigns.md) to obtain your `adamId` used in your campaign.
- `appName` — `string`: The app name on [App Store Connect](https://appstoreconnect.apple.com).
- `appPreviewDeviceWithAssets` — `ProductPageLocaleDetail.AppPreviewDeviceWithAssets`: A map between the device and available app preview details for that device.
- `deviceClasses` — `string`: The device classes assigned to a custom product page on [App Store Connect](https://appstoreconnect.apple.com).
  **Allowed values:** `IPAD`, `IPHONE`
- `language` — `string`: The language associated with the ISO alpha-2 country code, such as `US`.
- `languageCode` — `string`: The ISO 639-1 language code appended to the ISO 3166-1 alpha-2 country code, such as `en-US`.
- `productPageId` — `string`: A unique string to identify a product page on [App Store Connect](https://appstoreconnect.apple.com). For example, `45812c9b-c296-43d3-c6a0-c5a02f74bf6e`.
- `promotionalText` — `string`: Text that appears at the top of the main description of a product page.
- `shortDescription` — `string`: Concise, informative text used on a product page to describe an app.
- `subTitle` — `string`: A summary of an app on a product page that appears below the name of an app.

## Topics

### Objects

- [ProductPageLocaleDetail.AppPreviewDeviceWithAssets](productpagelocaledetail/apppreviewdevicewithassets-data.dictionary.md): A map of app preview device assets.

## See Also

### Product Page Request and Response Objects

- [LocaleInfo](localeinfo.md): The supported languages and language codes.
- [CountryOrRegion](countryorregion.md): The supported locales of a product page.
- [CountriesOrRegionsListResponse](countriesorregionslistresponse.md): A container for product page responses.
- [MediaAppVideoAsset](mediaappvideoasset.md): The app preview or screenshot asset detail.
- [ProductPageDetail](productpagedetail.md): The product page metadata.
- [ProductPageDetailWithAssets](productpagedetailwithassets.md): The product page asset metadata.
- [ProductPageLocaleDetailListResponse](productpagelocaledetaillistresponse.md): A container for product page responses.
- [ProductPageDetailResponse](productpagedetailresponse.md): A container for product page responses.
- [ProductPageDetailWithAssetInfoResponse](productpagedetailwithassetinforesponse.md): A container for product page responses.
- [ProductPageDetailListResponse](productpagedetaillistresponse.md): A container for product page responses.
- [ProductPageReasonCreate](productpagereasoncreate.md): The ad creative rejection reason based on a product page.
