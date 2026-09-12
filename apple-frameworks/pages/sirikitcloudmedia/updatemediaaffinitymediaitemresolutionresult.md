> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult)

# UpdateMediaAffinityMediaItemResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media item that matches an update media affinity intent, or information about why your service can’t provide a media item.

## Declaration

```
object UpdateMediaAffinityMediaItemResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `UpdateMediaAffinityMediaItemResolutionResult`
- `success` — `UpdateMediaAffinityMediaItemResolutionResult.Success`: A media item that successfully matches the intent.
- `confirmationRequired` — `UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired`: A media item for the user to confirm as a match.
- `disambiguation` — `UpdateMediaAffinityMediaItemResolutionResult.Disambiguation`: Multiple media items for the user to choose from.
- `unsupported` — `UpdateMediaAffinityMediaItemResolutionResult.Unsupported`: Information about why your service can’t resolve the media item.

## Topics

### Specifying the Result

- [UpdateMediaAffinityMediaItemResolutionResult.Success](updatemediaaffinitymediaitemresolutionresult/success-data.dictionary.md): A media item that successfully matches the intent.
- [UpdateMediaAffinityMediaItemResolutionResult.Unsupported](updatemediaaffinitymediaitemresolutionresult/unsupported-data.dictionary.md): The reason your service can’t update information about the requested media item.
- [UpdateMediaAffinityMediaItemResolutionResult.Disambiguation](updatemediaaffinitymediaitemresolutionresult/disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
- [UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired](updatemediaaffinitymediaitemresolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Identifying the Intended Media Items

- [UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse](updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse.md): Your service’s response to a request to resolve media items in an update media affinity intent.
- [UpdateMediaAffinityMediaItemUnsupportedReason](updatemediaaffinitymediaitemunsupportedreason.md): Reasons the media service can’t update information about the media item.
