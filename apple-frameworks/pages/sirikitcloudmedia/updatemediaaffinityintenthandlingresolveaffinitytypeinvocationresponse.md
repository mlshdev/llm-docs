> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse

# UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request that expresses a preference or dislike for a media item.

## Declaration

```
object UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse
```

## Properties

- `result` — `UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `UpdateMediaAffinityIntentHandling.resolveAffinityType`

## Topics

### Specifying the Result

- [UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse.Result](updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse/result-data.dictionary.md): The results of resolving the media affinity in an update media affinity intent.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Discerning Like or Dislike

- [MediaAffinityType](mediaaffinitytype.md): A preference or dislike for a media item.
- [MediaAffinityTypeResolutionResult](mediaaffinitytyperesolutionresult.md): A media affinity that matches an update media affinity intent, or information about why your service can’t determine the media affinity.
