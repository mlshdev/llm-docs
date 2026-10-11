> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryrefdatumresponse

# AppAssetLibraryRefDatumResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that read an app asset library reference data resource.

## Declaration

```
object AppAssetLibraryRefDatumResponse
```

## Properties

- `data` — `AppAssetLibraryRefDatum` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Objects and types

- [AppAssetLibraryRefDatum](appassetlibraryrefdatum.md): Reference data that describes the valid asset specifications, placement groups, and limits for the asset library.
- [AppAssetLibraryRefDataResponse](appassetlibraryrefdataresponse.md): The response body for endpoints that list app asset library reference data.
