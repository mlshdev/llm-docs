> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/intent](https://developer.apple.com/documentation/sirikitcloudmedia/intent)

# Intent

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A user request for your service to fulfill.

## Declaration

```
object Intent
```

## Properties

- `class` — `string` (required): The specific type of intent.
- `identifier` — `string` (required): The unique identifier for this intent object.

## Relationships

### Inherited By

- [AddMediaIntent](addmediaintent.md)
- [PlayMediaIntent](playmediaintent.md)
- [UpdateMediaAffinityIntent](updatemediaaffinityintent.md)

## See Also

### Intents

- [IntentResponse](intentresponse.md): Your service’s response to an intent.
- [UserActivity](useractivity.md): The context for playing a media queue.
- [IntentResolutionResult](intentresolutionresult.md): An object that matches a parameter of an intent, or information about why your service can’t determine a value for the parameter.
- [BooleanResolutionResult](booleanresolutionresult.md): A Boolean value that matches an intent parameter, or information about why your service can’t determine the value.
