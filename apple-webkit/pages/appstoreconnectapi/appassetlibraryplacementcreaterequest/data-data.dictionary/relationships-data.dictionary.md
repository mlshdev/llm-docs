> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementcreaterequest/data-data.dictionary/relationships-data.dictionary

# AppAssetLibraryPlacementCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The relationships you include in the request and those on which you can operate.

## Declaration

```
object AppAssetLibraryPlacementCreateRequest.Data.Relationships
```

## Properties

- `image` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships.Image`: The image asset that the placement positions.
- `video` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships.Video`: The video asset that the placement positions.
- `appEventLocalization` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppEventLocalization`: The in-app event localization where the placement positions the asset.
- `appStoreVersionLocalization` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppStoreVersionLocalization`: The App Store version localization where the placement positions the asset.
- `appCustomProductPageLocalization` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppCustomProductPageLocalization`: The custom product page localization where the placement positions the asset.
- `appStoreVersionExperimentTreatmentLocalization` — `AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppStoreVersionExperimentTreatmentLocalization`: The product page optimization treatment localization where the placement positions the asset.

## Topics

### Objects

- [AppAssetLibraryPlacementCreateRequest.Data.Relationships.Image](relationships-data.dictionary/image-data.dictionary.md): The image asset to associate with the new app asset library placement.
- [AppAssetLibraryPlacementCreateRequest.Data.Relationships.Video](relationships-data.dictionary/video-data.dictionary.md): The video asset to associate with the new app asset library placement.
- [AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppEventLocalization](relationships-data.dictionary/appeventlocalization-data.dictionary.md): The in-app event localization to associate with the new app asset library placement.
- [AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppStoreVersionLocalization](relationships-data.dictionary/appstoreversionlocalization-data.dictionary.md): The App Store version localization to associate with the new app asset library placement.
- [AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppCustomProductPageLocalization](relationships-data.dictionary/appcustomproductpagelocalization-data.dictionary.md): The custom product page localization to associate with the new app asset library placement.
- [AppAssetLibraryPlacementCreateRequest.Data.Relationships.AppStoreVersionExperimentTreatmentLocalization](relationships-data.dictionary/appstoreversionexperimenttreatmentlocalization-data.dictionary.md): The App Store version experiment treatment localization to associate with the new app asset library placement.

## See Also

### Objects

- [AppAssetLibraryPlacementCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the new app asset library placement resource.
