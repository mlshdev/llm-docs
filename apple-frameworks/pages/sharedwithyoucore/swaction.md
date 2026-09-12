> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swaction](https://developer.apple.com/documentation/sharedwithyoucore/swaction)

# SWAction (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents a collaboration action.

## Declaration

```swift
class SWAction
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Accessing action attributes

- [isComplete](swaction/iscomplete.md): A Boolean value that represents whether an action is complete.
- [uuid](swaction/uuid.md): The unique identifier of an action.

### Completing an action

- [fail()](swaction/fail%28%29.md): Reports a failed execution of the action.
- [fulfill()](swaction/fulfill%28%29.md): Reports a successful execution of the action.

### Initializers

- [init(coder:)](swaction/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWStartCollaborationAction](swstartcollaborationaction.md)
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Handle collaboration actions

- [SWCollaborationActionHandler](swcollaborationactionhandler.md): A delegate to handle incoming collaboration actions from a collaboration coordinator.
- [SWStartCollaborationAction](swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

# SWAction (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents a collaboration action.

## Declaration

```objectivec
@interface SWAction : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Accessing action attributes

- [complete](swaction/iscomplete.md): A Boolean value that represents whether an action is complete.
- [uuid](swaction/uuid.md): The unique identifier of an action.

### Completing an action

- [fail](swaction/fail%28%29.md): Reports a failed execution of the action.
- [fulfill](swaction/fulfill%28%29.md): Reports a successful execution of the action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWStartCollaborationAction](swstartcollaborationaction.md)
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Handle collaboration actions

- [SWCollaborationActionHandler](swcollaborationactionhandler.md): A delegate to handle incoming collaboration actions from a collaboration coordinator.
- [SWStartCollaborationAction](swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.
