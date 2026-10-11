> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appeventvideoclipupdaterequest/data-data.dictionary

# AppEventVideoClipUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

The request body you use to update an app event video clip update request.

> This object is deprecated. Use [AppAssetLibraryVideoUpdateRequest](../appassetlibraryvideoupdaterequest.md) instead.

## Declaration

```
object AppEventVideoClipUpdateRequest.Data
```

## Properties

- `attributes` — `AppEventVideoClipUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appEventVideoClips`

## Topics

### Objects

- [AppEventVideoClipUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that describe an app event video clip update request resource.
