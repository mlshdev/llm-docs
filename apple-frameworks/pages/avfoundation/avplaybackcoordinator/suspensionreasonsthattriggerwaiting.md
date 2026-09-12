> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/suspensionreasonsthattriggerwaiting](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/suspensionreasonsthattriggerwaiting)

# suspensionReasonsThatTriggerWaiting (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reasons that cause a coordinator to suspend playback.

## Declaration

```swift
var suspensionReasonsThatTriggerWaiting: [AVCoordinatedPlaybackSuspension.Reason] { get set }
```

## See Also

### Configuring playback policies

- [participantLimitForWaitingOutSuspensions(withReason:)](participantlimitforwaitingoutsuspensions%28withreason_%29.md): Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [setParticipantLimit(\_:forWaitingOutSuspensionsWithReason:)](setparticipantlimit%28__forwaitingoutsuspensionswithreason_%29.md): Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [pauseSnapsToMediaTimeOfOriginator](pausesnapstomediatimeoforiginator.md): A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.

# suspensionReasonsThatTriggerWaiting (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reasons that cause a coordinator to suspend playback.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * suspensionReasonsThatTriggerWaiting;
```

## See Also

### Configuring playback policies

- [participantLimitForWaitingOutSuspensionsWithReason:](participantlimitforwaitingoutsuspensions%28withreason_%29.md): Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [setParticipantLimit:forWaitingOutSuspensionsWithReason:](setparticipantlimit%28__forwaitingoutsuspensionswithreason_%29.md): Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [pauseSnapsToMediaTimeOfOriginator](pausesnapstomediatimeoforiginator.md): A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.
