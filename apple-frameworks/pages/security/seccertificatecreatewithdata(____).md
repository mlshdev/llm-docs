> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecreatewithdata(_:_:)](https://developer.apple.com/documentation/security/seccertificatecreatewithdata(_:_:))

# SecCertificateCreateWithData(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a certificate object from a DER representation of a certificate.

## Declaration

```swift
func SecCertificateCreateWithData(_ allocator: CFAllocator?, _ data: CFData) -> SecCertificate?
```

## Parameters

- `allocator`: The `CFAllocator` object you wish to use to allocate the certificate object. Pass `NULL` to use the default allocator.
- `data`: A DER (Distinguished Encoding Rules) representation of an X.509 certificate.

<a id="return-value"></a>

## Return Value

The newly created certificate object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it. Returns `nil` if the data passed in the `data` parameter is not a valid DER-encoded X.509 certificate.

## Mentioned In

- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md)

<a id="Discussion"></a>

## Discussion

The certificate object returned by this function is used as input to other functions in the API.

# SecCertificateCreateWithData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a certificate object from a DER representation of a certificate.

## Declaration

```objectivec
SecCertificateRefSecCertificateCreateWithData(CFAllocatorRef allocator, CFDataRef data);
```

## Parameters

- `allocator`: The `CFAllocator` object you wish to use to allocate the certificate object. Pass `NULL` to use the default allocator.
- `data`: A DER (Distinguished Encoding Rules) representation of an X.509 certificate.

<a id="return-value"></a>

## Return Value

The newly created certificate object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it. Returns `nil` if the data passed in the `data` parameter is not a valid DER-encoded X.509 certificate.

## Mentioned In

- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md)

<a id="Discussion"></a>

## Discussion

The certificate object returned by this function is used as input to other functions in the API.
