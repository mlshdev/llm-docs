> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustcopyanchorcertificates(_:)](https://developer.apple.com/documentation/security/sectrustcopyanchorcertificates(_:))

# SecTrustCopyAnchorCertificates(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+

Retrieves the anchor (root) certificates stored by macOS.

## Declaration

```swift
func SecTrustCopyAnchorCertificates(_ anchors: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `anchors`: On return, points to an array of certificate objects for trusted anchor (root) certificates, which is the default set of anchors for the caller. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the [CFArray](../corefoundation/cfarray.md) object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function retrieves the certificates in the system’s store of anchor certificates (see [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md)). You can use the [SecCertificate](seccertificate.md) objects retrieved by this function as input to other functions of this API, such as [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md).

It is safe to call this function concurrently on two or more threads as long as it is not used to get values from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md): Sets the anchor certificates used when evaluating a trust management object.

# SecTrustCopyAnchorCertificates (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+

Retrieves the anchor (root) certificates stored by macOS.

## Declaration

```objectivec
OSStatus SecTrustCopyAnchorCertificates(CFArrayRef*anchors);
```

## Parameters

- `anchors`: On return, points to an array of certificate objects for trusted anchor (root) certificates, which is the default set of anchors for the caller. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the [CFArrayRef](../corefoundation/cfarray.md) object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function retrieves the certificates in the system’s store of anchor certificates (see [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md)). You can use the [SecCertificateRef](seccertificate.md) objects retrieved by this function as input to other functions of this API, such as [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md).

It is safe to call this function concurrently on two or more threads as long as it is not used to get values from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md): Sets the anchor certificates used when evaluating a trust management object.
