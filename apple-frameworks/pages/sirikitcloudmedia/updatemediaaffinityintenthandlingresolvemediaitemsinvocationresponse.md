> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse)

# UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve media items in an update media affinity intent.

## Declaration

```
object UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse
```

## Properties

- `method` — `string` (required): The results of processing the intent.
  **Allowed values:** `UpdateMediaAffinityIntentHandling.resolveMediaItems`
- `result` — `UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse.Result` (required): The action your service takes to process this intent.

## Topics

### Specifying the Result

- [UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse.Result](updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse/result-data.dictionary.md): The results of resolving the media items in an intent to update media affinity.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Identifying the Intended Media Items

- [UpdateMediaAffinityMediaItemResolutionResult](updatemediaaffinitymediaitemresolutionresult.md): A media item that matches an update media affinity intent, or information about why your service can’t provide a media item.
- [UpdateMediaAffinityMediaItemUnsupportedReason](updatemediaaffinitymediaitemunsupportedreason.md): Reasons the media service can’t update information about the media item.
