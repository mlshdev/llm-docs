> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwerror](https://developer.apple.com/documentation/network/nwerror)

# NWError

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The errors returned by objects in the Network framework.

## Declaration

```swift
enum NWError
```

## Topics

### Checking Error Types

- [NWError.posix(\_:)](nwerror/posix%28__%29.md): A POSIX error, which is used for most network protocol and routing errors.
- [NWError.dns(\_:)](nwerror/dns%28__%29.md): A DNS error encountered in resolving, browsing, or advertising.
- [NWError.tls(\_:)](nwerror/tls%28__%29.md): A TLS error reported by a TLS connection or listener.

### Enumeration Cases

- [NWError.wifiAware(\_:)](nwerror/wifiaware%28__%29.md): The error code will be a Wi-Fi Aware error as defined in \<WifiAware/errors.swift\>

### Instance Properties

- [wifiAware](nwerror/wifiaware.md): The underlying error that occurred, if applicable.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
