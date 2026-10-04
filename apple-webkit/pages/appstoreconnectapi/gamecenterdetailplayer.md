> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailplayer

# GameCenterDetailPlayer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A Game Center player tied to a single game, whom you can block from playing that game.

## Declaration

```
object GameCenterDetailPlayer
```

## Properties

- `attributes` — `GameCenterDetailPlayer.Attributes`: The resource’s attributes.
- `id` — `string` (required): The player’s game-scoped ID — the same identifier GameKit vends as [gamePlayerID](https://developer.apple.com/documentation/gamekit/gkplayer/gameplayerid).
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `gameCenterDetailPlayers`

## Topics

### Objects

- [GameCenterDetailPlayer.Attributes](gamecenterdetailplayer/attributes-data.dictionary.md): The attributes that describe a Game Center detail player.

## See Also

### Objects

- [GameCenterDetailPlayerResponse](gamecenterdetailplayerresponse.md): The response body for endpoints that modify a Game Center player in an app’s Game Center configuration.
- [GameCenterDetailPlayerUpdateRequest](gamecenterdetailplayerupdaterequest.md): The request body you use to update a Game Center detail player.
- [GameCenterDetailPlayersResponse](gamecenterdetailplayersresponse.md): The response body for endpoints that list the blocked players for a game.
- [GameCenterDetailBlockedPlayersLinkagesResponse](gamecenterdetailblockedplayerslinkagesresponse.md): The response body for endpoints that list the blocked player IDs related to a Game Center detail.
