> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecimportitemcertchain](https://developer.apple.com/documentation/security/ksecimportitemcertchain)

# kSecImportItemCertChain (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Certificate list.

## Declaration

```swift
let kSecImportItemCertChain: CFString
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `CFArrayRef`. The array consists of `SecCertificateRef` objects for all the certificates in the PKCS #12 blob. This list might differ from that in the trust management object if there is more than one identity in the blob or if the blob contains extra certificates (for example, an intermediate certificate that is not yet valid but might be needed to establish validity in the near future).

# kSecImportItemCertChain (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Certificate list.

## Declaration

```objectivec
extern CFStringRef const kSecImportItemCertChain;
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `CFArrayRef`. The array consists of `SecCertificateRef` objects for all the certificates in the PKCS #12 blob. This list might differ from that in the trust management object if there is more than one identity in the blob or if the blob contains extra certificates (for example, an intermediate certificate that is not yet valid but might be needed to establish validity in the near future).
