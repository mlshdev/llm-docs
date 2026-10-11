> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementcreaterequest/data-data.dictionary

# AppAssetLibraryPlacementCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to create an app asset library placement.

## Declaration

```
object AppAssetLibraryPlacementCreateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryPlacements`
- `attributes` — `AppAssetLibraryPlacementCreateRequest.Data.Attributes`:
- `relationships` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships`:

## Topics

### Objects

- [AppAssetLibraryPlacementCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new app asset library placement resource.
- [AppAssetLibraryPlacementCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
