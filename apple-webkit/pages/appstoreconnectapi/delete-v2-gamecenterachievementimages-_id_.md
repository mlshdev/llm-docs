> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-gamecenterachievementimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-gamecenterachievementimages-_id_)

# Delete a Game Center Achievement Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Delete a specific Game Center achievement image.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/gameCenterAchievementImages/{id}
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

<a id="overview"></a>

## Overview

- id:
- 204:
- 400:
- 401:
- 403:
- 404:
- 409:
- 429:

## See Also

### Managing Game Center achievements images

- [Read Game Center Achievement Image Information](get-v2-gamecenterachievementimages-_id_.md): Get information about a specific Game Center achievement image.
- [Create a Game Center Achievement Image](post-v2-gamecenterachievementimages.md): Create a Game Center achievement image.
- [Modify a Game Center Achievement Image](patch-v2-gamecenterachievementimages-_id_.md): Update a specific Game Center achievement image.
- [Read Achievement Image Information](get-v1-gamecenterachievementimages-_id_.md): Deprecated. Get information about an achievement image and its upload and processing status.
- [Create an Achievement Image](post-v1-gamecenterachievementimages.md): Deprecated. Add a new achievement image.
- [Modify an Achievement Image](patch-v1-gamecenterachievementimages-_id_.md): Deprecated. Commit an achievement image after uploading it.
- [Delete an Achievement Image](delete-v1-gamecenterachievementimages-_id_.md): Deprecated. Delete an image that’s associated with an achievement.
