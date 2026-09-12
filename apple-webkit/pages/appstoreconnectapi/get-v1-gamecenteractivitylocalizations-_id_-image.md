> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivitylocalizations-_id_-image](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivitylocalizations-_id_-image)

# Read Image Information for an Activity Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get details about the image for a specific Game Center activity localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivityLocalizations/{id}/image
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterActivityImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`

## Response Codes

- `200` OK — `GameCenterActivityImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center activities

- [Read Activity Localization Information](get-v1-gamecenteractivitylocalizations-_id_.md): Get information for a specific Game Center activity localization.
- [Get the image ID for a Game Center activity localization](get-v1-gamecenteractivitylocalizations-_id_-relationships-image.md)
- [Add an Activity Localization](post-v1-gamecenteractivitylocalizations.md): Add a localization for a specific Game Center activity.
- [Modify an Activity Localization](patch-v1-gamecenteractivitylocalizations-_id_.md): Update localization information for a specific Game Center activity.
- [Delete an Activity Localization](delete-v1-gamecenteractivitylocalizations-_id_.md): Remove a specific localization from a Game Center activity.
