> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/defaultproductpagecreative

# DefaultProductPageCreative

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object

The default product page object.

## Declaration

```
object DefaultProductPageCreative
```

## Properties

- `adamId` — `int64` (required): Your unique App Store app identifier.
- `creationTime` — `date-time`: The timestamp for the creation of the report in the format of `YYYY-MM-DD’T’HH:mm:ss.SSS`.
- `id` — `int64`: The unique identifier for a creative.
- `modificationTime` — `date-time`: The date and time of the most recent modification of the object.
- `name` — `string` (required): The unique name of the creative.
  **Minimum length:** `1`  
  **Maximum length:** `200`
- `orgId` — `int64`: The identifier of the organization that owns the campaign. Your `orgId` is the same as your account in the [Apple Ads UI](https://ads.apple.com/advanced).
- `productPageId` — `string`: The product page identifier.
- `state` — `string`: The system state of the process.
- `stateReasons` — `[string]`: A list of reasons that displays when an ad isn’t running.
- `type` — `string` (required): The type of creative.

## See Also

### Creative Request and Response Objects

- [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md): Deprecated. The app preview device mapping response to display name and size mapping requests.
- [Creative](creative.md): Deprecated. The creative object.
- [CreativeLocalization](creativelocalization.md): Deprecated. The localized creative metadata.
- [CreativeLocalizationWithAssets](creativelocalizationwithassets.md): Deprecated. The localized creative metadata with app preview.
- [CustomProductPageCreative](customproductpagecreative.md): Deprecated. The creative details of a product page.
- [CreativeResponse](creativeresponse.md): Deprecated. The response details of a creative request.
- [CreativeListResponse](creativelistresponse.md): Deprecated. A container for response details of a creative request.
- [MediaAppAsset](mediaappasset.md): Deprecated. The asset details of app preview or app screenshots.
- [MediaAppAssetsDetail](mediaappassetsdetail.md): Deprecated. The app asset details of a device.
