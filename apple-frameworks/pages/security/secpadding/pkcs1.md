> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpadding/pkcs1](https://developer.apple.com/documentation/security/secpadding/pkcs1)

# PKCS1 (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.6+ (deprecated in 12.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

PKCS1 padding.

> Replaced with SecKeyAlgorithm

## Declaration

```swift
static var PKCS1: SecPadding { get }
```

<a id="Discussion"></a>

## Discussion

For elliptic curve, defaults to a signature in x9.62 DER encoding.

# kSecPaddingPKCS1 (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.6+ (deprecated in 12.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

PKCS1 padding.

> Replaced with SecKeyAlgorithm

## Declaration

```objectivec
kSecPaddingPKCS1
```

<a id="Discussion"></a>

## Discussion

For elliptic curve, defaults to a signature in x9.62 DER encoding.
