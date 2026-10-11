> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appeventvideoclipcreaterequest/data-data.dictionary

# AppEventVideoClipCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

The request body you use to create an app event video clip.

> This object is deprecated. Use [AppAssetLibraryVideoCreateRequest](../appassetlibraryvideocreaterequest.md) instead.

## Declaration

```
object AppEventVideoClipCreateRequest.Data
```

## Properties

- `attributes` — `AppEventVideoClipCreateRequest.Data.Attributes` (required):
- `relationships` — `AppEventVideoClipCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `appEventVideoClips`

## Topics

### Objects

- [AppEventVideoClipCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that describe an app event video clip create request resource.
- [AppEventVideoClipCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.
