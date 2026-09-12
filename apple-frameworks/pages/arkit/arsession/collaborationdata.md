> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/collaborationdata](https://developer.apple.com/documentation/arkit/arsession/collaborationdata)

# ARSession.CollaborationData (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object that holds information that a user has collected about the physical environment.

## Declaration

```swift
class CollaborationData
```

<a id="overview"></a>

## Overview

To create a multiuser AR experience, you enable collaboration on a world tracking session. ARKit regularly outputs [ARSession.CollaborationData](collaborationdata.md) that users share with each other, which enables everyone to view the same virtual content from their own perspective. For more information, see [isCollaborationEnabled](../arworldtrackingconfiguration/iscollaborationenabled.md).

## Topics

### Observing Priority

- [priority](collaborationdata/priority-swift.property.md): A property that gives you a hint about how to send a given data instance over the network.
- [ARSession.CollaborationData.Priority](collaborationdata/priority-swift.enum.md): Options that help you choose the appropriate network protocol or settings for a given data instance.

### Initializers

- [init(coder:)](collaborationdata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing collaboration

- [update(with:)](update%28with_%29.md): Updates your session with information about the physical environment that is collected by another user.

# ARCollaborationData (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object that holds information that a user has collected about the physical environment.

## Declaration

```objectivec
@interface ARCollaborationData : NSObject
```

<a id="overview"></a>

## Overview

To create a multiuser AR experience, you enable collaboration on a world tracking session. ARKit regularly outputs [ARCollaborationData](collaborationdata.md) that users share with each other, which enables everyone to view the same virtual content from their own perspective. For more information, see [collaborationEnabled](../arworldtrackingconfiguration/iscollaborationenabled.md).

## Topics

### Observing Priority

- [priority](collaborationdata/priority-swift.property.md): A property that gives you a hint about how to send a given data instance over the network.
- [ARCollaborationDataPriority](collaborationdata/priority-swift.enum.md): Options that help you choose the appropriate network protocol or settings for a given data instance.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Managing collaboration

- [updateWithCollaborationData:](update%28with_%29.md): Updates your session with information about the physical environment that is collected by another user.
