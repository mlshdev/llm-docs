> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swstartcollaborationaction](https://developer.apple.com/documentation/sharedwithyoucore/swstartcollaborationaction)

# SWStartCollaborationAction (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents the first action sent to an app when the user shares a collaboration.

## Declaration

```swift
class SWStartCollaborationAction
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

The action contains an updated [SWCollaborationMetadata](swcollaborationmetadata.md) that include the user-selected share options. Fulfill this action with the universal link and a device-independent identifier for the collaboration.

## Topics

### Accessing action attributes

- [collaborationMetadata](swstartcollaborationaction/collaborationmetadata.md): An object for that conveys data during a collaboration.

### Fulfilling an action

- [fulfill(using:collaborationIdentifier:)](swstartcollaborationaction/fulfill%28using_collaborationidentifier_%29.md): Informs an app to set up the universal link and device independent identifier to provide to the system.

## Relationships

### Inherits From

- [SWAction](swaction.md)

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

- [SWAction](swaction.md): An object that represents a collaboration action.
- [SWCollaborationActionHandler](swcollaborationactionhandler.md): A delegate to handle incoming collaboration actions from a collaboration coordinator.
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

# SWStartCollaborationAction (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents the first action sent to an app when the user shares a collaboration.

## Declaration

```objectivec
@interface SWStartCollaborationAction : SWAction
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

The action contains an updated [SWCollaborationMetadata](swcollaborationmetadata.md) that include the user-selected share options. Fulfill this action with the universal link and a device-independent identifier for the collaboration.

## Topics

### Accessing action attributes

- [collaborationMetadata](swstartcollaborationaction/collaborationmetadata.md): An object for that conveys data during a collaboration.

### Fulfilling an action

- [fulfillUsingURL:collaborationIdentifier:](swstartcollaborationaction/fulfill%28using_collaborationidentifier_%29.md): Informs an app to set up the universal link and device independent identifier to provide to the system.

## Relationships

### Inherits From

- [SWAction](swaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Handle collaboration actions

- [SWAction](swaction.md): An object that represents a collaboration action.
- [SWCollaborationActionHandler](swcollaborationactionhandler.md): A delegate to handle incoming collaboration actions from a collaboration coordinator.
- [SWUpdateCollaborationParticipantsAction](swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.
