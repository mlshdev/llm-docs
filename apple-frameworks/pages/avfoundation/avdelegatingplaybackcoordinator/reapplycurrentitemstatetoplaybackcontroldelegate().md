> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate()](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate())

# reapplyCurrentItemStateToPlaybackControlDelegate() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.

## Declaration

```swift
func reapplyCurrentItemStateToPlaybackControlDelegate()
```

## See Also

### Coordinating state changes

- [coordinateRateChange(to:options:)](coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeek(to:options:)](coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [transitionToItem(withIdentifier:proposingInitialTimingBasedOn:)](transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [AVDelegatingPlaybackCoordinatorSeekOptions](../avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](../avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.

# reapplyCurrentItemStateToPlaybackControlDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.

## Declaration

```objectivec
- (void) reapplyCurrentItemStateToPlaybackControlDelegate;
```

## See Also

### Coordinating state changes

- [coordinateRateChangeToRate:options:](coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeekToTime:options:](coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [transitionToItemWithIdentifier:proposingInitialTimingBasedOnTimebase:](transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [AVDelegatingPlaybackCoordinatorSeekOptions](../avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](../avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.
