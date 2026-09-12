> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsessionoption](https://developer.apple.com/documentation/security/sslsessionoption)

# SSLSessionOption (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The options that can be set for an SSL session.

## Declaration

```swift
enum SSLSessionOption
```

<a id="overview"></a>

## Overview

Use these flags with calls to the [SSLSetSessionOption(\_:\_:\_:)](sslsetsessionoption%28______%29.md) function.

## Topics

### Constants

- [SSLSessionOption.breakOnServerAuth](sslsessionoption/breakonserverauth.md): Deprecated. Enables returning from [SSLHandshake(\_:)](sslhandshake%28__%29.md) (with a result of `errSSLServerAuthCompleted`) when the server authentication portion of the handshake is complete to allow your application to perform its own certificate verification.
- [SSLSessionOption.breakOnCertRequested](sslsessionoption/breakoncertrequested.md): Deprecated. Enables returning from [SSLHandshake(\_:)](sslhandshake%28__%29.md) (with a result of `errSSLClientCertRequested`) when the server requests a client certificate.
- [SSLSessionOption.breakOnClientAuth](sslsessionoption/breakonclientauth.md): Deprecated. Enables returning from [SSLHandshake(\_:)](sslhandshake%28__%29.md) (with a result of `errSSLClientAuthCompleted`) when the client authentication portion of the handshake is complete to allow your application to perform its own certificate verification.
- [SSLSessionOption.falseStart](sslsessionoption/falsestart.md): Deprecated. When enabled, TLS False Start is used if an adequate cipher-suite is negotiated.
- [SSLSessionOption.sendOneByteRecord](sslsessionoption/sendonebyterecord.md): Deprecated. Enables `1/n-1` record splitting for BEAST attack mitigation.
- [SSLSessionOption.allowServerIdentityChange](sslsessionoption/allowserveridentitychange.md): Deprecated. Allow server identity change on renegotiation.
- [SSLSessionOption.fallback](sslsessionoption/fallback.md): Deprecated. Enable fallback countermeasures.
- [SSLSessionOption.breakOnClientHello](sslsessionoption/breakonclienthello.md): Deprecated. Break from a client hello in order to check for SNI.
- [SSLSessionOption.allowRenegotiation](sslsessionoption/allowrenegotiation.md): Deprecated. Allow renegotiation.
- [SSLSessionOption.enableSessionTickets](sslsessionoption/enablesessiontickets.md): Deprecated. Enable session tickets.

### Initializers

- [init(rawValue:)](sslsessionoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLSessionOption (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The options that can be set for an SSL session.

## Declaration

```objectivec
enum SSLSessionOption : int;
```

<a id="overview"></a>

## Overview

Use these flags with calls to the [SSLSetSessionOption](sslsetsessionoption%28______%29.md) function.

## Topics

### Constants

- [kSSLSessionOptionBreakOnServerAuth](sslsessionoption/breakonserverauth.md): Deprecated. Enables returning from [SSLHandshake](sslhandshake%28__%29.md) (with a result of `errSSLServerAuthCompleted`) when the server authentication portion of the handshake is complete to allow your application to perform its own certificate verification.
- [kSSLSessionOptionBreakOnCertRequested](sslsessionoption/breakoncertrequested.md): Deprecated. Enables returning from [SSLHandshake](sslhandshake%28__%29.md) (with a result of `errSSLClientCertRequested`) when the server requests a client certificate.
- [kSSLSessionOptionBreakOnClientAuth](sslsessionoption/breakonclientauth.md): Deprecated. Enables returning from [SSLHandshake](sslhandshake%28__%29.md) (with a result of `errSSLClientAuthCompleted`) when the client authentication portion of the handshake is complete to allow your application to perform its own certificate verification.
- [kSSLSessionOptionFalseStart](sslsessionoption/falsestart.md): Deprecated. When enabled, TLS False Start is used if an adequate cipher-suite is negotiated.
- [kSSLSessionOptionSendOneByteRecord](sslsessionoption/sendonebyterecord.md): Deprecated. Enables `1/n-1` record splitting for BEAST attack mitigation.
- [kSSLSessionOptionAllowServerIdentityChange](sslsessionoption/allowserveridentitychange.md): Deprecated. Allow server identity change on renegotiation.
- [kSSLSessionOptionFallback](sslsessionoption/fallback.md): Deprecated. Enable fallback countermeasures.
- [kSSLSessionOptionBreakOnClientHello](sslsessionoption/breakonclienthello.md): Deprecated. Break from a client hello in order to check for SNI.
- [kSSLSessionOptionAllowRenegotiation](sslsessionoption/allowrenegotiation.md): Deprecated. Allow renegotiation.
- [kSSLSessionOptionEnableSessionTickets](sslsessionoption/enablesessiontickets.md): Deprecated. Enable session tickets.
