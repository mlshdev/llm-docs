> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/useractivity](https://developer.apple.com/documentation/sirikitcloudmedia/useractivity)

# UserActivity

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The context for playing a media queue.

## Declaration

```
object UserActivity
```

## Properties

- `activityType` — `string` (required): A reverse-DNS string that uniquely identifies the activity. Provide the same activity types your app specifies in [NSUserActivity](../foundation/nsuseractivity.md) objects.
  **Maximum length:** `250`
- `persistentIdentifier` — `string`: An identifier for this activity.
  **Maximum length:** `250`
- `title` — `string`: A short description of this activity for logging or debugging purposes.
  **Maximum length:** `250`
- `userInfo` — `UserActivity.UserActivityUserInfo`: Additional data your service needs to fulfill requests to [Get a Media Queue](playmedia-1onzj.md).
- `version` — `string` (required): The version of the `SiriKitMediaAPI` library this activity conforms to.
  **Maximum length:** `25`  
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`

<a id="Discussion"></a>

## Discussion

Create a `UserActivity` and provide it in your response to a [Process a Play Media Intent](playmedia-1g2o9.md). When the client receives your response, it includes this activity in its request to [Get a Media Queue](playmedia-1onzj.md) to define the queue it’s requesting.

## Topics

### Maintaining State

- [UserActivity.UserActivityUserInfo](useractivity/useractivityuserinfo.md): A dictionary that contains service-specific state information necessary to continue an activity in a separate request.

## See Also

### Intents

- [Intent](intent.md): A user request for your service to fulfill.
- [IntentResponse](intentresponse.md): Your service’s response to an intent.
- [IntentResolutionResult](intentresolutionresult.md): An object that matches a parameter of an intent, or information about why your service can’t determine a value for the parameter.
- [BooleanResolutionResult](booleanresolutionresult.md): A Boolean value that matches an intent parameter, or information about why your service can’t determine the value.
