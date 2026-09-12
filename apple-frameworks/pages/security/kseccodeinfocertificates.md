> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfocertificates](https://developer.apple.com/documentation/security/kseccodeinfocertificates)

# kSecCodeInfoCertificates (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is an array of certificates representing the certificate chain of the signing certificate as seen by the system.

## Declaration

```swift
let kSecCodeInfoCertificates: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArray](../corefoundation/cfarray.md) array of [SecCertificate](seccertificate.md) objects that the system uses to process the signature. Absent for ad-hoc signed code. May be partial or absent in the case of error.

Specify the [kSecCSSigningInformation](kseccssigninginformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoCertificates (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is an array of certificates representing the certificate chain of the signing certificate as seen by the system.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoCertificates;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArrayRef](../corefoundation/cfarray.md) array of [SecCertificateRef](seccertificate.md) objects that the system uses to process the signature. Absent for ad-hoc signed code. May be partial or absent in the case of error.

Specify the [kSecCSSigningInformation](kseccssigninginformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
