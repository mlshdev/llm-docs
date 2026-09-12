> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterachievementimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterachievementimages-_id_)

# Delete an Achievement Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Delete an image that’s associated with an achievement.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center achievement images resource ID from the [Read Achievement Information](get-v1-gamecenterachievements-_id_.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/{id}
```

**Response**

```json
HTTP/1.1 204 No Content
```

## See Also

### Managing Game Center achievements images

- [Read Game Center Achievement Image Information](get-v2-gamecenterachievementimages-_id_.md): Get information about a specific Game Center achievement image.
- [Create a Game Center Achievement Image](post-v2-gamecenterachievementimages.md): Create a Game Center achievement image.
- [Modify a Game Center Achievement Image](patch-v2-gamecenterachievementimages-_id_.md): Update a specific Game Center achievement image.
- [Delete a Game Center Achievement Image](delete-v2-gamecenterachievementimages-_id_.md): Delete a specific Game Center achievement image.
- [Read Achievement Image Information](get-v1-gamecenterachievementimages-_id_.md): Deprecated. Get information about an achievement image and its upload and processing status.
- [Create an Achievement Image](post-v1-gamecenterachievementimages.md): Deprecated. Add a new achievement image.
- [Modify an Achievement Image](patch-v1-gamecenterachievementimages-_id_.md): Deprecated. Commit an achievement image after uploading it.
