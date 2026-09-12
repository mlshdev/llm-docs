> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivitylocalizations-_id_-relationships-image](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivitylocalizations-_id_-relationships-image)

# Get the image ID for a Game Center activity localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivityLocalizations/{id}/relationships/image
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `GameCenterActivityLocalizationImageLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center activities

- [Read Activity Localization Information](get-v1-gamecenteractivitylocalizations-_id_.md): Get information for a specific Game Center activity localization.
- [Read Image Information for an Activity Localization](get-v1-gamecenteractivitylocalizations-_id_-image.md): Get details about the image for a specific Game Center activity localization.
- [Add an Activity Localization](post-v1-gamecenteractivitylocalizations.md): Add a localization for a specific Game Center activity.
- [Modify an Activity Localization](patch-v1-gamecenteractivitylocalizations-_id_.md): Update localization information for a specific Game Center activity.
- [Delete an Activity Localization](delete-v1-gamecenteractivitylocalizations-_id_.md): Remove a specific localization from a Game Center activity.
