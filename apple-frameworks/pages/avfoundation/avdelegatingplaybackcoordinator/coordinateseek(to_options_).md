> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinator/coordinateseek(to:options:)](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/coordinateseek(to:options:))

# coordinateSeek(to:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Coordinates a seek to the specified time for all connected participants.

## Declaration

```swift
func coordinateSeek(to time: CMTime, options: AVDelegatingPlaybackCoordinatorSeekOptions = [])
```

## Parameters

- `time`: A time the group seeks to when the command ends.
- `options`: Additional configuration of the seek.

<a id="Discussion"></a>

## Discussion

To end a suspension and also affect the group timing, see [end(proposingNewTime:)](../avcoordinatedplaybacksuspension/end%28proposingnewtime_%29.md).

> **Note**

>  Calling this method while the coordinator is in a suspended state affects only the local playback object. It doesn’t affect group state, even after the suspension ends.

## See Also

### Coordinating state changes

- [coordinateRateChange(to:options:)](coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [transitionToItem(withIdentifier:proposingInitialTimingBasedOn:)](transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [reapplyCurrentItemStateToPlaybackControlDelegate()](reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](../avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](../avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.

# coordinateSeekToTime:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Coordinates a seek to the specified time for all connected participants.

## Declaration

```objectivec
- (void) coordinateSeekToTime:(CMTime) time options:(AVDelegatingPlaybackCoordinatorSeekOptions) options;
```

## Parameters

- `time`: A time the group seeks to when the command ends.
- `options`: Additional configuration of the seek.

<a id="Discussion"></a>

## Discussion

To end a suspension and also affect the group timing, see [endProposingNewTime:](../avcoordinatedplaybacksuspension/end%28proposingnewtime_%29.md).

> **Note**

>  Calling this method while the coordinator is in a suspended state affects only the local playback object. It doesn’t affect group state, even after the suspension ends.

## See Also

### Coordinating state changes

- [coordinateRateChangeToRate:options:](coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [transitionToItemWithIdentifier:proposingInitialTimingBasedOnTimebase:](transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [reapplyCurrentItemStateToPlaybackControlDelegate](reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](../avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](../avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.
