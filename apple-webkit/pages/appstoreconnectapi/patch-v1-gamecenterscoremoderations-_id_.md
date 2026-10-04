> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterscoremoderations-_id_

# Modify a Game Center Score Moderation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Block or unblock a score submitted to a leaderboard.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterScoreModerations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the score moderation resource ID from the [List Score Moderations for a Leaderboard](get-v2-gamecenterleaderboards-_id_-gamecenterscoremoderations.md) response.

## HTTP Body

Content type: `application/json`

Type: `GameCenterScoreModerationUpdateRequest`

The request body you use to modify a Game Center score moderation. See [GameCenterScoreModerationUpdateRequest](gamecenterscoremoderationupdaterequest.md).

## Response Codes

- `200` OK — `GameCenterScoreModerationResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5 release notes](app-store-connect-api-4-5-release-notes.md)

<a id="overview"></a>

## Overview

Blocking a score removes it from the leaderboard, and unblocking reinstates it. The response contains the updated [GameCenterScoreModeration](gamecenterscoremoderation.md) in a [GameCenterScoreModerationResponse](gamecenterscoremoderationresponse.md).
