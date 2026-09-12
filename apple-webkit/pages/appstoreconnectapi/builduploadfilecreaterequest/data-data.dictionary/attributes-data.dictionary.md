> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/builduploadfilecreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/builduploadfilecreaterequest/data-data.dictionary/attributes-data.dictionary)

# BuildUploadFileCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

Attributes that you update for a build upload file resource.

## Declaration

```
object BuildUploadFileCreateRequest.Data.Attributes
```

## Properties

- `assetType` — `string` (required): **Allowed values:** `ASSET`, `ASSET_DESCRIPTION`, `ASSET_SPI`
- `fileName` — `string` (required):
- `fileSize` — `int64` (required): **Minimum:** `1`
  **Maximum:** `9007199254740991`
- `uti` — `string` (required): **Allowed values:** `com.apple.binary-property-list`, `com.apple.ipa`, `com.apple.pkg`, `com.apple.xml-property-list`, `com.pkware.zip-archive`
