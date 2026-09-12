> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/create-a-new-library-playlist-folder](https://developer.apple.com/documentation/applemusicapi/create-a-new-library-playlist-folder)

# Create a New Library Playlist Folder

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Create a new playlist folder in a user’s library.

## URL

```http
POST https://api.music.apple.com/v1/me/library/playlist-folders
```

## Query Parameters

- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## HTTP Body

Content type: `application/json`

Type: `LibraryPlaylistFolderCreationRequest`

The `POST` request containing the `name` and `parent` playlist folder for the playlist folder to be added.

## Response Codes

- `201` Created — `LibraryPlaylistFoldersResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

If successful, the HTTP status code is 201 (Created) and a new resource created as a result. If unsuccessful, the HTTP status code indicates the error and the details are in the `errors` array.

This endpoint requires a music user token. For more information, see [User Authentication for MusicKit](user-authentication-for-musickit.md).

> **Note**

>  There may be a delay before a new resource appears in a user’s library.

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/me/library/playlist-folders

{
  "attributes": {
    "name": "string"
  },
  "relationships": {
    "parent": {
      "data": [
        {
          "id": "string",
          "type": "library-playlist-folders"
        }
      ]
    }
  }
}
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
                "dateAdded": "2022-03-19T06:07:33Z"
            }
        }
    ],
    "meta": {
        "total": 1
    }
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
- [Get Multiple Library Playlist Folders](get-multiple-library-playlist-folders.md): Fetch one or more library playlist folders by using their identifiers.
- [LibraryPlaylistFolderCreationRequest](libraryplaylistfoldercreationrequest.md): Request object to create a new library playlist folder.
