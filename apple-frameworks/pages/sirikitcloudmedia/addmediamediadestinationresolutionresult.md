> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult)

# AddMediaMediaDestinationResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The user’s library or a specified playlist, or information about why your service can’t use the requested destination.

## Declaration

```
object AddMediaMediaDestinationResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `AddMediaMediaDestinationResolutionResult`
- `success` — `AddMediaMediaDestinationResolutionResult.Success`: The user’s library or a playlist that successfully matches the intent.
- `unsupported` — `AddMediaMediaDestinationResolutionResult.Unsupported`: Information about why your service can’t resolve the destination.
- `confirmationRequired` — `AddMediaMediaDestinationResolutionResult.ConfirmationRequired`: A destination that the user must confirm before proceeding.
- `disambiguation` — `AddMediaMediaDestinationResolutionResult.Disambiguation`: Multiple destinations for the user to choose from.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `needsValue` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Providing a Destination

- [AddMediaMediaDestinationResolutionResult.Success](addmediamediadestinationresolutionresult/success-data.dictionary.md): A media destination that successfully matches an intent.
- [MediaDestination](mediadestination.md): The user’s library or a playlist.
- [MediaDestinationLibrary](mediadestinationlibrary.md): The user’s library as a destination for an add media intent.
- [MediaDestinationPlaylist](mediadestinationplaylist.md): A playlist as a destination for an add media intent.

### Reporting a Problem

- [AddMediaMediaDestinationResolutionResult.Unsupported](addmediamediadestinationresolutionresult/unsupported-data.dictionary.md): The reason your service can’t add media items to the specified library or playlist.
- [AddMediaMediaDestinationUnsupportedReason](addmediamediadestinationunsupportedreason.md): Reasons the media service can’t add media items to a specified playlist.

### Clarifying a Possible Match

- [AddMediaMediaDestinationResolutionResult.ConfirmationRequired](addmediamediadestinationresolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the library or playlist before you add media items to it.
- [AddMediaMediaDestinationResolutionResult.Disambiguation](addmediamediadestinationresolutionresult/disambiguation-data.dictionary.md): A result that requires the user to choose which library or playlist they want to add media items to.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Identifying a Library or Playlist

- [AddMediaIntentHandlingResolveMediaDestinationInvocationResponse](addmediaintenthandlingresolvemediadestinationinvocationresponse.md): Your service’s response to a request to resolve media items in an add media intent.
