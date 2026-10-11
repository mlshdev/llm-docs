> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotsetcreaterequest/data-data.dictionary

# AppScreenshotSetCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The data element of the request body.

> This object is deprecated. Use [AppAssetLibraryPlacementCreateRequest](../appassetlibraryplacementcreaterequest.md) instead.

## Declaration

```
object AppScreenshotSetCreateRequest.Data
```

## Properties

- `attributes` — `AppScreenshotSetCreateRequest.Data.Attributes` (required):
- `relationships` — `AppScreenshotSetCreateRequest.Data.Relationships`:
- `type` — `string` (required): **Allowed values:** `appScreenshotSets`

## Topics

### Objects

- [AppScreenshotSetCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that you set that describe the new resource.
- [AppScreenshotSetCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): Deprecated. The relationships to other resources that you can set with this request.
