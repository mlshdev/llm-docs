> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryimagecreaterequest/data-data.dictionary

# AppAssetLibraryImageCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to create an app asset library image.

## Declaration

```
object AppAssetLibraryImageCreateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryImages`
- `attributes` — `AppAssetLibraryImageCreateRequest.Data.Attributes` (required):
- `relationships` — `AppAssetLibraryImageCreateRequest.Data.Relationships` (required):

## Topics

### Objects

- [AppAssetLibraryImageCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new app asset library image resource.
- [AppAssetLibraryImageCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
