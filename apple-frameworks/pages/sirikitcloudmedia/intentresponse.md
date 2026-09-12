> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/intentresponse](https://developer.apple.com/documentation/sirikitcloudmedia/intentresponse)

# IntentResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to an intent.

## Declaration

```
object IntentResponse
```

## Properties

- `class` — `string` (required): The specific type of response.
- `userActivity` — `UserActivity` (required): A description of the interaction in progress.

## Relationships

### Inherited By

- [AddMediaIntentResponse](addmediaintentresponse.md)
- [PlayMediaIntentResponse](playmediaintentresponse.md)
- [UpdateMediaAffinityIntentResponse](updatemediaaffinityintentresponse.md)

## See Also

### Intents

- [Intent](intent.md): A user request for your service to fulfill.
- [UserActivity](useractivity.md): The context for playing a media queue.
- [IntentResolutionResult](intentresolutionresult.md): An object that matches a parameter of an intent, or information about why your service can’t determine a value for the parameter.
- [BooleanResolutionResult](booleanresolutionresult.md): A Boolean value that matches an intent parameter, or information about why your service can’t determine the value.
