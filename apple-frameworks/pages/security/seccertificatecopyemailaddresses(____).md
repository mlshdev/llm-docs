> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopyemailaddresses(_:_:)](https://developer.apple.com/documentation/security/seccertificatecopyemailaddresses(_:_:))

# SecCertificateCopyEmailAddresses(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

Retrieves the email addresses for the subject of a certificate.

## Declaration

```swift
func SecCertificateCopyEmailAddresses(_ certificate: SecCertificate, _ emailAddresses: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `certificate`: The certificate object from which to retrieve the email addresses.
- `emailAddresses`: On return, an array of zero or more `CFStringRef` elements, each containing one email address found in the certificate subject. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Not every certificate subject includes an email address. If the function does not find any email addresses, it returns a `CFArrayRef` object with zero elements in the array.

# SecCertificateCopyEmailAddresses (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

Retrieves the email addresses for the subject of a certificate.

## Declaration

```objectivec
OSStatus SecCertificateCopyEmailAddresses(SecCertificateRef certificate, CFArrayRef*emailAddresses);
```

## Parameters

- `certificate`: The certificate object from which to retrieve the email addresses.
- `emailAddresses`: On return, an array of zero or more `CFStringRef` elements, each containing one email address found in the certificate subject. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Not every certificate subject includes an email address. If the function does not find any email addresses, it returns a `CFArrayRef` object with zero elements in the array.
