> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/medialocaledetail](https://developer.apple.com/documentation/apple_ads/medialocaledetail)

# MediaLocaleDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 5.2+

The media locale detail object.

## Declaration

```
object MediaLocaleDetail
```

## Properties

- `appName` — `string`: The name of the app.
- `appPreviewDeviceWithAssets` — `MediaLocaleDetail.AppPreviewDeviceWithAssets`: The device display name, fallback device display names, and associated assets.
- `isPrimaryLocale` — `boolean`: The language of the primary locale for the app.
- `language` — `string`: The app language.
- `shortDescription` — `string`: An abbreviated description of the app.
- `subTitle` — `string`: The subtitle for the app.

## Topics

### Dictionaries

- [MediaLocaleDetail.AppPreviewDeviceWithAssets](medialocaledetail/apppreviewdevicewithassets-data.dictionary.md)

## Relationships

### Inherited By

- [MediaLocaleDetailResponse](medialocaledetailresponse.md)

## See Also

### Response Objects

- [MediaDetail](mediadetail.md): The media detail object.
- [MediaDetailResponse](mediadetailresponse.md)
- [MediaLocaleDetailResponse](medialocaledetailresponse.md)
