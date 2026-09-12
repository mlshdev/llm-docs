> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/mediaappasset](https://developer.apple.com/documentation/apple_ads/mediaappasset)

# MediaAppAsset

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The asset details of app preview or app screenshots.

## Declaration

```
object MediaAppAsset
```

## Properties

- `assetGenId` — `string`: The unique identifier for the app preview or screenshot.

  Your `adamId` is the first numerical grouping in `assetGenId`. For example, in `1408851466;en-US;5;0;f8c9add6280c781e6f701c506be5a921`, `1408851466` is your `adamId`.
- `assetType` — `string`: The type of creative asset.

  App previews are still images of video assets that you upload to [App Store Connect](https://appstoreconnect.apple.com). Note, the playable URL isn’t in the API response.

  A screenshot is a standard image of the app that you upload to [App Store Connect](https://appstoreconnect.apple.com).  
  **Allowed values:** `APP_PREVIEW`, `SCREENSHOT`
- `assetURL` — `string`: The resolved URL for the screenshot or a screenshot of the video asset.
- `orientation` — `string`: The orientation of the asset that you upload to [App Store Connect](https://developer.apple.com/app-store-connect/).
  **Allowed values:** `LANDSCAPE`, `PORTRAIT`, `UNKNOWN`
- `sortPosition` — `int64`: The position of the asset that you upload to [App Store Connect](https://appstoreconnect.apple.com).
- `sourceHeight` — `int32`: The height of the asset that you upload to [App Store Connect](https://appstoreconnect.apple.com).
- `sourceWidth` — `int32`: The width of the asset that you upload to [App Store Connect](https://appstoreconnect.apple.com).

## See Also

### Creative Request and Response Objects

- [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md): The app preview device mapping response to display name and size mapping requests.
- [Creative](creative.md): The creative object.
- [CreativeLocalization](creativelocalization.md): The localized creative metadata.
- [CreativeLocalizationWithAssets](creativelocalizationwithassets.md): The localized creative metadata with app preview.
- [CustomProductPageCreative](customproductpagecreative.md): The creative details of a product page.
- [CreativeResponse](creativeresponse.md): The response details of a creative request.
- [CreativeListResponse](creativelistresponse.md): A container for response details of a creative request.
- [DefaultProductPageCreative](defaultproductpagecreative.md): The default product page object.
- [MediaAppAssetsDetail](mediaappassetsdetail.md): The app asset details of a device.
