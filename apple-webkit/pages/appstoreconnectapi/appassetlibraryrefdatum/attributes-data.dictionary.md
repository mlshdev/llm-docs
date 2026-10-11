> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryrefdatum/attributes-data.dictionary

# AppAssetLibraryRefDatum.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

Attributes that describe an app asset library reference data resource.

## Declaration

```
object AppAssetLibraryRefDatum.Attributes
```

## Properties

- `features` — `[AppAssetLibraryRefDatum.Attributes.Features]`: The App Store features to which the reference data applies.
- `placementProfileGroups` — `[AppAssetLibraryRefDatum.Attributes.PlacementProfileGroups]`: The groups of placement profiles that define how you can place assets.
- `imageSpecs` — `[AppAssetLibraryRefDatum.Attributes.ImageSpecs]`: The valid specifications for image assets, including dimensions and formats.
- `videoSpecs` — `[AppAssetLibraryRefDatum.Attributes.VideoSpecs]`: The valid specifications for video assets, including dimensions and formats.
- `placementTypes` — `[AppAssetLibraryRefDatum.Attributes.PlacementTypes]`: The placement types available for positioning assets.
- `displayClasses` — `[AppAssetLibraryRefDatum.Attributes.DisplayClasses]`: The display classes that describe the target devices for assets.

## Topics

### Dictionaries

- [AppAssetLibraryRefDatum.Attributes.DisplayClasses](attributes-data.dictionary/displayclasses-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.Features](attributes-data.dictionary/features-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.ImageSpecs](attributes-data.dictionary/imagespecs-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.PlacementProfileGroups](attributes-data.dictionary/placementprofilegroups-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.PlacementTypes](attributes-data.dictionary/placementtypes-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.VideoSpecs](attributes-data.dictionary/videospecs-data.dictionary.md)
