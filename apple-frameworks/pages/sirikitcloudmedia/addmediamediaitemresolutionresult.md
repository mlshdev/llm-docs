> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediaitemresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediaitemresolutionresult)

# AddMediaMediaItemResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media item that matches an add media intent, or information about why your service can’t provide a media item.

## Declaration

```
object AddMediaMediaItemResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `AddMediaMediaItemResolutionResult`
- `success` — `AddMediaMediaItemResolutionResult.Success`: A media item that successfully matches the intent.
- `confirmationRequired` — `AddMediaMediaItemResolutionResult.ConfirmationRequired`: A media item for the user to confirm.
- `disambiguation` — `AddMediaMediaItemResolutionResult.Disambiguation`: Multiple media items for the user to choose from.
- `unsupported` — `AddMediaMediaItemResolutionResult.Unsupported`: Information about why your service can’t resolve the media item.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `needsValue` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Providing a Media Item

- [AddMediaMediaItemResolutionResult.Success](addmediamediaitemresolutionresult/success-data.dictionary.md): A media item that successfully matches the intent.

### Reporting a Problem

- [AddMediaMediaItemResolutionResult.Unsupported](addmediamediaitemresolutionresult/unsupported-data.dictionary.md): The reason your service can’t add the media item to the user’s library or to a playlist.
- [AddMediaMediaItemUnsupportedReason](addmediamediaitemunsupportedreason.md): Reasons the media service can’t add the media item to the user’s library or to a playlist.

### Clarifying a Possible Match

- [AddMediaMediaItemResolutionResult.ConfirmationRequired](addmediamediaitemresolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before you add it to their library or to a playlist.
- [AddMediaMediaItemResolutionResult.Disambiguation](addmediamediaitemresolutionresult/disambiguation-data.dictionary.md): A result that requires the user to choose which media item they want to add to their library or to a playlist.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Identifying a Media Item

- [AddMediaIntentHandlingResolveMediaItemsInvocationResponse](addmediaintenthandlingresolvemediaitemsinvocationresponse.md): Your service’s response to a request to resolve media items in an update media affinity intent.
