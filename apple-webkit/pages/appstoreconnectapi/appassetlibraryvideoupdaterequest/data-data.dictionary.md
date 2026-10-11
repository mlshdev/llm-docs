> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideoupdaterequest/data-data.dictionary

# AppAssetLibraryVideoUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to update an app asset library video.

## Declaration

```
object AppAssetLibraryVideoUpdateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryVideos`
- `id` — `string` (required):
- `attributes` — `AppAssetLibraryVideoUpdateRequest.Data.Attributes`:

## Topics

### Objects

- [AppAssetLibraryVideoUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the updated app asset library video resource.
