> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailplayerupdaterequest/data-data.dictionary

# GameCenterDetailPlayerUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The resource data for the Game Center detail player you update.

## Declaration

```
object GameCenterDetailPlayerUpdateRequest.Data
```

## Properties

- `attributes` — `GameCenterDetailPlayerUpdateRequest.Data.Attributes`: The attributes that describe the Game Center detail player.
- `id` — `string` (required): The player’s game-scoped ID — the same identifier GameKit vends as [gamePlayerID](https://developer.apple.com/documentation/gamekit/gkplayer/gameplayerid).
- `type` — `string` (required): The resource type.

  - gameCenterDetailPlayers:  
  **Allowed values:** `gameCenterDetailPlayers`

## Topics

### Objects

- [GameCenterDetailPlayerUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes that describe a Game Center detail player you update.
