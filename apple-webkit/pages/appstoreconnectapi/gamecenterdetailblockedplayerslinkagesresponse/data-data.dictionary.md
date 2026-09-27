> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailblockedplayerslinkagesresponse/data-data.dictionary

# GameCenterDetailBlockedPlayersLinkagesResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The resource identifier for a blocked player related to a Game Center detail.

## Declaration

```
object GameCenterDetailBlockedPlayersLinkagesResponse.Data
```

## Properties

- `id` — `string` (required): The player’s game-scoped ID — the same identifier GameKit vends as [gamePlayerID](https://developer.apple.com/documentation/gamekit/gkplayer/gameplayerid).
- `type` — `string` (required): The resource type.

  - gameCenterDetailPlayers:  
  **Allowed values:** `gameCenterDetailPlayers`
