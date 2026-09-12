> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventvideoclip/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appeventvideoclip/attributes-data.dictionary)

# AppEventVideoClip.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

Attributes that describe an app event video clip resource.

## Declaration

```
object AppEventVideoClip.Attributes
```

## Properties

- `appEventAssetType` — `AppEventAssetType`:
- `assetDeliveryState` — `AppMediaAssetState`: This attribute is deprecated. Use [AppMediaVideoState](../appmediavideostate.md) instead.
- `fileName` — `string`:
- `fileSize` — `integer`:
- `previewFrameImage` — `PreviewFrameImage`:
- `previewFrameTimeCode` — `string`:
- `previewImage` — `ImageAsset`: This attribute is deprecated. Use [PreviewFrameImage](../previewframeimage.md) instead.
- `uploadOperations` — `[UploadOperation]`:
- `videoDeliveryState` — `AppMediaVideoState`:
- `videoUrl` — `string`:

## Mentioned In

- [App Store Connect API 3.7 release notes](../app-store-connect-api-3-7-release-notes.md)

## See Also

### Objects

- [AppEventVideoClip.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
