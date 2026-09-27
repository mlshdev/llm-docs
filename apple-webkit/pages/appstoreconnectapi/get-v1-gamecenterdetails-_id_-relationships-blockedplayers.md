> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-blockedplayers

# List Blocked Player IDs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

List the blocked player IDs for a Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/relationships/blockedPlayers
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center detail resource ID from the [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of related blockedPlayers resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterDetailBlockedPlayersLinkagesResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

The response contains the blocked players’ resource identifiers in a [GameCenterDetailBlockedPlayersLinkagesResponse](gamecenterdetailblockedplayerslinkagesresponse.md).

## See Also

### Reading blocked players

- [List Blocked Players](get-v1-gamecenterdetails-_id_-blockedplayers.md): List the blocked players for a game.
