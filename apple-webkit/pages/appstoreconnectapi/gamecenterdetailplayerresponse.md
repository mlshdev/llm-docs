> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailplayerresponse

# GameCenterDetailPlayerResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that modify a Game Center player in an app’s Game Center configuration.

## Declaration

```
object GameCenterDetailPlayerResponse
```

## Properties

- `data` — `GameCenterDetailPlayer` (required): The resource data. Contains a single [GameCenterDetailPlayer](gamecenterdetailplayer.md) resource.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

<a id="overview"></a>

## Overview

The [Modify a Game Center Detail Player](patch-v1-gamecenterdetailplayers-_id_.md) endpoint returns this response.

## See Also

### Objects

- [GameCenterDetailPlayer](gamecenterdetailplayer.md): A Game Center player tied to a single game, whom you can block from playing that game.
- [GameCenterDetailPlayerUpdateRequest](gamecenterdetailplayerupdaterequest.md): The request body you use to update a Game Center detail player.
- [GameCenterDetailPlayersResponse](gamecenterdetailplayersresponse.md): The response body for endpoints that list the blocked players for a game.
- [GameCenterDetailBlockedPlayersLinkagesResponse](gamecenterdetailblockedplayerslinkagesresponse.md): The response body for endpoints that list the blocked player IDs related to a Game Center detail.
