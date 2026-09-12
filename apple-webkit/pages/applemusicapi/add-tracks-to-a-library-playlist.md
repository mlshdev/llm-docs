> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/add-tracks-to-a-library-playlist](https://developer.apple.com/documentation/applemusicapi/add-tracks-to-a-library-playlist)

# Add Tracks to a Library Playlist

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Add new tracks to the end of a library playlist.

## URL

```http
POST https://api.music.apple.com/v1/me/library/playlists/{id}/tracks
```

## Path Parameters

- `id` — `string` (required): The unique identifier of the library playlist.

## Query Parameters

- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## HTTP Body

Content type: `application/json`

Type: `LibraryPlaylistTracksRequest`

The `POST` request containing the `identifier` and `type` for the tracks to be added.

## Response Codes

- `204` No Content — `LibraryPlaylistsTracksRelationshipResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

If successful, the HTTP status code is 204 and the tracks added as a result. If unsuccessful, the HTTP status code indicates the error and the details are in the `errors` array.

This endpoint requires a music user token. For more information, see [User Authentication for MusicKit](user-authentication-for-musickit.md).

> **Note**

>  There may be a delay before a new resource appears in a user’s library.

You can include an optional `tracks` relationship in this request.

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/me/library/playlists/p.RB1AARBIv74Zkl/tracks
```

**Response**

```json
No response body
```

## See Also

### Related Documentation

- [LibraryPlaylists](libraryplaylists.md): A resource object that represents a library playlist.
- [LibraryPlaylistsResponse](libraryplaylistsresponse.md): The response to a library playlists request.

### Creating and Modifying User Playlists

- [Create a New Library Playlist](create-a-new-library-playlist.md): Create a new playlist in a user’s library.
- [Add a Resource to a Library](add-a-resource-to-a-library.md): Add a catalog resource to a user’s iCloud Music Library.
- [LibraryPlaylistCreationRequest](libraryplaylistcreationrequest.md): A request to create a new playlist in a user’s library.
- [LibraryPlaylistTracksRequest](libraryplaylisttracksrequest.md): A request to add tracks to a library playlist.
