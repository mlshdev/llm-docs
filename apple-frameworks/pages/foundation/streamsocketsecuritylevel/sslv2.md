> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocketsecuritylevel/sslv2](https://developer.apple.com/documentation/foundation/streamsocketsecuritylevel/sslv2)

# ssLv2 (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that SSL version 2 be set as the security protocol for a socket stream.

## Declaration

```swift
static let ssLv2: StreamSocketSecurityLevel
```

## See Also

### Type Properties

- [negotiatedSSL](negotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
- [none](none.md): Specifies that no security level be set for a socket stream.
- [ssLv3](sslv3.md): Specifies that SSL version 3 be set as the security protocol for a socket stream.
- [tlSv1](tlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.

# NSStreamSocketSecurityLevelSSLv2 (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that SSL version 2 be set as the security protocol for a socket stream.

## Declaration

```objectivec
extern NSStreamSocketSecurityLevel const NSStreamSocketSecurityLevelSSLv2;
```

## See Also

### Type Properties

- [NSStreamSocketSecurityLevelNegotiatedSSL](negotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
- [NSStreamSocketSecurityLevelNone](none.md): Specifies that no security level be set for a socket stream.
- [NSStreamSocketSecurityLevelSSLv3](sslv3.md): Specifies that SSL version 3 be set as the security protocol for a socket stream.
- [NSStreamSocketSecurityLevelTLSv1](tlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
