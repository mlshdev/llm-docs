> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementcreaterequest/data-data.dictionary/attributes-data.dictionary

# AppAssetLibraryPlacementCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The attributes you set that describe the new app asset library placement resource.

## Declaration

```
object AppAssetLibraryPlacementCreateRequest.Data.Attributes
```

## Properties

- `placementType` — `AppAssetLibraryPlacementType`: The App Store location where the placement positions the asset.
- `placementGroup` — `string`: The identifier that groups related placements, such as the screenshots for a single device.

## See Also

### Objects

- [AppAssetLibraryPlacementCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
