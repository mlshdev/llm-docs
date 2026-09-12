> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcertificateencoding](https://developer.apple.com/documentation/security/ksecattrcertificateencoding)

# kSecAttrCertificateEncoding (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s certificate encoding.

## Declaration

```swift
let kSecAttrCertificateEncoding: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and denotes the certificate encoding (see the `CSSM_CERT_ENCODING` enumeration in cssmtype.h). Items of class [kSecClassCertificate](ksecclasscertificate.md) have this attribute. Read only.

# kSecAttrCertificateEncoding (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s certificate encoding.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCertificateEncoding;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and denotes the certificate encoding (see the `CSSM_CERT_ENCODING` enumeration in cssmtype.h). Items of class [kSecClassCertificate](ksecclasscertificate.md) have this attribute. Read only.
