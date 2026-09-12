> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenteractivitylocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenteractivitylocalizations)

# Add an Activity Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Add a localization for a specific Game Center activity.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterActivityLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterActivityLocalizationCreateRequest`

## Response Codes

- `201` Created — `GameCenterActivityLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game center activities](configuring-game-center-activities.md)

## See Also

### Managing Game Center activities

- [Read Activity Localization Information](get-v1-gamecenteractivitylocalizations-_id_.md): Get information for a specific Game Center activity localization.
- [Read Image Information for an Activity Localization](get-v1-gamecenteractivitylocalizations-_id_-image.md): Get details about the image for a specific Game Center activity localization.
- [Get the image ID for a Game Center activity localization](get-v1-gamecenteractivitylocalizations-_id_-relationships-image.md)
- [Modify an Activity Localization](patch-v1-gamecenteractivitylocalizations-_id_.md): Update localization information for a specific Game Center activity.
- [Delete an Activity Localization](delete-v1-gamecenteractivitylocalizations-_id_.md): Remove a specific localization from a Game Center activity.
