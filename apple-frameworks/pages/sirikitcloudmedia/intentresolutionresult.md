> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/intentresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/intentresolutionresult)

# IntentResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

An object that matches a parameter of an intent, or information about why your service can’t determine a value for the parameter.

## Declaration

```
object IntentResolutionResult
```

## Properties

- `class` — `string` (required): The specific type of result.
- `needsValue` — `IntentResolutionResult.NeedsValue`: The service must have a value for this parameter, but the intent doesn’t include one.
- `notRequired` — `IntentResolutionResult.NotRequired`: The intent doesn’t include a value for this parameter, but the server can proceed without one.
- `unsupported` — `IntentResolutionResult.Unsupported`: The server doesn’t support this parameter.

## Topics

### Providing a Generic Result

- [IntentResolutionResult.NeedsValue](intentresolutionresult/needsvalue-data.dictionary.md): An empty object that indicates the service must have a value for this parameter, but the intent doesn’t include one.
- [IntentResolutionResult.NotRequired](intentresolutionresult/notrequired-data.dictionary.md): An empty object that indicates the intent doesn’t include a value for this parameter, but the server can proceed without one.
- [IntentResolutionResult.Unsupported](intentresolutionresult/unsupported-data.dictionary.md): An empty object that indicates the server doesn’t support this parameter.

## Relationships

### Inherited By

- [AddMediaMediaDestinationResolutionResult](addmediamediadestinationresolutionresult.md)
- [AddMediaMediaItemResolutionResult](addmediamediaitemresolutionresult.md)
- [BooleanResolutionResult](booleanresolutionresult.md)
- [MediaAffinityTypeResolutionResult](mediaaffinitytyperesolutionresult.md)
- [PlayMediaMediaItemResolutionResult](playmediamediaitemresolutionresult.md)
- [PlaybackQueueLocationResolutionResult](playbackqueuelocationresolutionresult.md)
- [PlaybackRepeatModeResolutionResult](playbackrepeatmoderesolutionresult.md)
- [UpdateMediaAffinityMediaItemResolutionResult](updatemediaaffinitymediaitemresolutionresult.md)

## See Also

### Intents

- [Intent](intent.md): A user request for your service to fulfill.
- [IntentResponse](intentresponse.md): Your service’s response to an intent.
- [UserActivity](useractivity.md): The context for playing a media queue.
- [BooleanResolutionResult](booleanresolutionresult.md): A Boolean value that matches an intent parameter, or information about why your service can’t determine the value.
