> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryrefdatum/attributes-data.dictionary/videospecs-data.dictionary

# AppAssetLibraryRefDatum.Attributes.VideoSpecs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object AppAssetLibraryRefDatum.Attributes.VideoSpecs
```

## Properties

- `aspectRatio` — `string`:
- `audioRequired` — `boolean`:
- `compatiblePlacementTypes` — `[AppAssetLibraryPlacementType]`:
- `dimensions` — `AppAssetLibraryRefDatum.Attributes.VideoSpecs.Dimensions`:
- `duration` — `AppAssetLibraryRefDatum.Attributes.VideoSpecs.Duration`:
- `fileExtensions` — `[string]`:
- `frameRates` — `[AppAssetLibraryRefDatum.Attributes.VideoSpecs.FrameRates]`:
- `maxFileSize` — `int64`: **Minimum:** `1`
  **Maximum:** `9007199254740991`
- `mimeTypes` — `[string]`:
- `shortName` — `string`:
- `specId` — `string`:
- `universalAsset` — `boolean`:

## Topics

### Dictionaries

- [AppAssetLibraryRefDatum.Attributes.VideoSpecs.Dimensions](videospecs-data.dictionary/dimensions-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.VideoSpecs.Duration](videospecs-data.dictionary/duration-data.dictionary.md)
- [AppAssetLibraryRefDatum.Attributes.VideoSpecs.FrameRates](videospecs-data.dictionary/framerates-data.dictionary.md)
