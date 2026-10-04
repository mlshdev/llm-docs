> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboards-_id_-gamecenterscoremoderations

# List Score Moderations for a Leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

List the score moderations for a leaderboard.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboards/{id}/gameCenterScoreModerations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the leaderboard resource ID from the [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md) response.

## Query Parameters

- `exists[blocked]` — `boolean`: Filter the returned score moderations to include only those that are blocked (true) or not blocked (false).
- `fields[gameCenterScoreModerations]` — `[string]`: Additional fields to include for each gameCenterScoreModerations resource returned by the response.
  **Allowed values:** `rank`, `score`, `submittedDate`, `blocked`, `preReleased`, `context`, `challengeIds`, `player`
- `fields[gameCenterDetailPlayers]` — `[string]`: Additional fields to include for each gameCenterDetailPlayers resource returned by the response.
  **Allowed values:** `nickname`, `blocked`, `bundleId`
- `limit` — `integer`: The maximum number of score moderation resources to return.
  **Maximum:** `200`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `player`

## Response Codes

- `200` OK — `GameCenterScoreModerationsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`: The request isn’t authorized.
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`: The rate limit is exceeded.

## Mentioned In

- [App Store Connect API 4.5 release notes](app-store-connect-api-4-5-release-notes.md)

<a id="overview"></a>

## Overview

The response contains a list of [GameCenterScoreModeration](gamecenterscoremoderation.md) resources in a [GameCenterScoreModerationsResponse](gamecenterscoremoderationsresponse.md).

## See Also

### Reading score moderations

- [List Score Moderation IDs for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-relationships-gamecenterscoremoderations.md): List the score moderation IDs for a Game Center leaderboard.
