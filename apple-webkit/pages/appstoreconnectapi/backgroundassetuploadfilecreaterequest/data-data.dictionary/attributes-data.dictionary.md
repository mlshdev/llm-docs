> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/backgroundassetuploadfilecreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/backgroundassetuploadfilecreaterequest/data-data.dictionary/attributes-data.dictionary)

# BackgroundAssetUploadFileCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a background asset upload file create request resource.

## Declaration

```
object BackgroundAssetUploadFileCreateRequest.Data.Attributes
```

## Properties

- `assetType` — `string` (required): - **`ASSET`**: the .aar file that contains your background assets
  - **`MANIFEST`**: The manifest you generate to describe the .aar file.  
  **Allowed values:** `ASSET`, `MANIFEST`
- `fileName` — `string` (required):
- `fileSize` — `int64` (required): **Minimum:** `1`
  **Maximum:** `9007199254740991`
