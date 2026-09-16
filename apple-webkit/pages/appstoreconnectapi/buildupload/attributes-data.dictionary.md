> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/buildupload/attributes-data.dictionary

# BuildUpload.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

Attributes that describe a build upload resource.

## Declaration

```
object BuildUpload.Attributes
```

## Properties

- `cfBundleShortVersionString` — `string`:
- `cfBundleVersion` — `string`:
- `createdDate` — `date-time`:
- `platform` — `Platform`:
- `state` — `BuildUpload.Attributes.State`:
- `uploadedDate` — `date-time`:

## Topics

### Dictionaries

- [BuildUpload.Attributes.State](attributes-data.dictionary/state-data.dictionary.md): The state of a build upload including any errors and warnings.
