> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/add-a-personal-content-rating-8zlgo](https://developer.apple.com/documentation/applemusicapi/add-a-personal-content-rating-8zlgo)

# Add a Personal Station Rating

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Add a user’s station rating by using the station’s identifier.

## URL

```http
PUT https://api.music.apple.com/v1/me/ratings/stations/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the station.

## Query Parameters

- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## HTTP Body

Content type: `application/json`

Type: `RatingRequest`

A dictionary that includes the type and attributes of the resource rating.

## Response Codes

- `200` OK — `RatingsResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

This endpoint requires a music user token. For more information, see [User Authentication for MusicKit](user-authentication-for-musickit.md).

A rating indicates whether a user likes `(1)` or dislikes `(-1)` the station. These are the only two ratings supported.

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/me/ratings/stations/ra.840950253

{
    "type":"rating",
    "attributes":{
        "value":1
    }
}
```

**Response**

```json
{
    "data":[
        {
            "id":"ra.840950253",
            "type":"ratings",
            "href":"/v1/me/ratings/stations/ra.840950253",
            "attributes":{
                "value":1
            }
        }
    ]
}
```

## See Also

### Related Documentation

- [Ratings](ratings.md): An object that represents a rating for a resource.
- [RatingsResponse](ratingsresponse.md): The response to a request for a rating.

### Adding Catalog Ratings

- [Add a Personal Album Rating](add-a-personal-content-rating-4zesn.md): Add a user’s album rating by using the album’s identifier.
- [Add a Personal Music Video Rating](add-a-personal-content-rating-8hke5.md): Add a user’s music video rating by using the music video’s identifier.
- [Add a Personal Playlist Rating](add-a-personal-content-rating-76n4r.md): Add a user’s playlist rating by using the playlist’s identifier.
- [Add a Personal Song Rating](add-a-personal-content-rating-33dop.md): Add a user’s song rating by using the song’s identifier.
