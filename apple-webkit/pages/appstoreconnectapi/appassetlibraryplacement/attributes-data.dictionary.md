> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacement/attributes-data.dictionary

# AppAssetLibraryPlacement.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

Attributes that describe an app asset library placement resource.

## Declaration

```
object AppAssetLibraryPlacement.Attributes
```

## Properties

- `mediaType` — `AppAssetLibraryMediaType`: The kind of asset the placement positions, either an image or a video.
- `placementType` — `AppAssetLibraryPlacementType`: The App Store location where the placement positions the asset.
- `placementGroup` — `string`: The identifier that groups related placements, such as the screenshots for a single device.
- `createdDate` — `date-time`: The date and time when App Store Connect created the resource.
- `lastModifiedDate` — `date-time`: The date and time when App Store Connect last modified the resource.
- `state` — `AppAssetLibraryPlacementState`: The current state of the resource in App Store Connect.
- `stateDetails` — `[StateDetail]`: Additional details about the current state, such as validation errors.
