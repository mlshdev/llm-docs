> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenteractivitylocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenteractivitylocalizations-_id_)

# Delete an Activity Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Remove a specific localization from a Game Center activity.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterActivityLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center activities

- [Read Activity Localization Information](get-v1-gamecenteractivitylocalizations-_id_.md): Get information for a specific Game Center activity localization.
- [Read Image Information for an Activity Localization](get-v1-gamecenteractivitylocalizations-_id_-image.md): Get details about the image for a specific Game Center activity localization.
- [Get the image ID for a Game Center activity localization](get-v1-gamecenteractivitylocalizations-_id_-relationships-image.md)
- [Add an Activity Localization](post-v1-gamecenteractivitylocalizations.md): Add a localization for a specific Game Center activity.
- [Modify an Activity Localization](patch-v1-gamecenteractivitylocalizations-_id_.md): Update localization information for a specific Game Center activity.
