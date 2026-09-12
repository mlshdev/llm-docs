> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/mediaappassetsdetail](https://developer.apple.com/documentation/apple_ads/mediaappassetsdetail)

# MediaAppAssetsDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The app asset details of a device.

## Declaration

```
object MediaAppAssetsDetail
```

## Properties

- `appPreviewDeviceFallBackDevices` — `[string]`: Devices that don’t have uploaded assets use fallback device mapping.
- `appPreviews` — `[MediaAppVideoAsset]`: Still images of video assets to use for [app previews](https://developer.apple.com/app-store/app-previews/).
- `screenshots` — `[MediaAppAsset]`: Standard images of your app to use for [app previews](https://developer.apple.com/app-store/app-previews/).

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
- [MediaAppAsset](mediaappasset.md): The asset details of app preview or app screenshots.
