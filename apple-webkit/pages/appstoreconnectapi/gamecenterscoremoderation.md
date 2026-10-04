> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterscoremoderation

# GameCenterScoreModeration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A score submitted to a Game Center leaderboard that you review and choose to block or unblock.

## Declaration

```
object GameCenterScoreModeration
```

## Properties

- `attributes` — `GameCenterScoreModeration.Attributes`: The resource’s attributes.
- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `GameCenterScoreModeration.Relationships`: The relationships between this resource and other resources.
- `type` — `string` (required): The resource type.
  **Allowed values:** `gameCenterScoreModerations`

## Topics

### Objects

- [GameCenterScoreModeration.Attributes](gamecenterscoremoderation/attributes-data.dictionary.md): The attributes that describe a Game Center score moderation.
- [GameCenterScoreModeration.Relationships](gamecenterscoremoderation/relationships-data.dictionary.md): The relationships between a Game Center score moderation and other resources.

## See Also

### Objects

- [GameCenterScoreModerationResponse](gamecenterscoremoderationresponse.md): The response body for endpoints that modify a single Game Center score moderation.
- [GameCenterScoreModerationUpdateRequest](gamecenterscoremoderationupdaterequest.md): The request body you use to update a Game Center score moderation.
- [GameCenterScoreModerationsResponse](gamecenterscoremoderationsresponse.md): The response body for endpoints that list Game Center score moderations.
- [GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse](gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse.md): The response body for endpoints that list the score moderation linkages for a Game Center leaderboard.
