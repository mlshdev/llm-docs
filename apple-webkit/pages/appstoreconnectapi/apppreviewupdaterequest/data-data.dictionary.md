> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apppreviewupdaterequest/data-data.dictionary

# AppPreviewUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The data element of the request body.

> This object is deprecated. Use [AppAssetLibraryVideoUpdateRequest](../appassetlibraryvideoupdaterequest.md) instead.

## Declaration

```
object AppPreviewUpdateRequest.Data
```

## Properties

- `attributes` — `AppPreviewUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appPreviews`

## Topics

### Objects

- [AppPreviewUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes whose values you’re changing as part of the update request.
