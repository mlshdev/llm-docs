> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterplayerachievementsubmission](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterplayerachievementsubmission)

# GameCenterPlayerAchievementSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.2+

A batch operation submitting achievement completions for a specific player in Game Center.

## Declaration

```
object GameCenterPlayerAchievementSubmission
```

## Properties

- `attributes` — `GameCenterPlayerAchievementSubmission.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `gameCenterPlayerAchievementSubmissions`

## Topics

### Objects

- [GameCenterPlayerAchievementSubmission.Attributes](gamecenterplayerachievementsubmission/attributes-data.dictionary.md): Attributes that describe a player resource.

## See Also

### Objects

- [GameCenterPlayerAchievementSubmissionCreateRequest](gamecenterplayerachievementsubmissioncreaterequest.md): The request body you use to create a Game Center player achievement.
- [GameCenterPlayerAchievementSubmissionResponse](gamecenterplayerachievementsubmissionresponse.md): A response confirming a Game Center player achievement submission was processed.
