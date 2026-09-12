> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/creativelocalization](https://developer.apple.com/documentation/apple_ads/creativelocalization)

# CreativeLocalization

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The localized creative metadata.

## Declaration

```
object CreativeLocalization
```

## Properties

- `appName` — `string`: The app name on [App Store Connect](https://appstoreconnect.apple.com).
- `deviceClasses` — `string`: The device classes assigned to a custom product page.

  See [DeviceClass](deviceclass.md) for value descriptions.  
  **Allowed values:** `IPAD`, `IPHONE`
- `language` — `string`: The language associated with the ISO alpha-2 country code, such as `US`.
- `languageCode` — `string`: The ISO 639-1 language code appended to the ISO alpha-2 country code, such as `en-US`.
- `promotionalText` — `string`: Text that appears at the top of the main description of a product page.
- `shortDescription` — `string`: Concise, informative text to describe an app on a product page.
- `subTitle` — `string`: A summary of an app that appears below the name of an app on a product page.

## See Also

### Creative Request and Response Objects

- [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md): The app preview device mapping response to display name and size mapping requests.
- [Creative](creative.md): The creative object.
- [CreativeLocalizationWithAssets](creativelocalizationwithassets.md): The localized creative metadata with app preview.
- [CustomProductPageCreative](customproductpagecreative.md): The creative details of a product page.
- [CreativeResponse](creativeresponse.md): The response details of a creative request.
- [CreativeListResponse](creativelistresponse.md): A container for response details of a creative request.
- [DefaultProductPageCreative](defaultproductpagecreative.md): The default product page object.
- [MediaAppAsset](mediaappasset.md): The asset details of app preview or app screenshots.
- [MediaAppAssetsDetail](mediaappassetsdetail.md): The app asset details of a device.
