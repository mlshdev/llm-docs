> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryrefdatum

# AppAssetLibraryRefDatum

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

Reference data that describes the valid asset specifications, placement groups, and limits for the asset library.

## Declaration

```
object AppAssetLibraryRefDatum
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryRefData`
- `id` — `string` (required):
- `attributes` — `AppAssetLibraryRefDatum.Attributes`:
- `links` — `ResourceLinks`:

## Mentioned In

- [Discovering asset specifications](discovering-asset-specifications.md)

## Topics

### Objects

- [AppAssetLibraryRefDatum.Attributes](appassetlibraryrefdatum/attributes-data.dictionary.md): Attributes that describe an app asset library reference data resource.

## See Also

### Objects and types

- [AppAssetLibraryRefDataResponse](appassetlibraryrefdataresponse.md): The response body for endpoints that list app asset library reference data.
- [AppAssetLibraryRefDatumResponse](appassetlibraryrefdatumresponse.md): The response body for endpoints that read an app asset library reference data resource.
