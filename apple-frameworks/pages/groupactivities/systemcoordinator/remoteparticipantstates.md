> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/remoteparticipantstates](https://developer.apple.com/documentation/groupactivities/systemcoordinator/remoteparticipantstates)

# remoteParticipantStates

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

## Declaration

```swift
final var remoteParticipantStates: [Participant : SystemCoordinator.ParticipantState] { get }
```

## Mentioned In

- [Configure your visionOS app for sharing with people nearby](../configure-your-app-for-sharing-with-people-nearby.md)

## See Also

### Getting the participant state

- [localParticipantState](localparticipantstate.md): The current participant’s level of support for an activity that takes place in a shared simulation space.
- [localParticipantStates](localparticipantstates.md): An asynchronous sequence that reports changes to the local participant’s state.
- [SystemCoordinator.ParticipantStates](participantstates.md): An asynchronous sequence that reports the current person’s ability to participate in a shared context.
