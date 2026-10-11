> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryimageupdaterequest/data-data.dictionary

# AppAssetLibraryImageUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to update an app asset library image.

## Declaration

```
object AppAssetLibraryImageUpdateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryImages`
- `id` — `string` (required):
- `attributes` — `AppAssetLibraryImageUpdateRequest.Data.Attributes`:

## Topics

### Objects

- [AppAssetLibraryImageUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the updated app asset library image resource.
