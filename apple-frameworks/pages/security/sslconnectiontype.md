> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslconnectiontype](https://developer.apple.com/documentation/security/sslconnectiontype)

# SSLConnectionType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that indicate whether a context is to be used for streaming or datagram-based communication.

## Declaration

```swift
enum SSLConnectionType
```

<a id="overview"></a>

## Overview

Use one of these flags with the [SSLCreateContext(\_:\_:\_:)](sslcreatecontext%28______%29.md) function to indicate whether the context is intended for use in stream-based or datagram-based communication.

## Topics

### Constants

- [SSLConnectionType.streamType](sslconnectiontype/streamtype.md): Deprecated. Stream-based communication (TCP).
- [SSLConnectionType.datagramType](sslconnectiontype/datagramtype.md): Deprecated. Datagram-based communication (UDP).

### Initializers

- [init(rawValue:)](sslconnectiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLConnectionType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The flags that indicate whether a context is to be used for streaming or datagram-based communication.

## Declaration

```objectivec
enum SSLConnectionType : int;
```

<a id="overview"></a>

## Overview

Use one of these flags with the [SSLCreateContext](sslcreatecontext%28______%29.md) function to indicate whether the context is intended for use in stream-based or datagram-based communication.

## Topics

### Constants

- [kSSLStreamType](sslconnectiontype/streamtype.md): Deprecated. Stream-based communication (TCP).
- [kSSLDatagramType](sslconnectiontype/datagramtype.md): Deprecated. Datagram-based communication (UDP).
