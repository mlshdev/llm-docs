> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsessionoption/breakonserverauth](https://developer.apple.com/documentation/security/sslsessionoption/breakonserverauth)

# SSLSessionOption.breakOnServerAuth (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Enables returning from [SSLHandshake(\_:)](../sslhandshake%28__%29.md) (with a result of `errSSLServerAuthCompleted`) when the server authentication portion of the handshake is complete to allow your application to perform its own certificate verification.

## Declaration

```swift
case breakOnServerAuth
```

<a id="Discussion"></a>

## Discussion

Note that in iOS (all versions) and macOS 10.8 and later, setting this option disables Secure Transport’s automatic verification of server certificates.

If you set this option, your application should perform its own certificate verification when `errSSLServerAuthCompleted` is returned before continuing with the handshake.

# kSSLSessionOptionBreakOnServerAuth (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Enables returning from [SSLHandshake](../sslhandshake%28__%29.md) (with a result of `errSSLServerAuthCompleted`) when the server authentication portion of the handshake is complete to allow your application to perform its own certificate verification.

## Declaration

```objectivec
kSSLSessionOptionBreakOnServerAuth
```

<a id="Discussion"></a>

## Discussion

Note that in iOS (all versions) and macOS 10.8 and later, setting this option disables Secure Transport’s automatic verification of server certificates.

If you set this option, your application should perform its own certificate verification when `errSSLServerAuthCompleted` is returned before continuing with the handshake.
