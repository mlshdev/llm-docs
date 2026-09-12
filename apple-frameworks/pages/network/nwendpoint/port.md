> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwendpoint/port](https://developer.apple.com/documentation/network/nwendpoint/port)

# NWEndpoint.Port

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A port number you use along with a host to identify a network endpoint.

## Declaration

```swift
struct Port
```

## Topics

### Creating Ports

- [init(\_:)](port/init%28__%29.md): Initializes a port with a string.

### Setting Well-Known Ports

- [any](port/any.md): The unspecified port (port 0).
- [ssh](port/ssh.md): The Secure Shell port (port 22).
- [smtp](port/smtp.md): The Simple Mail Transfer Protocol port (port 25).
- [http](port/http.md): The Hypertext Transfer Protocol port (port 80).
- [pop](port/pop.md): The Post Office Protocol port (port 110).
- [imap](port/imap.md): The Internet Message Access Protocol port (port 143).
- [https](port/https.md): The Secure Hypertext Transfer Protocol port (port 443).
- [imaps](port/imaps.md): The Secure Internet Message Access Protocol port (port 993).
- [socks](port/socks.md): The SOCKS proxy protocol port (port 1080).

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Host and Ports

- [NWEndpoint.Host](host.md): A name or address that identifies a network endpoint.
