> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse

# GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that list the score moderation linkages for a Game Center leaderboard.

## Declaration

```
object GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse
```

## Properties

- `data` — `[GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse.Data]` (required): The resource identifiers for the related score moderations.
- `links` — `PagedDocumentLinks` (required): Navigational links including the self-link and links to the related data.
- `meta` — `PagingInformation`: Paging information.

## Topics

### Dictionaries

- [GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse.Data](gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse/data-data.dictionary.md): The resource identifier for a related score moderation.

## See Also

### Objects

- [GameCenterScoreModeration](gamecenterscoremoderation.md): A score submitted to a Game Center leaderboard that you review and choose to block or unblock.
- [GameCenterScoreModerationResponse](gamecenterscoremoderationresponse.md): The response body for endpoints that modify a single Game Center score moderation.
- [GameCenterScoreModerationUpdateRequest](gamecenterscoremoderationupdaterequest.md): The request body you use to update a Game Center score moderation.
- [GameCenterScoreModerationsResponse](gamecenterscoremoderationsresponse.md): The response body for endpoints that list Game Center score moderations.
