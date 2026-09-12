> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult/confirmationrequired-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult/confirmationrequired-data.dictionary)

# AddMediaMediaDestinationResolutionResult.ConfirmationRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to confirm the library or playlist before you add media items to it.

## Declaration

```
object AddMediaMediaDestinationResolutionResult.ConfirmationRequired
```

## Properties

- `mediaDestinationToConfirm` — `MediaDestination` (required): A library or playlist for the user to confirm or reject.

## See Also

### Clarifying a Possible Match

- [AddMediaMediaDestinationResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose which library or playlist they want to add media items to.
