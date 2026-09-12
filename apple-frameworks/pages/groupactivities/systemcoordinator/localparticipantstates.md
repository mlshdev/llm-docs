> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/localparticipantstates](https://developer.apple.com/documentation/groupactivities/systemcoordinator/localparticipantstates)

# localParticipantStates

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

An asynchronous sequence that reports changes to the local participant’s state.

## Declaration

```swift
final var localParticipantStates: SystemCoordinator.ParticipantStates { get }
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)
- [Configure your visionOS app for sharing with people nearby](../configure-your-app-for-sharing-with-people-nearby.md)

<a id="discussion"></a>

## Discussion

Use this property to detect when the current person starts or stops displaying their spatial Persona. The following example shows how to set up a task to monitor the sequence and respond to changes:

```swift
Task.detached {
    for await localParticipantState in systemCoordinator.localParticipantStates {
         if localParticipantState.isSpatial {
              // Handle changes to the state.
         }
    }
}
```

## See Also

### Getting the participant state

- [remoteParticipantStates](remoteparticipantstates.md)
- [localParticipantState](localparticipantstate.md): The current participant’s level of support for an activity that takes place in a shared simulation space.
- [SystemCoordinator.ParticipantStates](participantstates.md): An asynchronous sequence that reports the current person’s ability to participate in a shared context.
