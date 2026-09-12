> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationactionhandler](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationactionhandler)

# SWCollaborationActionHandler (Swift)

**Framework:** Shared with You Core  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A delegate to handle incoming collaboration actions from a collaboration coordinator.

## Declaration

```swift
protocol SWCollaborationActionHandler : NSObjectProtocol
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Handling collaboration actions

- [collaborationCoordinator(\_:handle:)](swcollaborationactionhandler/collaborationcoordinator%28__handle_%29-6oect.md): Notifies the delegate when the system starts a collaboration.
- [collaborationCoordinator(\_:handle:)](swcollaborationactionhandler/collaborationcoordinator%28__handle_%29-7l5j8.md): Notifies the delegate when the system updates the participants in a collaboration.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handle collaboration actions

- [SWAction](swaction.md): An object that represents a collaboration action.
- [SWStartCollaborationAction](swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

# SWCollaborationActionHandler (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A delegate to handle incoming collaboration actions from a collaboration coordinator.

## Declaration

```objectivec
@protocol SWCollaborationActionHandler <NSObject>
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Handling collaboration actions

- [collaborationCoordinator:handleStartCollaborationAction:](swcollaborationactionhandler/collaborationcoordinator%28__handle_%29-6oect.md): Notifies the delegate when the system starts a collaboration.
- [collaborationCoordinator:handleUpdateCollaborationParticipantsAction:](swcollaborationactionhandler/collaborationcoordinator%28__handle_%29-7l5j8.md): Notifies the delegate when the system updates the participants in a collaboration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handle collaboration actions

- [SWAction](swaction.md): An object that represents a collaboration action.
- [SWStartCollaborationAction](swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.
