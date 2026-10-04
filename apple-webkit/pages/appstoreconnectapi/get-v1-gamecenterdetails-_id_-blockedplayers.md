> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-blockedplayers

# List Blocked Players

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

List the blocked players for a game.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/blockedPlayers
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center detail resource ID from the [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md) response.

## Query Parameters

- `fields[gameCenterDetailPlayers]` — `[string]`: Additional fields to include for each gameCenterDetailPlayers resource returned by the response.
  **Allowed values:** `nickname`, `blocked`, `bundleId`
- `limit` — `integer`: The maximum number of blocked player resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterDetailPlayersResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5 release notes](app-store-connect-api-4-5-release-notes.md)

<a id="overview"></a>

## Overview

The response contains a list of [GameCenterDetailPlayer](gamecenterdetailplayer.md) resources in a [GameCenterDetailPlayersResponse](gamecenterdetailplayersresponse.md).

## See Also

### Reading blocked players

- [List Blocked Player IDs](get-v1-gamecenterdetails-_id_-relationships-blockedplayers.md): List the blocked player IDs for a Game Center detail.
