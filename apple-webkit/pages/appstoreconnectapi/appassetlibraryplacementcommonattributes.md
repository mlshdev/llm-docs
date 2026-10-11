> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementcommonattributes

# AppAssetLibraryPlacementCommonAttributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The attributes common to an app asset library placement of any media type.

## Declaration

```
object AppAssetLibraryPlacementCommonAttributes
```

## Properties

- `mediaType` — `AppAssetLibraryMediaType`: The kind of asset the placement positions, which determines the shape of its relationships.
- `placementType` — `AppAssetLibraryPlacementType`: The kind of placement, which determines where the asset appears in your App Store content.
- `placementGroup` — `string`: An identifier that groups placements you order together as a set.
- `createdDate` — `date-time`: The date and time when App Store Connect created the resource.
- `lastModifiedDate` — `date-time`: The date and time when App Store Connect last modified the resource.
- `state` — `AppAssetLibraryPlacementState`: The current state of the resource in App Store Connect.
- `stateDetails` — `[StateDetail]`: Additional details about the current state, such as validation errors.

## Relationships

### Inherited By

- [AppAssetLibraryPlacementVideoAttributes](appassetlibraryplacementvideoattributes.md)

## See Also

### Objects and types

- [AppAssetLibraryPlacement](appassetlibraryplacement.md): A placement that positions a library asset on a specific App Store surface.
- [AppAssetLibraryPlacementCommonRelationships](appassetlibraryplacementcommonrelationships.md): The relationships shared by every app asset library placement to its target localizations.
- [AppAssetLibraryPlacementImageRelationships](appassetlibraryplacementimagerelationships.md): The relationships specific to an image placement, including its image asset.
- [AppAssetLibraryPlacementVideoRelationships](appassetlibraryplacementvideorelationships.md): The relationships specific to a video placement, including its video asset.
- [AppAssetLibraryPlacementVideoAttributes](appassetlibraryplacementvideoattributes.md): The attributes specific to a video placement, such as its preview-frame settings.
- [AppAssetLibraryPlacementCreateRequest](appassetlibraryplacementcreaterequest.md): The request body you use to create an app asset library placement.
- [AppAssetLibraryPlacementResponse](appassetlibraryplacementresponse.md): The response body for endpoints that create, read, or modify an app asset library placement.
- [AppAssetLibraryPlacementsResponse](appassetlibraryplacementsresponse.md): The response body for endpoints that list app asset library placements.
