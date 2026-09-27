> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailplayersresponse

# GameCenterDetailPlayersResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that list the blocked players for a game.

## Declaration

```
object GameCenterDetailPlayersResponse
```

## Properties

- `data` — `[GameCenterDetailPlayer]` (required): The resource data. Contains an array of [GameCenterDetailPlayer](gamecenterdetailplayer.md) resources.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

<a id="overview"></a>

## Overview

The [List Blocked Players](get-v1-gamecenterdetails-_id_-blockedplayers.md) endpoint returns this response.

## See Also

### Objects

- [GameCenterDetailPlayer](gamecenterdetailplayer.md): A Game Center player tied to a single game, whom you can block from playing that game.
- [GameCenterDetailPlayerResponse](gamecenterdetailplayerresponse.md): The response body for endpoints that modify a Game Center player in an app’s Game Center configuration.
- [GameCenterDetailPlayerUpdateRequest](gamecenterdetailplayerupdaterequest.md): The request body you use to update a Game Center detail player.
- [GameCenterDetailBlockedPlayersLinkagesResponse](gamecenterdetailblockedplayerslinkagesresponse.md): The response body for endpoints that list the blocked player IDs related to a Game Center detail.
