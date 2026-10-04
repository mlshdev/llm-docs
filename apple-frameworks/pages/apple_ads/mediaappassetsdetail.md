> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/mediaappassetsdetail

# MediaAppAssetsDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The app asset details of a device.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md): Deprecated. The app preview device mapping response to display name and size mapping requests.
- [Creative](creative.md): Deprecated. The creative object.
- [CreativeLocalization](creativelocalization.md): Deprecated. The localized creative metadata.
- [CreativeLocalizationWithAssets](creativelocalizationwithassets.md): Deprecated. The localized creative metadata with app preview.
- [CustomProductPageCreative](customproductpagecreative.md): Deprecated. The creative details of a product page.
- [CreativeResponse](creativeresponse.md): Deprecated. The response details of a creative request.
- [CreativeListResponse](creativelistresponse.md): Deprecated. A container for response details of a creative request.
- [DefaultProductPageCreative](defaultproductpagecreative.md): The default product page object.
- [MediaAppAsset](mediaappasset.md): Deprecated. The asset details of app preview or app screenshots.
