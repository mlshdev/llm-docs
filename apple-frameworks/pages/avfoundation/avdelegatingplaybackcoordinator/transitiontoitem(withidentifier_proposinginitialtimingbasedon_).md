> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinator/transitiontoitem(withidentifier:proposinginitialtimingbasedon:)](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/transitiontoitem(withidentifier:proposinginitialtimingbasedon:))

# transitionToItem(withIdentifier:proposingInitialTimingBasedOn:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the coordinator to transition to a new item.

## Declaration

```swift
func transitionToItem(withIdentifier itemIdentifier: String?, proposingInitialTimingBasedOn snapshotTimebase: CMTimebase?)
```

## Parameters

- `itemIdentifier`: The identifier for the new current item, which is `nil` if there isn’t anything to play.
- `snapshotTimebase`: A time base that communicates the initial playback state of the new item. If you specify `nil`, the coordinator assumes that the player pauses at [zero](../../coremedia/cmtime/zero.md).

  You can retrieve an appropriate time base to pass for this value from AVFoundation playback objects like [AVSampleBufferRenderSynchronizer](../avsamplebufferrendersynchronizer.md). You can also create one manually using the [CMTimebaseCreateWithSourceClock(allocator:sourceClock:timebaseOut:)](../../coremedia/cmtimebasecreatewithsourceclock%28allocator_sourceclock_timebaseout_%29.md) function.

## See Also

### Coordinating state changes

- [coordinateRateChange(to:options:)](coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeek(to:options:)](coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [reapplyCurrentItemStateToPlaybackControlDelegate()](reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](../avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](../avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.

# transitionToItemWithIdentifier:proposingInitialTimingBasedOnTimebase: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the coordinator to transition to a new item.

## Declaration

```objectivec
- (void) transitionToItemWithIdentifier:(NSString *) itemIdentifier proposingInitialTimingBasedOnTimebase:(CMTimebaseRef) snapshotTimebase;
```

## Parameters

- `itemIdentifier`: The identifier for the new current item, which is `nil` if there isn’t anything to play.
- `snapshotTimebase`: A time base that communicates the initial playback state of the new item. If you specify `nil`, the coordinator assumes that the player pauses at [kCMTimeZero](../../coremedia/cmtime/zero.md).

  You can retrieve an appropriate time base to pass for this value from AVFoundation playback objects like [AVSampleBufferRenderSynchronizer](../avsamplebufferrendersynchronizer.md). You can also create one manually using the [CMTimebaseCreateWithSourceClock](../../coremedia/cmtimebasecreatewithsourceclock%28allocator_sourceclock_timebaseout_%29.md) function.

## See Also

### Coordinating state changes

- [coordinateRateChangeToRate:options:](coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeekToTime:options:](coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [reapplyCurrentItemStateToPlaybackControlDelegate](reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](../avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](../avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.
