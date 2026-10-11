> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryplacementorderingrequest

# AppAssetLibraryPlacementOrderingRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A request that sets the display order of an app’s asset library placements within a localization.

## Declaration

```
object AppAssetLibraryPlacementOrderingRequest
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryPlacementOrderingRequests`
- `id` — `string` (required):
- `relationships` — `AppAssetLibraryPlacementOrderingRequest.Relationships`:
- `links` — `ResourceLinks`:

## Topics

### Objects

- [AppAssetLibraryPlacementOrderingRequest.Relationships](appassetlibraryplacementorderingrequest/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [AppAssetLibraryPlacementOrderingRequestCreateRequest](appassetlibraryplacementorderingrequestcreaterequest.md): The request body you use to create an app asset library placement ordering request.
- [AppAssetLibraryPlacementOrderingRequestResponse](appassetlibraryplacementorderingrequestresponse.md): The response body for endpoints that create an app asset library placement ordering request.
