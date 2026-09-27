> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterscoremoderationsresponse

# GameCenterScoreModerationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that list Game Center score moderations.

## Declaration

```
object GameCenterScoreModerationsResponse
```

## Properties

- `data` — `[GameCenterScoreModeration]` (required): The resource data. Contains an array of [GameCenterScoreModeration](gamecenterscoremoderation.md) resources.
- `included` — `[GameCenterDetailPlayer]`: The requested relationship data. Contains an array of [GameCenterDetailPlayer](gamecenterdetailplayer.md) resources.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Objects

- [GameCenterScoreModeration](gamecenterscoremoderation.md): A score submitted to a Game Center leaderboard that you review and choose to block or unblock.
- [GameCenterScoreModerationResponse](gamecenterscoremoderationresponse.md): The response body for endpoints that modify a single Game Center score moderation.
- [GameCenterScoreModerationUpdateRequest](gamecenterscoremoderationupdaterequest.md): The request body you use to update a Game Center score moderation.
- [GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse](gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse.md): The response body for endpoints that list the score moderation linkages for a Game Center leaderboard.
