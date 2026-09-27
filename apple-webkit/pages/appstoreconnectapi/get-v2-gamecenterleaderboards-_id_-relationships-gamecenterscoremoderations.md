> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboards-_id_-relationships-gamecenterscoremoderations

# List Score Moderation IDs for a Game Center Leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

List the score moderation IDs for a Game Center leaderboard.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboards/{id}/relationships/gameCenterScoreModerations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the leaderboard resource ID from the [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of related gameCenterScoreModerations resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

The response contains the score moderations’ resource identifiers in a [GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse](gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse.md).

## See Also

### Reading score moderations

- [List Score Moderations for a Leaderboard](get-v2-gamecenterleaderboards-_id_-gamecenterscoremoderations.md): List the score moderations for a leaderboard.
