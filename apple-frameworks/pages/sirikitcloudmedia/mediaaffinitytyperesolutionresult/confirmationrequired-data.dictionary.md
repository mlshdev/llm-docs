> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediaaffinitytyperesolutionresult/confirmationrequired-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/mediaaffinitytyperesolutionresult/confirmationrequired-data.dictionary)

# MediaAffinityTypeResolutionResult.ConfirmationRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to confirm the media affinity before proceeding.

## Declaration

```
object MediaAffinityTypeResolutionResult.ConfirmationRequired
```

## Properties

- `mediaAffinityTypeToConfirm` — `MediaAffinityType` (required): A media affinity for the user to confirm or reject.

## See Also

### Specifying the Result

- [MediaAffinityTypeResolutionResult.Success](success-data.dictionary.md): A media affinity that successfully matches the intent.
