> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolveplayshuffledinvocationresponse/result-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveplayshuffledinvocationresponse/result-data.dictionary)

# PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse.Result

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The result of resolving whether a play media intent shuffles the playback queue.

## Declaration

```
object PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse.Result
```

## Properties

- `resolutionResult` — `BooleanResolutionResult` (required): [true](https://developer.apple.com/documentation/swift/true) to shuffle the playback queue, or [false](https://developer.apple.com/documentation/swift/false) to preserve the default order.
