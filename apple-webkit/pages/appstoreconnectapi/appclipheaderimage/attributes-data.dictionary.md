> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipheaderimage/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipheaderimage/attributes-data.dictionary)

# AppClipHeaderImage.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The attributes that describe the image that appears on the App Clip card of a default App Clip experience.

## Declaration

```
object AppClipHeaderImage.Attributes
```

## Properties

- `assetDeliveryState` — `AppMediaAssetState`: The state of the App Clip card image asset you uploaded.
- `fileName` — `string`: The filename of the image asset that appears on the App Clip card for the default App Clip experience.
- `fileSize` — `integer`: The size of the image asset that appears on the App Clip card for the default App Clip experience.
- `imageAsset` — `ImageAsset`: The image asset that appears on the App Clip card of a default App Clip experience.
- `sourceFileChecksum` — `string`: A string that represents the MD5 checksum of the image asset you use for the App Clip card.
- `uploadOperations` — `[UploadOperation]`: Upload operations for the image asset that appears on the App Clip card for a default App Clip experience.

## See Also

### Objects

- [AppClipHeaderImage.Relationships](relationships-data.dictionary.md): The relationships of the App Clip Header Images resource you included in the request and those on which you can operate.
