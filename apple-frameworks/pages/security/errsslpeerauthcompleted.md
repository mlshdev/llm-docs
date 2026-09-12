> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errsslpeerauthcompleted](https://developer.apple.com/documentation/security/errsslpeerauthcompleted)

# errSSLPeerAuthCompleted (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A non-fatal result indicating the peer certificate is valid, or was ignored if verification is disabled.

## Declaration

```swift
var errSSLPeerAuthCompleted: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

The peer’s certificate chain is valid, or was ignored if certificate verification was disabled via [SSLSetEnableCertVerify](sslsetenablecertverify.md). In response, you may decide to continue with the handshake (by calling [SSLHandshake(\_:)](sslhandshake%28__%29.md) again) or just close the connection.

# errSSLPeerAuthCompleted (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A non-fatal result indicating the peer certificate is valid, or was ignored if verification is disabled.

## Declaration

```objectivec
errSSLPeerAuthCompleted
```

<a id="Discussion"></a>

## Discussion

The peer’s certificate chain is valid, or was ignored if certificate verification was disabled via [SSLSetEnableCertVerify](sslsetenablecertverify.md). In response, you may decide to continue with the handshake (by calling [SSLHandshake](sslhandshake%28__%29.md) again) or just close the connection.
