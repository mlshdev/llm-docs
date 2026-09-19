> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveresumeplaybackinvocationresponse/result-data.dictionary

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
