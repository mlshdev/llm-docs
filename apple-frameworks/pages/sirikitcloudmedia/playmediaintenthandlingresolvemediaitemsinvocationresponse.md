> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolvemediaitemsinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolvemediaitemsinvocationresponse)

# PlayMediaIntentHandlingResolveMediaItemsInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve media items in a play media intent.

## Declaration

```
object PlayMediaIntentHandlingResolveMediaItemsInvocationResponse
```

## Properties

- `result` — `PlayMediaIntentHandlingResolveMediaItemsInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.resolveMediaItems`

## Topics

### Specifying the Result

- [PlayMediaIntentHandlingResolveMediaItemsInvocationResponse.Result](playmediaintenthandlingresolvemediaitemsinvocationresponse/result-data.dictionary.md): The results of resolving the media items in an intent to play media.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Resolving a Media Item

- [PlayMediaMediaItemResolutionResult](playmediamediaitemresolutionresult.md): A media item that matches a play media intent, or information about why your service can’t provide a media item.
- [PlayMediaMediaItemUnsupportedReason](playmediamediaitemunsupportedreason.md): Reasons the media service can’t play the media item.
