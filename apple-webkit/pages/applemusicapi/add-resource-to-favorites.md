> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/add-resource-to-favorites](https://developer.apple.com/documentation/applemusicapi/add-resource-to-favorites)

# Add resource to favorites

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Add the user’s resource to favorites.

## URL

```http
POST https://api.music.apple.com/v1/me/favorites
```

## Query Parameters

- `ids` — `[string]` (required): The ids of the specific type.
- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object that `storefront` specifies. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## Response Codes

- `202` Accepted — `EmptyBodyResponse`: Request accepted.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

This endpoint allows the user to favorite a resource. For example, if a customer favorites a song, the song is added to their `favorite songs` playlist. If they like an album or playlist, they can filter on `favorited album` in their library view.

If successful, the HTTP status code is 202 (Accepted) and there’s no response body. For requested IDs that the system can’t add to a user’s library, Apple Music Library ignores those IDs. If unsuccessful, the HTTP status code indicates the error and the details are in the `errors` array.

> **Note**

> Bulk additions of heterogenous types are permitted.
