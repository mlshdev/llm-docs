> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrcertificatetype](https://developer.apple.com/documentation/security/ksecattrcertificatetype)

# kSecAttrCertificateType (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s certificate type.

## Declaration

```swift
let kSecAttrCertificateType: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and denotes the certificate type (see the `CSSM_CERT_TYPE` enumeration in cssmtype.h). Items of class [kSecClassCertificate](ksecclasscertificate.md) have this attribute. Read only.

# kSecAttrCertificateType (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s certificate type.

## Declaration

```objectivec
extern CFStringRef const kSecAttrCertificateType;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and denotes the certificate type (see the `CSSM_CERT_TYPE` enumeration in cssmtype.h). Items of class [kSecClassCertificate](ksecclasscertificate.md) have this attribute. Read only.
