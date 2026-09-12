> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpadding/pkcs1md2](https://developer.apple.com/documentation/security/secpadding/pkcs1md2)

# PKCS1MD2 (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.6+ (deprecated in 12.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Data to be signed is an MD2 hash.

> Replaced with SecKeyAlgorithm

## Declaration

```swift
static var PKCS1MD2: SecPadding { get }
```

<a id="Discussion"></a>

## Discussion

Standard ASN.1 padding is done, as well as PKCS1 padding of the underlying RSA operation. Used with [SecKeyRawSign(\_:\_:\_:\_:\_:\_:)](../seckeyrawsign%28____________%29.md) and [SecKeyRawVerify(\_:\_:\_:\_:\_:\_:)](../seckeyrawverify%28____________%29.md) only.

# kSecPaddingPKCS1MD2 (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.6+ (deprecated in 12.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Data to be signed is an MD2 hash.

> Replaced with SecKeyAlgorithm

## Declaration

```objectivec
kSecPaddingPKCS1MD2
```

<a id="Discussion"></a>

## Discussion

Standard ASN.1 padding is done, as well as PKCS1 padding of the underlying RSA operation. Used with [SecKeyRawSign](../seckeyrawsign%28____________%29.md) and [SecKeyRawVerify](../seckeyrawverify%28____________%29.md) only.
