> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/get-multiple-library-artists](https://developer.apple.com/documentation/applemusicapi/get-multiple-library-artists)

# Get Multiple Library Artists

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Fetch one or more library artists by using their identifiers.

## URL

```http
GET https://api.music.apple.com/v1/me/library/artists
```

## Query Parameters

- `ids` — `[string]` (required): The unique identifiers for the artists. The maximum fetch limit is 25.
- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.
- `include` — `[string]`: Additional relationships to include in the fetch.
- `extend` — `[string]`: A list of attribute extensions to apply to resources in the response.

## Response Codes

- `200` OK — `LibraryArtistsResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

If successful, the HTTP status code is 200 (OK) and the `data` array contains the requested resource object. If unsuccessful, the HTTP status code indicates the error and the details are in the `errors` array.

This endpoint requires a music user token. For more information, see [User Authentication for MusicKit](user-authentication-for-musickit.md).

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/me/library/artists?ids=r.y8mMT7t
```

**Response**

```json
{
    "data": [
        {
            "id": "r.y8mMT7t",
            "type": "library-artists",
            "href": "/v1/me/library/artists/r.y8mMT7t",
            "attributes": {
                "name": "Orville Peck"
            }
        }
    ]
}
```

## See Also

### Related Documentation

- [LibraryArtists](libraryartists.md): A resource object that represents an artist present in a user’s library.
- [LibraryArtistsResponse](libraryartistsresponse.md): The response to a library artists request.

### Requesting a Library Artist

- [Get a Library Artist](get-a-library-artist.md): Fetch a library artist by using its identifier.
- [Get a Library Artist's Relationship Directly by Name](fetch-a-relationship-on-this-resource-by-name-9dsoc.md): Fetch a library artist’s relationship by using its identifier.
- [Get All Library Artists](get-all-library-artists.md): Fetch all the library artists in alphabetical order.
