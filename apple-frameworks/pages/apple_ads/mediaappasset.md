> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/mediaappasset

# MediaAppAsset

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The asset details of app preview or app screenshots.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md): Deprecated. The app preview device mapping response to display name and size mapping requests.
- [Creative](creative.md): Deprecated. The creative object.
- [CreativeLocalization](creativelocalization.md): Deprecated. The localized creative metadata.
- [CreativeLocalizationWithAssets](creativelocalizationwithassets.md): Deprecated. The localized creative metadata with app preview.
- [CustomProductPageCreative](customproductpagecreative.md): Deprecated. The creative details of a product page.
- [CreativeResponse](creativeresponse.md): Deprecated. The response details of a creative request.
- [CreativeListResponse](creativelistresponse.md): Deprecated. A container for response details of a creative request.
- [DefaultProductPageCreative](defaultproductpagecreative.md): The default product page object.
- [MediaAppAssetsDetail](mediaappassetsdetail.md): Deprecated. The app asset details of a device.
