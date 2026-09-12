> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintenthandlingresolvemediaitemsinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintenthandlingresolvemediaitemsinvocationresponse)

# AddMediaIntentHandlingResolveMediaItemsInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve media items in an update media affinity intent.

## Declaration

```
object AddMediaIntentHandlingResolveMediaItemsInvocationResponse
```

## Properties

- `result` — `AddMediaIntentHandlingResolveMediaItemsInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `AddMediaIntentHandling.resolveMediaItems`

## Topics

### Providing the Result

- [AddMediaIntentHandlingResolveMediaItemsInvocationResponse.Result](addmediaintenthandlingresolvemediaitemsinvocationresponse/result-data.dictionary.md): The result of attempting to identify the media items to add to the user’s library or to a playlist.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Identifying a Media Item

- [AddMediaMediaItemResolutionResult](addmediamediaitemresolutionresult.md): A media item that matches an add media intent, or information about why your service can’t provide a media item.
