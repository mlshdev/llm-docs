> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopydata(_:)](https://developer.apple.com/documentation/security/seccertificatecopydata(_:))

# SecCertificateCopyData(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a DER representation of a certificate given a certificate object.

## Declaration

```swift
func SecCertificateCopyData(_ certificate: SecCertificate) -> CFData
```

## Parameters

- `certificate`: The certificate object for which you wish to return the DER (Distinguished Encoding Rules) representation of the X.509 certificate.

<a id="return-value"></a>

## Return Value

The DER representation of the certificate. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it. Returns `nil` if the data passed in the `certificate` parameter is not a valid certificate object.

## Mentioned In

- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md)

# SecCertificateCopyData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a DER representation of a certificate given a certificate object.

## Declaration

```objectivec
CFDataRefSecCertificateCopyData(SecCertificateRef certificate);
```

## Parameters

- `certificate`: The certificate object for which you wish to return the DER (Distinguished Encoding Rules) representation of the X.509 certificate.

<a id="return-value"></a>

## Return Value

The DER representation of the certificate. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it. Returns `nil` if the data passed in the `certificate` parameter is not a valid certificate object.

## Mentioned In

- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md)
