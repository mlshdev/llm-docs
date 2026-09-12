> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/backgroundassetuploadfile/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/backgroundassetuploadfile/attributes-data.dictionary)

# BackgroundAssetUploadFile.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a background asset upload file resource.

## Declaration

```
object BackgroundAssetUploadFile.Attributes
```

## Properties

- `assetDeliveryState` — `AppMediaAssetState`:
- `assetToken` — `string`:
- `assetType` — `string`: **Allowed values:** `ASSET`, `MANIFEST`
- `fileName` — `string`:
- `fileSize` — `int64`: **Minimum:** `1`
  **Maximum:** `9007199254740991`
- `sourceFileChecksum` — `string`: This attribute is deprecated, use `sourceFileChecksums` instead.
- `sourceFileChecksums` — `Checksums`:
- `uploadOperations` — `[DeliveryFileUploadOperation]`:
