> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult/disambiguation-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult/disambiguation-data.dictionary)

# AddMediaMediaDestinationResolutionResult.Disambiguation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to choose which library or playlist they want to add media items to.

## Declaration

```
object AddMediaMediaDestinationResolutionResult.Disambiguation
```

## Properties

- `mediaDestinationsToDisambiguate` — `[MediaDestination]` (required): Destinations that might match the user’s intent.

## See Also

### Clarifying a Possible Match

- [AddMediaMediaDestinationResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the library or playlist before you add media items to it.
