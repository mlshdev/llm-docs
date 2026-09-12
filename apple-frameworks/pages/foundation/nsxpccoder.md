> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpccoder](https://developer.apple.com/documentation/foundation/nsxpccoder)

# NSXPCCoder (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A coder that encodes and decodes objects that your app sends over an XPC connection.

## Declaration

```swift
class NSXPCCoder
```

<a id="overview"></a>

## Overview

If you want to perform custom encoding or decoding of [Codable](https://developer.apple.com/documentation/swift/codable) objects that your app sends over an [NSXPCConnection](nsxpcconnection.md), use [isKind(of:)](../objectivec/nsobjectprotocol/iskind%28of_%29.md) to determine if the coder provided to your object is a kind of [NSXPCCoder](nsxpccoder.md).

## Topics

### Inspecting the Coder

- [connection](nsxpccoder/connection.md): The connection currently performing encoding or decoding.
- [userInfo](nsxpccoder/userinfo.md): An optional user information object associated with the coder.

### Encoding and Decoding

- [encodeXPCObject(\_:forKey:)](nsxpccoder/encodexpcobject%28__forkey_%29.md): Encodes an object to send over an XPC connection.
- [decodeXPCObject(ofType:forKey:)](nsxpccoder/decodexpcobject%28oftype_forkey_%29.md): Decodes an object and validates that its type matches the type a service provides over XPC.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XPC Client

- [NSXPCProxyCreating](nsxpcproxycreating.md): Methods for creating new proxy objects.
- [NSXPCConnection](nsxpcconnection.md): A bidirectional communication channel between two processes.
- [NSXPCInterface](nsxpcinterface.md): An interface that may be sent to an exported object or remote object proxy.

# NSXPCCoder (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A coder that encodes and decodes objects that your app sends over an XPC connection.

## Declaration

```objectivec
@interface NSXPCCoder : NSCoder
```

<a id="overview"></a>

## Overview

If you want to perform custom encoding or decoding of [Codable](https://developer.apple.com/documentation/swift/codable) objects that your app sends over an [NSXPCConnection](nsxpcconnection.md), use [isKindOfClass:](../objectivec/nsobjectprotocol/iskind%28of_%29.md) to determine if the coder provided to your object is a kind of [NSXPCCoder](nsxpccoder.md).

## Topics

### Inspecting the Coder

- [connection](nsxpccoder/connection.md): The connection currently performing encoding or decoding.
- [userInfo](nsxpccoder/userinfo.md): An optional user information object associated with the coder.

### Encoding and Decoding

- [encodeXPCObject:forKey:](nsxpccoder/encodexpcobject%28__forkey_%29.md): Encodes an object to send over an XPC connection.
- [decodeXPCObjectOfType:forKey:](nsxpccoder/decodexpcobject%28oftype_forkey_%29.md): Decodes an object and validates that its type matches the type a service provides over XPC.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

## See Also

### XPC Client

- [NSXPCProxyCreating](nsxpcproxycreating.md): Methods for creating new proxy objects.
- [NSXPCConnection](nsxpcconnection.md): A bidirectional communication channel between two processes.
- [NSXPCInterface](nsxpcinterface.md): An interface that may be sent to an exported object or remote object proxy.
