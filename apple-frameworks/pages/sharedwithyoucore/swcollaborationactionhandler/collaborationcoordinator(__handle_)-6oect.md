> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationactionhandler/collaborationcoordinator(_:handle:)-6oect](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationactionhandler/collaborationcoordinator(_:handle:)-6oect)

# collaborationCoordinator(\_:handle:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Notifies the delegate when the system starts a collaboration.

## Declaration

```swift
func collaborationCoordinator(_ coordinator: SWCollaborationCoordinator, handle action: SWStartCollaborationAction)
```

## Parameters

- `coordinator`: The [SWCollaborationCoordinator](../swcollaborationcoordinator.md) for this action.
- `action`: The [SWStartCollaborationAction](../swstartcollaborationaction.md) for this collaboration.

## See Also

### Handling collaboration actions

- [collaborationCoordinator(\_:handle:)](collaborationcoordinator%28__handle_%29-7l5j8.md): Notifies the delegate when the system updates the participants in a collaboration.

# collaborationCoordinator:handleStartCollaborationAction: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Notifies the delegate when the system starts a collaboration.

## Declaration

```objectivec
- (void) collaborationCoordinator:(SWCollaborationCoordinator *) coordinator handleStartCollaborationAction:(SWStartCollaborationAction *) action;
```

## Parameters

- `coordinator`: The [SWCollaborationCoordinator](../swcollaborationcoordinator.md) for this action.
- `action`: The [SWStartCollaborationAction](../swstartcollaborationaction.md) for this collaboration.

## See Also

### Handling collaboration actions

- [collaborationCoordinator:handleUpdateCollaborationParticipantsAction:](collaborationcoordinator%28__handle_%29-7l5j8.md): Notifies the delegate when the system updates the participants in a collaboration.
