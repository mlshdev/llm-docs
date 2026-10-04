> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterscoremoderationresponse

# GameCenterScoreModerationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that modify a single Game Center score moderation.

## Declaration

```
object GameCenterScoreModerationResponse
```

## Properties

- `data` — `GameCenterScoreModeration` (required): The resource data. Contains a single [GameCenterScoreModeration](gamecenterscoremoderation.md) resource.
- `included` — `[GameCenterDetailPlayer]`: The requested relationship data. Contains an array of [GameCenterDetailPlayer](gamecenterdetailplayer.md) resources.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

<a id="overview"></a>

## Overview

The [Modify a Game Center Score Moderation](patch-v1-gamecenterscoremoderations-_id_.md) endpoint returns this response.

## See Also

### Objects

- [GameCenterScoreModeration](gamecenterscoremoderation.md): A score submitted to a Game Center leaderboard that you review and choose to block or unblock.
- [GameCenterScoreModerationUpdateRequest](gamecenterscoremoderationupdaterequest.md): The request body you use to update a Game Center score moderation.
- [GameCenterScoreModerationsResponse](gamecenterscoremoderationsresponse.md): The response body for endpoints that list Game Center score moderations.
- [GameCenterLeaderboardV2GameCenterScoreModerationsLinkagesResponse](gamecenterleaderboardv2gamecenterscoremoderationslinkagesresponse.md): The response body for endpoints that list the score moderation linkages for a Game Center leaderboard.
