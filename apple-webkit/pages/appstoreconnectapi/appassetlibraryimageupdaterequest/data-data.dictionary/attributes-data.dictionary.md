> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryimageupdaterequest/data-data.dictionary/attributes-data.dictionary

# AppAssetLibraryImageUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The attributes you set that describe the updated app asset library image resource.

## Declaration

```
object AppAssetLibraryImageUpdateRequest.Data.Attributes
```

## Properties

- `archived` — `boolean`: A Boolean value that indicates whether the asset is archived and unavailable for new placements.
- `referenceName` — `string`: A name that identifies the asset within its asset library.
- `uploaded` — `boolean`: A Boolean value that indicates whether you completed the file upload for the asset.
