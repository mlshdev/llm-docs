> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsessionoption/sendonebyterecord](https://developer.apple.com/documentation/security/sslsessionoption/sendonebyterecord)

# SSLSessionOption.sendOneByteRecord (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Enables `1/n-1` record splitting for BEAST attack mitigation.

## Declaration

```swift
case sendOneByteRecord
```

<a id="Discussion"></a>

## Discussion

When enabled, record splitting is performed only for TLS 1.0 connections based on a block cipher.

# kSSLSessionOptionSendOneByteRecord (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Enables `1/n-1` record splitting for BEAST attack mitigation.

## Declaration

```objectivec
kSSLSessionOptionSendOneByteRecord
```

<a id="Discussion"></a>

## Discussion

When enabled, record splitting is performed only for TLS 1.0 connections based on a block cipher.
