> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlinginvocation](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlinginvocation)

# PlayMediaIntentHandlingInvocation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A request to process a play media intent.

## Declaration

```
object PlayMediaIntentHandlingInvocation
```

## Properties

- `params` — `PlayMediaIntentHandlingInvocation.Params` (required): The parameters of this request, including the play media intent.
- `method` — `string` (required): The action for your service to take to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.resolveMediaItems`, `PlayMediaIntentHandling.resolvePlayShuffled`, `PlayMediaIntentHandling.resolvePlaybackQueueLocation`, `PlayMediaIntentHandling.resolvePlaybackRepeatMode`, `PlayMediaIntentHandling.resolveResumePlayback`, `PlayMediaIntentHandling.handle`

## Topics

### Accessing the Intent

- [PlayMediaIntentHandlingInvocation.Params](playmediaintenthandlinginvocation/params-data.dictionary.md): The parameters of a play media intent request.

## Relationships

### Inherits From

- [Invocation](invocation.md)

## See Also

### Processing a Play Media Intent

- [PlayMediaIntent](playmediaintent.md): An object that describes the user’s request to play a media item.
- [PlayMediaIntentHandlingInvocationResponse](playmediaintenthandlinginvocationresponse.md): The service’s response to a request to process a play media intent.
