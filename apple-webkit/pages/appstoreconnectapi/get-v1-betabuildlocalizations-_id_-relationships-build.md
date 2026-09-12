> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betabuildlocalizations-_id_-relationships-build](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betabuildlocalizations-_id_-relationships-build)

# Get the build ID for a beta build localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaBuildLocalizations/{id}/relationships/build
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BetaBuildLocalizationBuildLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [List beta build localizations](get-v1-betabuildlocalizations.md): Find and list beta build localizations currently associated with apps.
- [Read beta build localization information](get-v1-betabuildlocalizations-_id_.md): Get a specific beta build localization resource.
- [Read the build information of a beta build localization](get-v1-betabuildlocalizations-_id_-build.md): Get the build information for a specific beta build localization.
