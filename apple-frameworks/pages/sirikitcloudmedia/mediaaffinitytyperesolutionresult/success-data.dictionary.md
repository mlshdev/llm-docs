> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediaaffinitytyperesolutionresult/success-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/mediaaffinitytyperesolutionresult/success-data.dictionary)

# MediaAffinityTypeResolutionResult.Success

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media affinity that successfully matches the intent.

## Declaration

```
object MediaAffinityTypeResolutionResult.Success
```

## Properties

- `resolvedMediaAffinityType` — `MediaAffinityType` (required): The media affinity the user wants to associate with the media item the intent references.

## See Also

### Specifying the Result

- [MediaAffinityTypeResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media affinity before proceeding.
