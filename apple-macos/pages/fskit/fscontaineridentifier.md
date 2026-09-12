> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontaineridentifier](https://developer.apple.com/documentation/fskit/fscontaineridentifier)

# FSContainerIdentifier (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that identifies a container.

## Declaration

```swift
class FSContainerIdentifier
```

<a id="overview"></a>

## Overview

The identifier is either a UUID or a UUID with additional differentiating bytes. Some network protocols evaluate access based on a user ID when connecting. In this situation, when a file server receives multiple client connections with different user IDs, the server provides different file hierarchies to each. For such systems, represent the container identifier as the UUID associated with the server, followed by four or eight bytes to differentiate connections.

> **Important**

> Don’t subclass this class.

## Topics

### Accessing identifier properties

- [volumeIdentifier](fscontaineridentifier/volumeidentifier.md): The volume identifier associated with the container.

## Relationships

### Inherits From

- [FSEntityIdentifier](fsentityidentifier.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Containers

- [FSContainerStatus](fscontainerstatus.md): A type that represents a container’s status.

# FSContainerIdentifier (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that identifies a container.

## Declaration

```objectivec
@interface FSContainerIdentifier : FSEntityIdentifier
```

<a id="overview"></a>

## Overview

The identifier is either a UUID or a UUID with additional differentiating bytes. Some network protocols evaluate access based on a user ID when connecting. In this situation, when a file server receives multiple client connections with different user IDs, the server provides different file hierarchies to each. For such systems, represent the container identifier as the UUID associated with the server, followed by four or eight bytes to differentiate connections.

> **Important**

> Don’t subclass this class.

## Topics

### Accessing identifier properties

- [volumeIdentifier](fscontaineridentifier/volumeidentifier.md): The volume identifier associated with the container.

## Relationships

### Inherits From

- [FSEntityIdentifier](fsentityidentifier.md)

## See Also

### Containers

- [FSContainerStatus](fscontainerstatus.md): A type that represents a container’s status.
