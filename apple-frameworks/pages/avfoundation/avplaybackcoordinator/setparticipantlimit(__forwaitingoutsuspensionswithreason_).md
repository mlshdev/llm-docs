> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/setparticipantlimit(_:forwaitingoutsuspensionswithreason:)](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/setparticipantlimit(_:forwaitingoutsuspensionswithreason:))

# setParticipantLimit(\_:forWaitingOutSuspensionsWithReason:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.

## Declaration

```swift
func setParticipantLimit(_ participantLimit: Int, forWaitingOutSuspensionsWithReason reason: AVCoordinatedPlaybackSuspension.Reason)
```

## Parameters

- `participantLimit`: The number of participants.
- `reason`: The suspension reason to set a limit for.

<a id="Discussion"></a>

## Discussion

This method provides additional configuration of the values your app sets for the [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md) property. When a coordinator decides whether one participant’s suspensions cause others to wait, it also considers any participant limits that you set on the group.

## See Also

### Configuring playback policies

- [participantLimitForWaitingOutSuspensions(withReason:)](participantlimitforwaitingoutsuspensions%28withreason_%29.md): Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md): The reasons that cause a coordinator to suspend playback.
- [pauseSnapsToMediaTimeOfOriginator](pausesnapstomediatimeoforiginator.md): A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.

# setParticipantLimit:forWaitingOutSuspensionsWithReason: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Sets a limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.

## Declaration

```objectivec
- (void) setParticipantLimit:(NSInteger) participantLimit forWaitingOutSuspensionsWithReason:(AVCoordinatedPlaybackSuspensionReason) reason;
```

## Parameters

- `participantLimit`: The number of participants.
- `reason`: The suspension reason to set a limit for.

<a id="Discussion"></a>

## Discussion

This method provides additional configuration of the values your app sets for the [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md) property. When a coordinator decides whether one participant’s suspensions cause others to wait, it also considers any participant limits that you set on the group.

## See Also

### Configuring playback policies

- [participantLimitForWaitingOutSuspensionsWithReason:](participantlimitforwaitingoutsuspensions%28withreason_%29.md): Returns the limit on the number of partipants that a group may contain before the coordinator stops waiting on suspensions that occur for a particular reason.
- [suspensionReasonsThatTriggerWaiting](suspensionreasonsthattriggerwaiting.md): The reasons that cause a coordinator to suspend playback.
- [pauseSnapsToMediaTimeOfOriginator](pausesnapstomediatimeoforiginator.md): A Boolean value that indicates whether participants mirror the originator’s stop time when they pause.
