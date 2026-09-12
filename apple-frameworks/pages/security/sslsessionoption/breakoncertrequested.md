> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsessionoption/breakoncertrequested](https://developer.apple.com/documentation/security/sslsessionoption/breakoncertrequested)

# SSLSessionOption.breakOnCertRequested (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Enables returning from [SSLHandshake(\_:)](../sslhandshake%28__%29.md) (with a result of `errSSLClientCertRequested`) when the server requests a client certificate.

## Declaration

```swift
case breakOnCertRequested
```

# kSSLSessionOptionBreakOnCertRequested (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Enables returning from [SSLHandshake](../sslhandshake%28__%29.md) (with a result of `errSSLClientCertRequested`) when the server requests a client certificate.

## Declaration

```objectivec
kSSLSessionOptionBreakOnCertRequested
```
