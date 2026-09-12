> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallenge](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallenge)

# GameCenterChallenge

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The data structure that represent a challenge.

## Declaration

```
object GameCenterChallenge
```

## Properties

- `attributes` — `GameCenterChallenge.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterChallenge.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterChallenges`

## Topics

### Dictionaries

- [GameCenterChallenge.Attributes](gamecenterchallenge/attributes-data.dictionary.md): Attributes that describe a challenge resource.
- [GameCenterChallenge.Relationships](gamecenterchallenge/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterChallengesResponse](gamecenterchallengesresponse.md): A response containing a list of Game Center challenges configured for an app.
- [GameCenterChallengeCreateRequest](gamecenterchallengecreaterequest.md): The request body you use to create a challenge.
- [GameCenterChallengeResponse](gamecenterchallengeresponse.md): A response containing a single Game Center challenge configuration.
- [GameCenterChallengeUpdateRequest](gamecenterchallengeupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeVersion](gamecenterchallengeversion.md): The data structure that represent a challenge version.
- [GameCenterChallengeVersionInlineCreate](gamecenterchallengeversioninlinecreate.md): The data structure you use to configure a challenge version while creating a challenge.
- [GameCenterChallengeVersionRelease](gamecenterchallengeversionrelease.md): Deprecated. The data structure that represent a challenge version release.
- [GameCenterChallengeLeaderboardV2LinkageRequest](gamecenterchallengeleaderboardv2linkagerequest.md): The data structure that represents a Game Center challenge leaderboard linkage request resource.
- [GameCenterChallengeLeaderboardLinkageRequest](gamecenterchallengeleaderboardlinkagerequest.md): Deprecated.
- [GameCenterChallengeVersionsLinkagesResponse](gamecenterchallengeversionslinkagesresponse.md)
