> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterdetailplayers-_id_

# Modify a Game Center Detail Player

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Block or unblock a player for a game.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterDetailPlayers/{id}
```

## Path Parameters

- `id` — `string` (required): The player’s game-scoped ID. Obtain it from the [List Blocked Players](get-v1-gamecenterdetails-_id_-blockedplayers.md) response or the [List Score Moderations for a Leaderboard](get-v2-gamecenterleaderboards-_id_-gamecenterscoremoderations.md) response.

## HTTP Body

Content type: `application/json`

Type: `GameCenterDetailPlayerUpdateRequest`

The request body you use to modify a Game Center detail player. See [GameCenterDetailPlayerUpdateRequest](gamecenterdetailplayerupdaterequest.md).

## Response Codes

- `200` OK — `GameCenterDetailPlayerResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5 release notes](app-store-connect-api-4-5-release-notes.md)

<a id="overview"></a>

## Overview

> **Tip**

>  These endpoints require information from GameKit, specifically [gamePlayerID](https://developer.apple.com/documentation/gamekit/gkplayer/gameplayerid).

Blocking a player prevents that player from playing the game. The response contains the updated [GameCenterDetailPlayer](gamecenterdetailplayer.md) in a [GameCenterDetailPlayerResponse](gamecenterdetailplayerresponse.md).
