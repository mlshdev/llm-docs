> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailblockedplayerslinkagesresponse

# GameCenterDetailBlockedPlayersLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that list the blocked player IDs related to a Game Center detail.

## Declaration

```
object GameCenterDetailBlockedPlayersLinkagesResponse
```

## Properties

- `data` — `[GameCenterDetailBlockedPlayersLinkagesResponse.Data]` (required): The resource identifiers for the blocked players related to the Game Center detail.
- `links` — `PagedDocumentLinks` (required): Navigational links including the self-link and links to the related data.
- `meta` — `PagingInformation`: Paging information.

## Topics

### Objects

- [GameCenterDetailBlockedPlayersLinkagesResponse.Data](gamecenterdetailblockedplayerslinkagesresponse/data-data.dictionary.md): The resource identifier for a blocked player related to a Game Center detail.

## See Also

### Objects

- [GameCenterDetailPlayer](gamecenterdetailplayer.md): A Game Center player tied to a single game, whom you can block from playing that game.
- [GameCenterDetailPlayerResponse](gamecenterdetailplayerresponse.md): The response body for endpoints that modify a Game Center player in an app’s Game Center configuration.
- [GameCenterDetailPlayerUpdateRequest](gamecenterdetailplayerupdaterequest.md): The request body you use to update a Game Center detail player.
- [GameCenterDetailPlayersResponse](gamecenterdetailplayersresponse.md): The response body for endpoints that list the blocked players for a game.
