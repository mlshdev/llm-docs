> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swupdatecollaborationparticipantsaction](https://developer.apple.com/documentation/sharedwithyoucore/swupdatecollaborationparticipantsaction)

# SWUpdateCollaborationParticipantsAction (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

## Declaration

```swift
class SWUpdateCollaborationParticipantsAction
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

Look up the target collaboration using the provided [SWCollaborationMetadata](swcollaborationmetadata.md). Associate the added participants with the resource on your app’s servers, and remove any identities included in the [removedIdentities](swupdatecollaborationparticipantsaction/removedidentities.md) property.

## Topics

### Accessing action attributes

- [collaborationMetadata](swupdatecollaborationparticipantsaction/collaborationmetadata.md): An object for conveying data during a collaboration.
- [addedIdentities](swupdatecollaborationparticipantsaction/addedidentities.md): An array of added identities in a collaboration.
- [removedIdentities](swupdatecollaborationparticipantsaction/removedidentities.md): An array of removed identities in a collaboration.

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
- [SWStartCollaborationAction](swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.

# SWUpdateCollaborationParticipantsAction (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

## Declaration

```objectivec
@interface SWUpdateCollaborationParticipantsAction : SWAction
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

Look up the target collaboration using the provided [SWCollaborationMetadata](swcollaborationmetadata.md). Associate the added participants with the resource on your app’s servers, and remove any identities included in the [removedIdentities](swupdatecollaborationparticipantsaction/removedidentities.md) property.

## Topics

### Accessing action attributes

- [collaborationMetadata](swupdatecollaborationparticipantsaction/collaborationmetadata.md): An object for conveying data during a collaboration.
- [addedIdentities](swupdatecollaborationparticipantsaction/addedidentities.md): An array of added identities in a collaboration.
- [removedIdentities](swupdatecollaborationparticipantsaction/removedidentities.md): An array of removed identities in a collaboration.

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
- [SWStartCollaborationAction](swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
