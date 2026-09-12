> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfstreamsocketsecuritylevelsslv3](https://developer.apple.com/documentation/corefoundation/kcfstreamsocketsecuritylevelsslv3)

# kCFStreamSocketSecurityLevelSSLv3 (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 10.0) · iPadOS 2.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.12) · tvOS  (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Specifies that SSL version 3 be set as the security protocol for a socket stream pair.

## Declaration

```swift
let kCFStreamSocketSecurityLevelSSLv3: CFString
```

<a id="Discussion"></a>

## Discussion

If SSL version 3 is not available, specifies that SSL version 2 be set as the security protocol for a socket stream.

## See Also

### Constants

- [kCFStreamSocketSecurityLevelNone](kcfstreamsocketsecuritylevelnone.md): Specifies that no security level be set.
- [kCFStreamSocketSecurityLevelSSLv2](kcfstreamsocketsecuritylevelsslv2.md): Deprecated. Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelTLSv1](kcfstreamsocketsecurityleveltlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelNegotiatedSSL](kcfstreamsocketsecuritylevelnegotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.

# kCFStreamSocketSecurityLevelSSLv3 (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 10.0) · iPadOS 2.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.12) · tvOS  (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Specifies that SSL version 3 be set as the security protocol for a socket stream pair.

## Declaration

```objectivec
extern CFStringRef const kCFStreamSocketSecurityLevelSSLv3;
```

<a id="Discussion"></a>

## Discussion

If SSL version 3 is not available, specifies that SSL version 2 be set as the security protocol for a socket stream.

## See Also

### Constants

- [kCFStreamSocketSecurityLevelNone](kcfstreamsocketsecuritylevelnone.md): Specifies that no security level be set.
- [kCFStreamSocketSecurityLevelSSLv2](kcfstreamsocketsecuritylevelsslv2.md): Deprecated. Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelTLSv1](kcfstreamsocketsecurityleveltlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelNegotiatedSSL](kcfstreamsocketsecuritylevelnegotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
