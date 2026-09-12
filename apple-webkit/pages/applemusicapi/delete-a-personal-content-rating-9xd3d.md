> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/delete-a-personal-content-rating-9xd3d](https://developer.apple.com/documentation/applemusicapi/delete-a-personal-content-rating-9xd3d)

# Delete a Personal Music Video Rating

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Remove a user’s music video rating by using the music video’s identifier.

## URL

```http
DELETE https://api.music.apple.com/v1/me/ratings/music-videos/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the music video.

## Query Parameters

- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## Response Codes

- `204` No Content — `EmptyBodyResponse`: The modification was successful, but there’s no content in the response.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

This endpoint requires a music user token. For more information, see [User Authentication for MusicKit](user-authentication-for-musickit.md).

A rating indicates whether a user likes `(1)` or dislikes `(-1)` the music video. These are the only two ratings supported.

For a particular music video, the personal ratings for that video’s catalog ID and library ID (if the video is in the library) stay synced.

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/me/ratings/music-videos/639032181
```

**Response**

```json
No response body.
```

## See Also

### Related Documentation

- [Ratings](ratings.md): An object that represents a rating for a resource.

### Deleting Catalog Ratings

- [Delete a Personal Album Rating](delete-a-personal-content-rating-863sx.md): Remove a user’s album rating by using the album’s identifier.
- [Delete a Personal Playlist Rating](delete-a-personal-content-rating-mv3a.md): Remove a user’s playlist rating by using the playlist’s identifier.
- [Delete a Personal Song Rating](delete-a-personal-content-rating-3a3a2.md): Remove a user’s song rating by using the song’s identifier.
- [Delete a Personal Station Rating](delete-a-personal-content-rating-7pbcr.md): Remove a user’s station rating by using the station’s identifier.
