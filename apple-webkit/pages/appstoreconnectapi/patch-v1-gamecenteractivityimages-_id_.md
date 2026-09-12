> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenteractivityimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenteractivityimages-_id_)

# Commit an Image for an Activity

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Commit an uploaded image asset as a Game Center activity image.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterActivityImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterActivityImageUpdateRequest`

## Response Codes

- `200` OK — `GameCenterActivityImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game center activities](configuring-game-center-activities.md)

## See Also

### Managing Game Center activities

- [Read activity image information](get-v1-gamecenteractivityimages-_id_.md): Get information for a specific Game Center activity image.
- [Create an Activity Image](post-v1-gamecenteractivityimages.md): Reserve an image for a Game Center activity.
- [Delete an Activity Image](delete-v1-gamecenteractivityimages-_id_.md): Remove a specific image from a Game Center activity.
