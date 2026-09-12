> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardentrysubmission](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardentrysubmission)

# GameCenterLeaderboardEntrySubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.2+

A player’s score submission to a Game Center leaderboard, including the score value and context.

## Declaration

```
object GameCenterLeaderboardEntrySubmission
```

## Properties

- `attributes` — `GameCenterLeaderboardEntrySubmission.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `gameCenterLeaderboardEntrySubmissions`

## Topics

### Objects

- [GameCenterLeaderboardEntrySubmission.Attributes](gamecenterleaderboardentrysubmission/attributes-data.dictionary.md): Attributes that describe a leaderboard resource.

## See Also

### Objects

- [GameCenterLeaderboardEntrySubmissionCreateRequest](gamecenterleaderboardentrysubmissioncreaterequest.md): The request body you use to create a Game Center leaderboard entry submission.
- [GameCenterLeaderboardEntrySubmissionResponse](gamecenterleaderboardentrysubmissionresponse.md): A response confirming a player’s score submission to a Game Center leaderboard.
