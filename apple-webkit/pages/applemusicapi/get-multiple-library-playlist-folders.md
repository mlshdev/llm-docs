> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/get-multiple-library-playlist-folders](https://developer.apple.com/documentation/applemusicapi/get-multiple-library-playlist-folders)

# Get Multiple Library Playlist Folders

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Fetch one or more library playlist folders by using their identifiers.

## URL

```http
GET https://api.music.apple.com/v1/me/library/playlist-folders
```

## Query Parameters

- `ids` — `[string]` (required): The unique identifiers for the playlist folders.
- `include` — `[string]`: Additional relationships to include in the fetch.
- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.
- `extend` — `[string]`: A list of attribute extensions to apply to resources in the response.

## Response Codes

- `200` OK — `LibraryPlaylistFoldersResponse`: The request was successful.
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
https://api.music.apple.com/v1/me/library/playlist-folders?ids=p.WmzVVDOUO9pDBk
```

**Response**

```json
{
    "data": [
        {
            "id": "p.WmzVVDOUO9pDBk",
            "type": "library-playlist-folders",
            "href": "/v1/me/library/playlist-folders/p.WmzVVDOUO9pDBk",
            "attributes": {
                "name": "Chill",
                "dateAdded": "2022-03-19T06: 07: 33Z"
            }
        }
    ]
}

```

## See Also

### Related Documentation

- [LibraryPlaylists](libraryplaylists.md): A resource object that represents a library playlist.
- [LibraryPlaylistsResponse](libraryplaylistsresponse.md): The response to a library playlists request.

### Handling Library Playlist Folders

- [Get Root Library Playlists Folder](get-root-library-playlists-folder.md): Fetch the root library playlists folder for the user.
- [Get a Library Playlist Folder](get-a-library-playlist-folder.md): Fetch a library playlist folder by using its identifier.
- [Get a Library Playlist Folder’s Relationship Directly by Name](fetch-a-relationship-on-this-resource-by-name-r5gv.md): Fetch a library playlist folder’s relationship by using its identifier.
- [Create a New Library Playlist Folder](create-a-new-library-playlist-folder.md): Create a new playlist folder in a user’s library.
- [LibraryPlaylistFolderCreationRequest](libraryplaylistfoldercreationrequest.md): Request object to create a new library playlist folder.
