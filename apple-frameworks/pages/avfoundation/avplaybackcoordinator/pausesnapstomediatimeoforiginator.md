> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/pausesnapstomediatimeoforiginator](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/pausesnapstomediatimeoforiginator)

# pauseSnapsToMediaTimeOfOriginator (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.

## Declaration

```swift
var pauseSnapsToMediaTimeOfOriginator: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), all participants seek to the originator’s stop time after they pause. Use this setting if it counteracts network delays that result from communicating the originator’s pause state to the other participants.

If this value is [false](https://developer.apple.com/documentation/swift/false), it’s acceptable for participants to stop at slightly different times, and a pause doesn’t cause the time of other participants to jump back.

## See Also

### Configuring playback policies

- [participantLimitForWaitingOutSuspensions(withReason:)](participantlimitforwaitingoutsuspensions%28withreason_%29.md): Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [setParticipantLimit(\_:forWaitingOutSuspensionsWithReason:)](setparticipantlimit%28__forwaitingoutsuspensionswithreason_%29.md): Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md): The reasons that cause a coordinator to suspend playback.

# pauseSnapsToMediaTimeOfOriginator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL pauseSnapsToMediaTimeOfOriginator;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), all participants seek to the originator’s stop time after they pause. Use this setting if it counteracts network delays that result from communicating the originator’s pause state to the other participants.

If this value is [false](https://developer.apple.com/documentation/swift/false), it’s acceptable for participants to stop at slightly different times, and a pause doesn’t cause the time of other participants to jump back.

## See Also

### Configuring playback policies

- [participantLimitForWaitingOutSuspensionsWithReason:](participantlimitforwaitingoutsuspensions%28withreason_%29.md): Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [setParticipantLimit:forWaitingOutSuspensionsWithReason:](setparticipantlimit%28__forwaitingoutsuspensionswithreason_%29.md): Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md): The reasons that cause a coordinator to suspend playback.
