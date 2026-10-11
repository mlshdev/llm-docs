> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/app-asset-library-placements

# App Asset Library placements

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Place library assets on your App Store surfaces.

<a id="overview"></a>

## Overview

The `appAssetLibraryPlacements` resource represents a placement that positions a library asset on a specific App Store surface, such as an App Store version localization, an in-app event localization, or a custom product page localization. Use it to:

- Create a placement for an image or video asset.
- Read a placement.
- Delete a placement.

A placement is polymorphic by media type: an image placement relates to an `appAssetLibraryImages` resource, and a video placement relates to an `appAssetLibraryVideos` resource. The placement type, placement group, and target surface are fixed when you create the placement. To read the placements for a localization, use that localization’s `placements` relationship.

## Topics

### Getting placement information

- [Read an app asset library placement](get-v1-appassetlibraryplacements-_id_.md): Get information about an app asset library placement.

### Managing placements

- [Create an app asset library placement](post-v1-appassetlibraryplacements.md): Create an app asset library placement.
- [Delete an app asset library placement](delete-v1-appassetlibraryplacements-_id_.md): Delete an app asset library placement.

### Objects and types

- [AppAssetLibraryPlacement](appassetlibraryplacement.md): A placement that positions a library asset on a specific App Store surface.
- [AppAssetLibraryPlacementCommonAttributes](appassetlibraryplacementcommonattributes.md): The attributes common to an app asset library placement of any media type.
- [AppAssetLibraryPlacementCommonRelationships](appassetlibraryplacementcommonrelationships.md): The relationships shared by every app asset library placement to its target localizations.
- [AppAssetLibraryPlacementImageRelationships](appassetlibraryplacementimagerelationships.md): The relationships specific to an image placement, including its image asset.
- [AppAssetLibraryPlacementVideoRelationships](appassetlibraryplacementvideorelationships.md): The relationships specific to a video placement, including its video asset.
- [AppAssetLibraryPlacementVideoAttributes](appassetlibraryplacementvideoattributes.md): The attributes specific to a video placement, such as its preview-frame settings.
- [AppAssetLibraryPlacementCreateRequest](appassetlibraryplacementcreaterequest.md): The request body you use to create an app asset library placement.
- [AppAssetLibraryPlacementResponse](appassetlibraryplacementresponse.md): The response body for endpoints that create, read, or modify an app asset library placement.
- [AppAssetLibraryPlacementsResponse](appassetlibraryplacementsresponse.md): The response body for endpoints that list app asset library placements.

### Data types

- [AppAssetLibraryPlacementPlatform](appassetlibraryplacementplatform.md): String that represents the platform of an app asset library placement.
- [AppAssetLibraryPlacementState](appassetlibraryplacementstate.md): String that represents the state of an app asset library placement.
- [AppAssetLibraryPlacementType](appassetlibraryplacementtype.md): String that represents the type of an app asset library placement.

## See Also

### Placing assets

- [App Asset Library placement ordering requests](app-asset-library-placement-ordering-requests.md): Set the display order of an app’s placements within a localization.
