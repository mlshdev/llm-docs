> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterscoremoderationupdaterequest

# GameCenterScoreModerationUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The request body you use to update a Game Center score moderation.

## Declaration

```
object GameCenterScoreModerationUpdateRequest
```

## Properties

- `data` — `GameCenterScoreModerationUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [GameCenterScoreModerationUpdateRequest.Data](gamecenterscoremoderationupdaterequest/data-data.dictionary.md): The resource data for the Game Center score moderation you update.

## See Also

### Objects

- [GameCenterScoreModeration](gamecenterscoremoderation.md): A score submitted to a Game Center leaderboard that you review and choose to block or unblock.
- [GameCenterScoreModerationResponse](gamecenterscoremoderationresponse.md): The response body for endpoints that modify a single Game Center score moderation.
- [GameCenterScoreModerationsResponse](gamecenterscoremoderationsresponse.md): The response body for endpoints that list Game Center score moderations.
- [GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse](gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse.md): The response body for endpoints that list the score moderation linkages for a Game Center leaderboard.
