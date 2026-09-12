> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintenthandlingresolvemediadestinationinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintenthandlingresolvemediadestinationinvocationresponse)

# AddMediaIntentHandlingResolveMediaDestinationInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve media items in an add media intent.

## Declaration

```
object AddMediaIntentHandlingResolveMediaDestinationInvocationResponse
```

## Properties

- `result` — `AddMediaIntentHandlingResolveMediaDestinationInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `AddMediaIntentHandling.resolveMediaDestination`

## Topics

### Specifying the Result

- [AddMediaIntentHandlingResolveMediaDestinationInvocationResponse.Result](addmediaintenthandlingresolvemediadestinationinvocationresponse/result-data.dictionary.md): The result of attempting to modify the user’s library or a playlist.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Identifying a Library or Playlist

- [AddMediaMediaDestinationResolutionResult](addmediamediadestinationresolutionresult.md): The user’s library or a specified playlist, or information about why your service can’t use the requested destination.
