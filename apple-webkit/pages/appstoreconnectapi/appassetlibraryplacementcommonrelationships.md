> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementcommonrelationships

# AppAssetLibraryPlacementCommonRelationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The relationships shared by every app asset library placement to its target localizations.

## Declaration

```
object AppAssetLibraryPlacementCommonRelationships
```

## Properties

- `appEventLocalization` — `AppAssetLibraryPlacementCommonRelationships.AppEventLocalization`: The in-app event localization where the placement positions the asset.
- `appStoreVersionLocalization` — `AppAssetLibraryPlacementCommonRelationships.AppStoreVersionLocalization`: The App Store version localization where the placement positions the asset.
- `appCustomProductPageLocalization` — `AppAssetLibraryPlacementCommonRelationships.AppCustomProductPageLocalization`: The custom product page localization where the placement positions the asset.
- `appStoreVersionExperimentTreatmentLocalization` — `AppAssetLibraryPlacementCommonRelationships.AppStoreVersionExperimentTreatmentLocalization`: The product page optimization treatment localization where the placement positions the asset.

## Topics

### Objects

- [AppAssetLibraryPlacementCommonRelationships.AppEventLocalization](appassetlibraryplacementcommonrelationships/appeventlocalization-data.dictionary.md): The in-app event localization on which the app asset library placement appears.
- [AppAssetLibraryPlacementCommonRelationships.AppStoreVersionLocalization](appassetlibraryplacementcommonrelationships/appstoreversionlocalization-data.dictionary.md): The App Store version localization on which the app asset library placement appears.
- [AppAssetLibraryPlacementCommonRelationships.AppCustomProductPageLocalization](appassetlibraryplacementcommonrelationships/appcustomproductpagelocalization-data.dictionary.md): The custom product page localization on which the app asset library placement appears.
- [AppAssetLibraryPlacementCommonRelationships.AppStoreVersionExperimentTreatmentLocalization](appassetlibraryplacementcommonrelationships/appstoreversionexperimenttreatmentlocalization-data.dictionary.md): The App Store version experiment treatment localization on which the app asset library placement appears.

## Relationships

### Inherited By

- [AppAssetLibraryPlacementImageRelationships](appassetlibraryplacementimagerelationships.md)
- [AppAssetLibraryPlacementVideoRelationships](appassetlibraryplacementvideorelationships.md)

## See Also

### Objects and types

- [AppAssetLibraryPlacement](appassetlibraryplacement.md): A placement that positions a library asset on a specific App Store surface.
- [AppAssetLibraryPlacementCommonAttributes](appassetlibraryplacementcommonattributes.md): The attributes common to an app asset library placement of any media type.
- [AppAssetLibraryPlacementImageRelationships](appassetlibraryplacementimagerelationships.md): The relationships specific to an image placement, including its image asset.
- [AppAssetLibraryPlacementVideoRelationships](appassetlibraryplacementvideorelationships.md): The relationships specific to a video placement, including its video asset.
- [AppAssetLibraryPlacementVideoAttributes](appassetlibraryplacementvideoattributes.md): The attributes specific to a video placement, such as its preview-frame settings.
- [AppAssetLibraryPlacementCreateRequest](appassetlibraryplacementcreaterequest.md): The request body you use to create an app asset library placement.
- [AppAssetLibraryPlacementResponse](appassetlibraryplacementresponse.md): The response body for endpoints that create, read, or modify an app asset library placement.
- [AppAssetLibraryPlacementsResponse](appassetlibraryplacementsresponse.md): The response body for endpoints that list app asset library placements.
