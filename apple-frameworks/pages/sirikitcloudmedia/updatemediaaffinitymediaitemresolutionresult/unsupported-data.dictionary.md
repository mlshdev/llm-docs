> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult/unsupported-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult/unsupported-data.dictionary)

# UpdateMediaAffinityMediaItemResolutionResult.Unsupported

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The reason your service can’t update information about the requested media item.

## Declaration

```
object UpdateMediaAffinityMediaItemResolutionResult.Unsupported
```

## Properties

- `reason` — `UpdateMediaAffinityMediaItemUnsupportedReason`: The reason your service can’t update information about the media item.

## See Also

### Specifying the Result

- [UpdateMediaAffinityMediaItemResolutionResult.Success](success-data.dictionary.md): A media item that successfully matches the intent.
- [UpdateMediaAffinityMediaItemResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
- [UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.
