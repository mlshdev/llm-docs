> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolveresumeplaybackinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveresumeplaybackinvocationresponse)

# PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve whether a play media intent resumes the current playback queue.

## Declaration

```
object PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse
```

## Properties

- `result` — `PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse.Result` (required): The result of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.resolveResumePlayback`

## Topics

### Specifying a Result

- [PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse.Result](playmediaintenthandlingresolveresumeplaybackinvocationresponse/result-data.dictionary.md): The result of resolving whether a play media intent resumes the current playback queue.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)
