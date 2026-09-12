> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolveresumeplaybackinvocationresponse/result-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveresumeplaybackinvocationresponse/result-data.dictionary)

# PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse.Result

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The result of resolving whether a play media intent resumes the current playback queue.

## Declaration

```
object PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse.Result
```

## Properties

- `resolutionResult` — `BooleanResolutionResult` (required): [true](https://developer.apple.com/documentation/swift/true) to resume the current playback queue, or [false](https://developer.apple.com/documentation/swift/false) to start a new playback queue.
