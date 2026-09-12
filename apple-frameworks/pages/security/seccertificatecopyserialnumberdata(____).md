> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopyserialnumberdata(_:_:)](https://developer.apple.com/documentation/security/seccertificatecopyserialnumberdata(_:_:))

# SecCertificateCopySerialNumberData(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the certificate’s serial number.

## Declaration

```swift
func SecCertificateCopySerialNumberData(_ certificate: SecCertificate, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

## Parameters

- `certificate`: The certificate from which to copy the serial number.
- `error`: A [CFError](../corefoundation/cferror.md) pointer the function uses to return an error instance on failure. Set to `nil` to ignore any error.

<a id="return-value"></a>

## Return Value

The content of a DER-encoded integer (without the tag and length fields) for this certificate’s serial number.

<a id="Discussion"></a>

## Discussion

In Objective-C, if the function returns an error free it with a call to [CFRelease](../corefoundation/cfrelease.md) when you are done with it. If it returns data, you must free that as well.

# SecCertificateCopySerialNumberData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the certificate’s serial number.

## Declaration

```objectivec
CFDataRefSecCertificateCopySerialNumberData(SecCertificateRef certificate, CFErrorRef*error);
```

## Parameters

- `certificate`: The certificate from which to copy the serial number.
- `error`: A [CFErrorRef](../corefoundation/cferror.md) pointer the function uses to return an error instance on failure. Set to `nil` to ignore any error.

<a id="return-value"></a>

## Return Value

The content of a DER-encoded integer (without the tag and length fields) for this certificate’s serial number.

<a id="Discussion"></a>

## Discussion

In Objective-C, if the function returns an error free it with a call to [CFRelease](../corefoundation/cfrelease.md) when you are done with it. If it returns data, you must free that as well.
