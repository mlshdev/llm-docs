> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse/result-data.dictionary

# UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse.Result

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The results of resolving the media affinity in an update media affinity intent.

## Declaration

```
object UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse.Result
```

## Properties

- `resolutionResult` — `MediaAffinityTypeResolutionResult` (required): The media affinity that the intent contains, or a reason your service can’t resolve the media affinity.
