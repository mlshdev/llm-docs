> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeversioninlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeversioninlinecreate)

# GameCenterChallengeVersionInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.3+

The data structure you use to configure a challenge version while creating a challenge.

## Declaration

```
object GameCenterChallengeVersionInlineCreate
```

## Properties

- `id` — `string`:
- `relationships` — `GameCenterChallengeVersionInlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterChallengeVersions`

## Mentioned In

- [App Store Connect API 4.3 release notes](app-store-connect-api-4-3-release-notes.md)

## Topics

### Dictionaries

- [GameCenterChallengeVersionInlineCreate.Relationships](gamecenterchallengeversioninlinecreate/relationships-data.dictionary.md)

## See Also

### Objects

- [GameCenterChallenge](gamecenterchallenge.md): The data structure that represent a challenge.
- [GameCenterChallengesResponse](gamecenterchallengesresponse.md): A response containing a list of Game Center challenges configured for an app.
- [GameCenterChallengeCreateRequest](gamecenterchallengecreaterequest.md): The request body you use to create a challenge.
- [GameCenterChallengeResponse](gamecenterchallengeresponse.md): A response containing a single Game Center challenge configuration.
- [GameCenterChallengeUpdateRequest](gamecenterchallengeupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeVersion](gamecenterchallengeversion.md): The data structure that represent a challenge version.
- [GameCenterChallengeVersionRelease](gamecenterchallengeversionrelease.md): Deprecated. The data structure that represent a challenge version release.
- [GameCenterChallengeLeaderboardV2LinkageRequest](gamecenterchallengeleaderboardv2linkagerequest.md): The data structure that represents a Game Center challenge leaderboard linkage request resource.
- [GameCenterChallengeLeaderboardLinkageRequest](gamecenterchallengeleaderboardlinkagerequest.md): Deprecated.
- [GameCenterChallengeVersionsLinkagesResponse](gamecenterchallengeversionslinkagesresponse.md)
