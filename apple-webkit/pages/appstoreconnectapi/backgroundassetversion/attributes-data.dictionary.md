> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/backgroundassetversion/attributes-data.dictionary

# BackgroundAssetVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a background asset version resource.

## Declaration

```
object BackgroundAssetVersion.Attributes
```

## Properties

- `createdDate` — `date-time`:
- `locale` — `string`:
- `platforms` — `[Platform]`:
- `state` — `BackgroundAssetVersionState`:
- `stateDetails` — `BackgroundAssetVersion.Attributes.StateDetails`:
- `version` — `string`:

## Topics

### Dictionaries

- [BackgroundAssetVersion.Attributes.StateDetails](attributes-data.dictionary/statedetails-data.dictionary.md): Details about errors, warnings, and informational messages related to the state.
