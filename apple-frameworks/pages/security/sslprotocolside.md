> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslprotocolside](https://developer.apple.com/documentation/security/sslprotocolside)

# SSLProtocolSide (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that indicate whether a context is for the server or client side of a connection.

## Declaration

```swift
@frozen enum SSLProtocolSide
```

<a id="overview"></a>

## Overview

Use one of these flags with the [SSLCreateContext(\_:\_:\_:)](sslcreatecontext%28______%29.md) function to indicate whether the context is intended for the server side or client side of a connection.

## Topics

### Constants

- [SSLProtocolSide.serverSide](sslprotocolside/serverside.md): Deprecated. Server side.
- [SSLProtocolSide.clientSide](sslprotocolside/clientside.md): Deprecated. Client side.

### Initializers

- [init(rawValue:)](sslprotocolside/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLProtocolSide (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The flags that indicate whether a context is for the server or client side of a connection.

## Declaration

```objectivec
enum SSLProtocolSide : int;
```

<a id="overview"></a>

## Overview

Use one of these flags with the [SSLCreateContext](sslcreatecontext%28______%29.md) function to indicate whether the context is intended for the server side or client side of a connection.

## Topics

### Constants

- [kSSLServerSide](sslprotocolside/serverside.md): Deprecated. Server side.
- [kSSLClientSide](sslprotocolside/clientside.md): Deprecated. Client side.
