> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apppreviewcreaterequest/data-data.dictionary/relationships-data.dictionary/apppreviewset-data.dictionary/data-data.dictionary

# AppPreviewCreateRequest.Data.Relationships.AppPreviewSet.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The type and ID of the resource that you’re relating with the resource you’re creating.

> This object is deprecated. Use [AppAssetLibraryVideoCreateRequest](../../../../appassetlibraryvideocreaterequest.md) instead.

## Declaration

```
object AppPreviewCreateRequest.Data.Relationships.AppPreviewSet.Data
```

## Properties

- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appPreviewSets`
