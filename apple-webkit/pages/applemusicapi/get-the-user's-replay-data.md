> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/get-the-user's-replay-data](https://developer.apple.com/documentation/applemusicapi/get-the-user's-replay-data)

# Get the user's replay data

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Fetch the user’s replay data for the latest eligible year.

## URL

```http
GET https://api.music.apple.com/v1/me/music-summaries
```

## Query Parameters

- `extend` — `[string]`: A list of attribute extensions applied to resources in the response.
- `filter[year]` — `[string]` (required): A filter applied to the request. The value is always `latest`.
- `include` — `[string]`: A list of relationship names to include for resouces in the response.
- `l` — `string`: The localization specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by the storefront. Otherwise, the storefront’s `defaultLanguageTag` is used.
- `views` — `[string]`: The views to activate for the music summaries resource.
  **Allowed values:** `top-artists`, `top-albums`, `top-songs`

## Response Codes

- `200` OK — `MusicSummariesResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `403` Forbidden — `ForbiddenResponse`: A response indicating invalid or insufficient authentication.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

A successful HTTP request returns music summaries for the most recent year that the user has enough listening history. If unsuccessful, the HTTP status code indicates the error, and the details are in the `errors` array. For more information, see [Handling Requests and Responses](handling-requests-and-responses.md).
