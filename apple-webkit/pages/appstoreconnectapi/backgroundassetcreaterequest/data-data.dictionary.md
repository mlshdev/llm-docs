> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/backgroundassetcreaterequest/data-data.dictionary

# BackgroundAssetCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The data object within a background asset create request, containing the resource type and attributes.

## Declaration

```
object BackgroundAssetCreateRequest.Data
```

## Properties

- `attributes` — `BackgroundAssetCreateRequest.Data.Attributes` (required):
- `relationships` — `BackgroundAssetCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `backgroundAssets`

## Topics

### Dictionaries

- [BackgroundAssetCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe a background asset create request resource.
- [BackgroundAssetCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
