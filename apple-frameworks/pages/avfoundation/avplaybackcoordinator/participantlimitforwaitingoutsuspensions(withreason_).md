> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/participantlimitforwaitingoutsuspensions(withreason:)](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/participantlimitforwaitingoutsuspensions(withreason:))

# participantLimitForWaitingOutSuspensions(withReason:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.

## Declaration

```swift
func participantLimitForWaitingOutSuspensions(withReason reason: AVCoordinatedPlaybackSuspension.Reason) -> Int
```

## Parameters

- `reason`: The suspension reason to find a participant limit for.

<a id="return-value"></a>

## Return Value

The participant limit.

## See Also

### Configuring playback policies

- [setParticipantLimit(\_:forWaitingOutSuspensionsWithReason:)](setparticipantlimit%28__forwaitingoutsuspensionswithreason_%29.md): Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md): The reasons that cause a coordinator to suspend playback.
- [pauseSnapsToMediaTimeOfOriginator](pausesnapstomediatimeoforiginator.md): A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.

# participantLimitForWaitingOutSuspensionsWithReason: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.

## Declaration

```objectivec
- (NSInteger) participantLimitForWaitingOutSuspensionsWithReason:(AVCoordinatedPlaybackSuspensionReason) reason;
```

## Parameters

- `reason`: The suspension reason to find a participant limit for.

<a id="return-value"></a>

## Return Value

The participant limit.

## See Also

### Configuring playback policies

- [setParticipantLimit:forWaitingOutSuspensionsWithReason:](setparticipantlimit%28__forwaitingoutsuspensionswithreason_%29.md): Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md): The reasons that cause a coordinator to suspend playback.
- [pauseSnapsToMediaTimeOfOriginator](pausesnapstomediatimeoforiginator.md): A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.
