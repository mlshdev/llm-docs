> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementresponse

# AppAssetLibraryPlacementResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that create, read, or modify an app asset library placement.

## Declaration

```
object AppAssetLibraryPlacementResponse
```

## Properties

- `data` — `AppAssetLibraryPlacement` (required):
- `included` — `[*]`: **Allowed types:** `AppAssetLibraryImage`, `AppAssetLibraryVideo`, `AppCustomProductPageLocalization`, `AppEventLocalization`, `AppStoreVersionExperimentTreatmentLocalization`, `AppStoreVersionLocalization`
- `links` — `DocumentLinks` (required):

## See Also

### Objects and types

- [AppAssetLibraryPlacement](appassetlibraryplacement.md): A placement that positions a library asset on a specific App Store surface.
- [AppAssetLibraryPlacementCommonAttributes](appassetlibraryplacementcommonattributes.md): The attributes common to an app asset library placement of any media type.
- [AppAssetLibraryPlacementCommonRelationships](appassetlibraryplacementcommonrelationships.md): The relationships shared by every app asset library placement to its target localizations.
- [AppAssetLibraryPlacementImageRelationships](appassetlibraryplacementimagerelationships.md): The relationships specific to an image placement, including its image asset.
- [AppAssetLibraryPlacementVideoRelationships](appassetlibraryplacementvideorelationships.md): The relationships specific to a video placement, including its video asset.
- [AppAssetLibraryPlacementVideoAttributes](appassetlibraryplacementvideoattributes.md): The attributes specific to a video placement, such as its preview-frame settings.
- [AppAssetLibraryPlacementCreateRequest](appassetlibraryplacementcreaterequest.md): The request body you use to create an app asset library placement.
- [AppAssetLibraryPlacementsResponse](appassetlibraryplacementsresponse.md): The response body for endpoints that list app asset library placements.
