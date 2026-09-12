> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenteractivityimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenteractivityimages)

# Create an Activity Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Reserve an image for a Game Center activity.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterActivityImages
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterActivityImageCreateRequest`

## Response Codes

- `201` Created — `GameCenterActivityImageResponse`:
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

- [Read activity image information](get-v1-gamecenteractivityimages-_id_.md): Get information for a specific Game Center activity image.
- [Commit an Image for an Activity](patch-v1-gamecenteractivityimages-_id_.md): Commit an uploaded image asset as a Game Center activity image.
- [Delete an Activity Image](delete-v1-gamecenteractivityimages-_id_.md): Remove a specific image from a Game Center activity.
