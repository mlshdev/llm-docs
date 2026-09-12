> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/add-a-resource-to-a-library](https://developer.apple.com/documentation/applemusicapi/add-a-resource-to-a-library)

# Add a Resource to a Library

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Add a catalog resource to a user’s iCloud Music Library.

## URL

```http
POST https://api.music.apple.com/v1/me/library
```

## Query Parameters

- `ids` — `[string]` (required): The unique catalog identifiers for the resources. To indicate the type of resource to add, follow the `ids` with one of the allowed values. Add multiple types in the same request.
- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object that `storefront` specifies. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## Response Codes

- `202` Accepted — `EmptyBodyResponse`: Although the modification request was acceptable, it may not have completed.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

If successful, the HTTP status code is 202 (Accepted) and there is no response body. For requested IDs that can’t be added to a user’s library, Apple Music Library ignores those IDs. If unsuccessful, the HTTP status code indicates the error and the details are in the `errors` array.

This endpoint requires a music user token. For more information, see [User Authentication for MusicKit](user-authentication-for-musickit.md).

> **Note**

>  There may be a delay before a new resource appears in a user’s library.

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/me/library?ids[albums]=1577502911
```

**Response**

```json
No response body
```

## See Also

### Related Documentation

- [Resource](resource.md): A resource—such as an album, song, or playlist.
