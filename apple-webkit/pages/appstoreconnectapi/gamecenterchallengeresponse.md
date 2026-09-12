> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeresponse)

# GameCenterChallengeResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single Game Center challenge configuration.

## Declaration

```
object GameCenterChallengeResponse
```

## Properties

- `data` — `GameCenterChallenge` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterChallengeVersion`, `GameCenterDetail`, `GameCenterGroup`, `GameCenterLeaderboard`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterChallenge](gamecenterchallenge.md): The data structure that represent a challenge.
- [GameCenterChallengesResponse](gamecenterchallengesresponse.md): A response containing a list of Game Center challenges configured for an app.
- [GameCenterChallengeCreateRequest](gamecenterchallengecreaterequest.md): The request body you use to create a challenge.
- [GameCenterChallengeUpdateRequest](gamecenterchallengeupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeVersion](gamecenterchallengeversion.md): The data structure that represent a challenge version.
- [GameCenterChallengeVersionInlineCreate](gamecenterchallengeversioninlinecreate.md): The data structure you use to configure a challenge version while creating a challenge.
- [GameCenterChallengeVersionRelease](gamecenterchallengeversionrelease.md): Deprecated. The data structure that represent a challenge version release.
- [GameCenterChallengeLeaderboardV2LinkageRequest](gamecenterchallengeleaderboardv2linkagerequest.md): The data structure that represents a Game Center challenge leaderboard linkage request resource.
- [GameCenterChallengeLeaderboardLinkageRequest](gamecenterchallengeleaderboardlinkagerequest.md): Deprecated.
- [GameCenterChallengeVersionsLinkagesResponse](gamecenterchallengeversionslinkagesresponse.md)
