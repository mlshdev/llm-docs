> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/builduploadfile/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/builduploadfile/attributes-data.dictionary)

# BuildUploadFile.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

Attributes that describe a build upload file resource.

## Declaration

```
object BuildUploadFile.Attributes
```

## Properties

- `assetDeliveryState` — `AppMediaAssetState`:
- `assetToken` — `string`:
- `assetType` — `string`: **Allowed values:** `ASSET`, `ASSET_DESCRIPTION`, `ASSET_SPI`
- `fileName` — `string`:
- `fileSize` — `int64`: **Minimum:** `1`
  **Maximum:** `9007199254740991`
- `sourceFileChecksums` — `Checksums`:
- `uploadOperations` — `[DeliveryFileUploadOperation]`:
- `uti` — `string`: **Allowed values:** `com.apple.binary-property-list`, `com.apple.ipa`, `com.apple.pkg`, `com.apple.xml-property-list`, `com.pkware.zip-archive`
