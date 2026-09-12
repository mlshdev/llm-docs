> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcinterface](https://developer.apple.com/documentation/foundation/nsxpcinterface)

# NSXPCInterface (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that may be sent to an exported object or remote object proxy.

## Declaration

```swift
class NSXPCInterface
```

<a id="overview"></a>

## Overview

This object holds all information about the interface of an exported object or remote object proxy. It describes what messages are allowed, what kinds of objects are allowed as arguments, what the signature of any reply blocks are, and information about additional proxy objects.

## Topics

### Initializers

- [init(with:)](nsxpcinterface/init%28with_%29.md): Returns an NSXPCInterface instance for a given protocol.
- [init(withProtocol:)](nsxpcinterface/init%28withprotocol_%29.md)

### Instance Properties

- [protocol](nsxpcinterface/protocol.md): The Objective-C protocol that this interface is based on.

### Instance Methods

- [classes(for:argumentIndex:ofReply:)](nsxpcinterface/classes%28for_argumentindex_ofreply_%29.md): Returns the current list of allowed classes that can appear within the specified collection object argument to the specified method.
- [forSelector(\_:argumentIndex:ofReply:)](nsxpcinterface/forselector%28__argumentindex_ofreply_%29.md): Returns the interface previously set for the specified selector and parameter.
- [setClasses(\_:for:argumentIndex:ofReply:)](nsxpcinterface/setclasses%28__for_argumentindex_ofreply_%29.md): Sets the classes that can appear within the (numerically) specified collection object argument to the specified method.
- [setInterface(\_:for:argumentIndex:ofReply:)](nsxpcinterface/setinterface%28__for_argumentindex_ofreply_%29.md): Configures a specific parameter of a method to be sent as a proxy object instead of copied.
- [setXPCType(\_:for:argumentIndex:ofReply:)](nsxpcinterface/setxpctype%28__for_argumentindex_ofreply_%29.md)
- [xpcType(for:argumentIndex:ofReply:)](nsxpcinterface/xpctype%28for_argumentindex_ofreply_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### XPC Client

- [NSXPCProxyCreating](nsxpcproxycreating.md): Methods for creating new proxy objects.
- [NSXPCConnection](nsxpcconnection.md): A bidirectional communication channel between two processes.
- [NSXPCCoder](nsxpccoder.md): A coder that encodes and decodes objects that your app sends over an XPC connection.

# NSXPCInterface (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that may be sent to an exported object or remote object proxy.

## Declaration

```objectivec
@interface NSXPCInterface : NSObject
```

<a id="overview"></a>

## Overview

This object holds all information about the interface of an exported object or remote object proxy. It describes what messages are allowed, what kinds of objects are allowed as arguments, what the signature of any reply blocks are, and information about additional proxy objects.

## Topics

### Instance Properties

- [protocol](nsxpcinterface/protocol.md): The Objective-C protocol that this interface is based on.

### Instance Methods

- [classesForSelector:argumentIndex:ofReply:](nsxpcinterface/classes%28for_argumentindex_ofreply_%29.md): Returns the current list of allowed classes that can appear within the specified collection object argument to the specified method.
- [interfaceForSelector:argumentIndex:ofReply:](nsxpcinterface/forselector%28__argumentindex_ofreply_%29.md): Returns the interface previously set for the specified selector and parameter.
- [setClasses:forSelector:argumentIndex:ofReply:](nsxpcinterface/setclasses%28__for_argumentindex_ofreply_%29.md): Sets the classes that can appear within the (numerically) specified collection object argument to the specified method.
- [setInterface:forSelector:argumentIndex:ofReply:](nsxpcinterface/setinterface%28__for_argumentindex_ofreply_%29.md): Configures a specific parameter of a method to be sent as a proxy object instead of copied.
- [setXPCType:forSelector:argumentIndex:ofReply:](nsxpcinterface/setxpctype%28__for_argumentindex_ofreply_%29.md)
- [XPCTypeForSelector:argumentIndex:ofReply:](nsxpcinterface/xpctype%28for_argumentindex_ofreply_%29.md)

### Type Methods

- [interfaceWithProtocol:](nsxpcinterface/init%28with_%29.md): Returns an NSXPCInterface instance for a given protocol.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### XPC Client

- [NSXPCProxyCreating](nsxpcproxycreating.md): Methods for creating new proxy objects.
- [NSXPCConnection](nsxpcconnection.md): A bidirectional communication channel between two processes.
- [NSXPCCoder](nsxpccoder.md): A coder that encodes and decodes objects that your app sends over an XPC connection.
