> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcreatecontext(_:_:_:)](https://developer.apple.com/documentation/security/sslcreatecontext(_:_:_:))

# SSLCreateContext(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Allocates and returns a new context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLCreateContext(_ alloc: CFAllocator?, _ protocolSide: SSLProtocolSide, _ connectionType: SSLConnectionType) -> SSLContext?
```

## Parameters

- `alloc`: The allocator to use. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `protocolSide`: Either [SSLProtocolSide.serverSide](sslprotocolside/serverside.md) or [SSLProtocolSide.clientSide](sslprotocolside/clientside.md).
- `connectionType`: Either [SSLConnectionType.streamType](sslconnectiontype/streamtype.md) or [SSLConnectionType.datagramType](sslconnectiontype/datagramtype.md).

<a id="return-value"></a>

## Return Value

A new context. In Objective-C, use [CFRelease](../corefoundation/cfrelease.md) to release this object’s memory when you are done with it.

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

# SSLCreateContext (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Allocates and returns a new context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
SSLContextRefSSLCreateContext(CFAllocatorRef alloc, SSLProtocolSide protocolSide, SSLConnectionType connectionType);
```

## Parameters

- `alloc`: The allocator to use. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `protocolSide`: Either [kSSLServerSide](sslprotocolside/serverside.md) or [kSSLClientSide](sslprotocolside/clientside.md).
- `connectionType`: Either [kSSLStreamType](sslconnectiontype/streamtype.md) or [kSSLDatagramType](sslconnectiontype/datagramtype.md).

<a id="return-value"></a>

## Return Value

A new context. In Objective-C, use [CFRelease](../corefoundation/cfrelease.md) to release this object’s memory when you are done with it.

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)
