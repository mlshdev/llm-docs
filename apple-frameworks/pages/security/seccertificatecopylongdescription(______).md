> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopylongdescription(_:_:_:)](https://developer.apple.com/documentation/security/seccertificatecopylongdescription(_:_:_:))

# SecCertificateCopyLongDescription(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Returns a copy of the long description of a certificate.

## Declaration

```swift
func SecCertificateCopyLongDescription(_ alloc: CFAllocator?, _ certificate: SecCertificate, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFString?
```

## Parameters

- `alloc`: The allocator that should be used. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `certificate`: The certificate from which the long description should be copied.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A string object containing the long description, or `NULL` if an error occurred. In Objective-C, free this object with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

The format of this string is not guaranteed to be consistent across different operating systems or versions. Do not attempt to parse it programmatically.

# SecCertificateCopyLongDescription (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Returns a copy of the long description of a certificate.

## Declaration

```objectivec
CFStringRefSecCertificateCopyLongDescription(CFAllocatorRef alloc, SecCertificateRef certificate, CFErrorRef*error);
```

## Parameters

- `alloc`: The allocator that should be used. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `certificate`: The certificate from which the long description should be copied.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A string object containing the long description, or `NULL` if an error occurred. In Objective-C, free this object with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

The format of this string is not guaranteed to be consistent across different operating systems or versions. Do not attempt to parse it programmatically.
