> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryrefdataresponse

# AppAssetLibraryRefDataResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that list app asset library reference data.

## Declaration

```
object AppAssetLibraryRefDataResponse
```

## Properties

- `data` — `[AppAssetLibraryRefDatum]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects and types

- [AppAssetLibraryRefDatum](appassetlibraryrefdatum.md): Reference data that describes the valid asset specifications, placement groups, and limits for the asset library.
- [AppAssetLibraryRefDatumResponse](appassetlibraryrefdatumresponse.md): The response body for endpoints that read an app asset library reference data resource.
