> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolveplayshuffledinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveplayshuffledinvocationresponse)

# PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve whether a play media intent requests a shuffled queue.

## Declaration

```
object PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse
```

## Properties

- `result` — `PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse.Result` (required): The result of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.resolvePlayShuffled`

## Topics

### Specifying a Result

- [PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse.Result](playmediaintenthandlingresolveplayshuffledinvocationresponse/result-data.dictionary.md): The result of resolving whether a play media intent shuffles the playback queue.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)
