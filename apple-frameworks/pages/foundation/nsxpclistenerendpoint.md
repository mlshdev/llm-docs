> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistenerendpoint](https://developer.apple.com/documentation/foundation/nsxpclistenerendpoint)

# NSXPCListenerEndpoint (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that names a specific XPC listener.

## Declaration

```swift
class NSXPCListenerEndpoint
```

<a id="overview"></a>

## Overview

An instance of [NSXPCListenerEndpoint](nsxpclistenerendpoint.md) may be retrieved from an [NSXPCListener](nsxpclistener.md) instance and sent over existing [NSXPCConnection](nsxpcconnection.md)s. A process may then use the endpoint to create a new [NSXPCConnection](nsxpcconnection.md) to the original [NSXPCListener](nsxpclistener.md).

This pattern is useful if you have a service which multiplexes work to other services. The service can act as an intermediate helper. The requesting application does not need to know specifically which service it is connecting to, just that it implements a known [NSXPCInterface](nsxpcinterface.md).

## Topics

### Initializers

- [init(coder:)](nsxpclistenerendpoint/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XPC Services

- [NSXPCListener](nsxpclistener.md): A listener that waits for new incoming connections, configures them, and accepts or rejects them.
- [NSXPCListenerDelegate](nsxpclistenerdelegate.md): The protocol that delegates to the XPC listener use to accept or reject new connections.

# NSXPCListenerEndpoint (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that names a specific XPC listener.

## Declaration

```objectivec
@interface NSXPCListenerEndpoint : NSObject
```

<a id="overview"></a>

## Overview

An instance of [NSXPCListenerEndpoint](nsxpclistenerendpoint.md) may be retrieved from an [NSXPCListener](nsxpclistener.md) instance and sent over existing [NSXPCConnection](nsxpcconnection.md)s. A process may then use the endpoint to create a new [NSXPCConnection](nsxpcconnection.md) to the original [NSXPCListener](nsxpclistener.md).

This pattern is useful if you have a service which multiplexes work to other services. The service can act as an intermediate helper. The requesting application does not need to know specifically which service it is connecting to, just that it implements a known [NSXPCInterface](nsxpcinterface.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### XPC Services

- [NSXPCListener](nsxpclistener.md): A listener that waits for new incoming connections, configures them, and accepts or rejects them.
- [NSXPCListenerDelegate](nsxpclistenerdelegate.md): The protocol that delegates to the XPC listener use to accept or reject new connections.
