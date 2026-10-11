> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appeventscreenshotupdaterequest/data-data.dictionary

# AppEventScreenshotUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

The request body you use to update an app event screenshot update request.

> This object is deprecated. Use [AppAssetLibraryImageUpdateRequest](../appassetlibraryimageupdaterequest.md) instead.

## Declaration

```
object AppEventScreenshotUpdateRequest.Data
```

## Properties

- `attributes` — `AppEventScreenshotUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appEventScreenshots`

## Topics

### Objects

- [AppEventScreenshotUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that describe an app event screenshot update request resource.
