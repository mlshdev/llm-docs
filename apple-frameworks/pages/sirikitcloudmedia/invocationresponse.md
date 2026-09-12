> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/invocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/invocationresponse)

# InvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Properties to include in responses from all intent endpoints.

## Declaration

```
object InvocationResponse
```

## Properties

- `result` — `InvocationResponse.Result` (required): The outcome of handling the intent.
- `method` — `string` (required): The action your service takes to process this intent.
- `metrics` — `ExecutionMetrics`: Performance details about processing the request.
- `debug` — `ServiceDebugReference`: A URI for additional data about this request. Only include this property in debugging or staging environments, not in production.
  **Maximum length:** `2000`

## Topics

### Providing a Result

- [InvocationResponse.Result](invocationresponse/result-data.dictionary.md): The outcome of handling an intent.

### Instrumenting Your Service

- [ExecutionMetrics](executionmetrics.md): Timing information to isolate service performance from network delays.
- [ServiceDebugReference](servicedebugreference.md): A URI that references debugging information for a request.

## Relationships

### Inherited By

- [AddMediaIntentHandlingConfirmInvocationResponse](addmediaintenthandlingconfirminvocationresponse.md)
- [AddMediaIntentHandlingHandleInvocationResponse](addmediaintenthandlinghandleinvocationresponse.md)
- [AddMediaIntentHandlingResolveMediaDestinationInvocationResponse](addmediaintenthandlingresolvemediadestinationinvocationresponse.md)
- [AddMediaIntentHandlingResolveMediaItemsInvocationResponse](addmediaintenthandlingresolvemediaitemsinvocationresponse.md)
- [PlayMediaIntentHandlingHandleInvocationResponse](playmediaintenthandlinghandleinvocationresponse.md)
- [PlayMediaIntentHandlingResolveMediaItemsInvocationResponse](playmediaintenthandlingresolvemediaitemsinvocationresponse.md)
- [PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse](playmediaintenthandlingresolveplayshuffledinvocationresponse.md)
- [PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse](playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse.md)
- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse.md)
- [PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse](playmediaintenthandlingresolveresumeplaybackinvocationresponse.md)
- [ProtocolExceptionInvocationResponse](protocolexceptioninvocationresponse.md)
- [UpdateMediaAffinityIntentHandlingHandleInvocationResponse](updatemediaaffinityintenthandlinghandleinvocationresponse.md)
- [UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse](updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse.md)
- [UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse](updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse.md)

## See Also

### Requests

- [Invocation](invocation.md): Properties that clients include in requests to all intent endpoints.
- [Session](session.md): Information the client provides about a sequence of requests and responses to process an intent.
- [Constraints](constraints.md): Client-originated limitations on how to process a request, such as including explicit content and how much content the client device can receive in a response.
- [PlayerContext](playercontext.md): Information about the current playback content.
