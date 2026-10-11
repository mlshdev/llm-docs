> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementorderingrequestcreaterequest/data-data.dictionary/relationships-data.dictionary

# AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The relationships you include in the request and those on which you can operate.

## Declaration

```
object AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships
```

## Properties

- `orderedPlacements` — `AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.OrderedPlacements`: The placements to reorder, listed in their new sequence.
- `appStoreVersionLocalization` — `AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.AppStoreVersionLocalization`: The App Store version localization where the placement positions the asset.
- `appCustomProductPageLocalization` — `AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.AppCustomProductPageLocalization`: The custom product page localization where the placement positions the asset.
- `appStoreVersionExperimentTreatmentLocalization` — `AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.AppStoreVersionExperimentTreatmentLocalization`: The product page optimization treatment localization where the placement positions the asset.

## Topics

### Objects

- [AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.OrderedPlacements](relationships-data.dictionary/orderedplacements-data.dictionary.md): The placements to order, listed in the sequence you want them to display.
- [AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.AppStoreVersionLocalization](relationships-data.dictionary/appstoreversionlocalization-data.dictionary.md): The App Store version localization to associate with the new app asset library placement ordering request.
- [AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.AppCustomProductPageLocalization](relationships-data.dictionary/appcustomproductpagelocalization-data.dictionary.md): The custom product page localization to associate with the new app asset library placement ordering request.
- [AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Relationships.AppStoreVersionExperimentTreatmentLocalization](relationships-data.dictionary/appstoreversionexperimenttreatmentlocalization-data.dictionary.md): The App Store version experiment treatment localization to associate with the new app asset library placement ordering request.

## See Also

### Objects

- [AppAssetLibraryPlacementOrderingRequestCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the new app asset library placement ordering request resource.
