> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideocreaterequest/data-data.dictionary

# AppAssetLibraryVideoCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to create an app asset library video.

## Declaration

```
object AppAssetLibraryVideoCreateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryVideos`
- `attributes` — `AppAssetLibraryVideoCreateRequest.Data.Attributes` (required):
- `relationships` — `AppAssetLibraryVideoCreateRequest.Data.Relationships` (required):

## Topics

### Objects

- [AppAssetLibraryVideoCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new app asset library video resource.
- [AppAssetLibraryVideoCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
