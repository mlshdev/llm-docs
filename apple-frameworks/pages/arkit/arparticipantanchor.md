> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arparticipantanchor](https://developer.apple.com/documentation/arkit/arparticipantanchor)

# ARParticipantAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An anchor for another user in multiuser augmented reality experiences.

## Declaration

```swift
class ARParticipantAnchor
```

<a id="overview"></a>

## Overview

When you set [isCollaborationEnabled](arworldtrackingconfiguration/iscollaborationenabled.md) to true, ARKit calls [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md) with an [ARParticipantAnchor](arparticipantanchor.md) for every user it detects in your physical environment, providing you with their world position.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shared Experiences

- [Streaming an AR experience](streaming-an-ar-experience.md): Control an AR experience remotely by transferring sensor and user input over the network.
- [Creating a collaborative session](creating-a-collaborative-session.md): Enable nearby devices to share an AR experience by using a peer-to-peer multiuser strategy.
- [Creating a multiuser AR experience](creating-a-multiuser-ar-experience.md): Enable nearby devices to share an AR experience by using a host-guest multiuser strategy.
- [ARSession.CollaborationData](arsession/collaborationdata.md): An object that holds information that a user has collected about the physical environment.

# ARParticipantAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An anchor for another user in multiuser augmented reality experiences.

## Declaration

```objectivec
@interface ARParticipantAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

When you set [collaborationEnabled](arworldtrackingconfiguration/iscollaborationenabled.md) to true, ARKit calls [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md) with an [ARParticipantAnchor](arparticipantanchor.md) for every user it detects in your physical environment, providing you with their world position.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

## See Also

### Shared Experiences

- [Streaming an AR experience](streaming-an-ar-experience.md): Control an AR experience remotely by transferring sensor and user input over the network.
- [Creating a collaborative session](creating-a-collaborative-session.md): Enable nearby devices to share an AR experience by using a peer-to-peer multiuser strategy.
- [Creating a multiuser AR experience](creating-a-multiuser-ar-experience.md): Enable nearby devices to share an AR experience by using a host-guest multiuser strategy.
- [ARCollaborationData](arsession/collaborationdata.md): An object that holds information that a user has collected about the physical environment.
