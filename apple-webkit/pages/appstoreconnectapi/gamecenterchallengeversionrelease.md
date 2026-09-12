> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeversionrelease](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeversionrelease)

# GameCenterChallengeVersionRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The data structure that represent a challenge version release.

## Declaration

```
object GameCenterChallengeVersionRelease
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterChallengeVersionRelease.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterChallengeVersionReleases`

## Topics

### Dictionaries

- [GameCenterChallengeVersionRelease.Relationships](gamecenterchallengeversionrelease/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterChallenge](gamecenterchallenge.md): The data structure that represent a challenge.
- [GameCenterChallengesResponse](gamecenterchallengesresponse.md): A response containing a list of Game Center challenges configured for an app.
- [GameCenterChallengeCreateRequest](gamecenterchallengecreaterequest.md): The request body you use to create a challenge.
- [GameCenterChallengeResponse](gamecenterchallengeresponse.md): A response containing a single Game Center challenge configuration.
- [GameCenterChallengeUpdateRequest](gamecenterchallengeupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeVersion](gamecenterchallengeversion.md): The data structure that represent a challenge version.
- [GameCenterChallengeVersionInlineCreate](gamecenterchallengeversioninlinecreate.md): The data structure you use to configure a challenge version while creating a challenge.
- [GameCenterChallengeLeaderboardV2LinkageRequest](gamecenterchallengeleaderboardv2linkagerequest.md): The data structure that represents a Game Center challenge leaderboard linkage request resource.
- [GameCenterChallengeLeaderboardLinkageRequest](gamecenterchallengeleaderboardlinkagerequest.md): Deprecated.
- [GameCenterChallengeVersionsLinkagesResponse](gamecenterchallengeversionslinkagesresponse.md)
