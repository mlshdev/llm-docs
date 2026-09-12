> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrpublickeyhash](https://developer.apple.com/documentation/security/ksecattrpublickeyhash)

# kSecAttrPublicKeyHash (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s public key hash.

## Declaration

```swift
let kSecAttrPublicKeyHash: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFData](../corefoundation/cfdata.md) and contains the hash of a certificate’s public key. Items of class [kSecClassCertificate](ksecclasscertificate.md) have this attribute. Read only.

# kSecAttrPublicKeyHash (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s public key hash.

## Declaration

```objectivec
extern CFStringRef const kSecAttrPublicKeyHash;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDataRef](../corefoundation/cfdata.md) and contains the hash of a certificate’s public key. Items of class [kSecClassCertificate](ksecclasscertificate.md) have this attribute. Read only.
