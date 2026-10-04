> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailplayerupdaterequest

# GameCenterDetailPlayerUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to update a Game Center detail player.

## Declaration

```
object GameCenterDetailPlayerUpdateRequest
```

## Properties

- `data` — `GameCenterDetailPlayerUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [GameCenterDetailPlayerUpdateRequest.Data](gamecenterdetailplayerupdaterequest/data-data.dictionary.md): The resource data for the Game Center detail player you update.

## See Also

### Objects

- [GameCenterDetailPlayer](gamecenterdetailplayer.md): A Game Center player tied to a single game, whom you can block from playing that game.
- [GameCenterDetailPlayerResponse](gamecenterdetailplayerresponse.md): The response body for endpoints that modify a Game Center player in an app’s Game Center configuration.
- [GameCenterDetailPlayersResponse](gamecenterdetailplayersresponse.md): The response body for endpoints that list the blocked players for a game.
- [GameCenterDetailBlockedPlayersLinkagesResponse](gamecenterdetailblockedplayerslinkagesresponse.md): The response body for endpoints that list the blocked player IDs related to a Game Center detail.
