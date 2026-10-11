> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacement

# AppAssetLibraryPlacement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A placement that positions a library asset on a specific App Store surface.

## Declaration

```
object AppAssetLibraryPlacement
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryPlacements`
- `id` — `string` (required):
- `attributes` — `AppAssetLibraryPlacement.Attributes`:
- `relationships` — `*`: **Allowed types:** `AppAssetLibraryPlacementImageRelationships`, `AppAssetLibraryPlacementVideoRelationships`
- `links` — `ResourceLinks`:

## Topics

### Objects

- [AppAssetLibraryPlacement.Attributes](appassetlibraryplacement/attributes-data.dictionary.md): Attributes that describe an app asset library placement resource.

## See Also

### Objects and types

- [AppAssetLibraryPlacementCommonAttributes](appassetlibraryplacementcommonattributes.md): The attributes common to an app asset library placement of any media type.
- [AppAssetLibraryPlacementCommonRelationships](appassetlibraryplacementcommonrelationships.md): The relationships shared by every app asset library placement to its target localizations.
- [AppAssetLibraryPlacementImageRelationships](appassetlibraryplacementimagerelationships.md): The relationships specific to an image placement, including its image asset.
- [AppAssetLibraryPlacementVideoRelationships](appassetlibraryplacementvideorelationships.md): The relationships specific to a video placement, including its video asset.
- [AppAssetLibraryPlacementVideoAttributes](appassetlibraryplacementvideoattributes.md): The attributes specific to a video placement, such as its preview-frame settings.
- [AppAssetLibraryPlacementCreateRequest](appassetlibraryplacementcreaterequest.md): The request body you use to create an app asset library placement.
- [AppAssetLibraryPlacementResponse](appassetlibraryplacementresponse.md): The response body for endpoints that create, read, or modify an app asset library placement.
- [AppAssetLibraryPlacementsResponse](appassetlibraryplacementsresponse.md): The response body for endpoints that list app asset library placements.
