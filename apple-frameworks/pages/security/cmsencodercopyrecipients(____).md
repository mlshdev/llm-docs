> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercopyrecipients(_:_:)](https://developer.apple.com/documentation/security/cmsencodercopyrecipients(_:_:))

# CMSEncoderCopyRecipients(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the array of recipients specified with the `CMSEncoderAddRecipients` function.

## Declaration

```swift
func CMSEncoderCopyRecipients(_ cmsEncoder: CMSEncoder, _ recipientsOut: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md) function.
- `recipientsOut`: On return, points to an array of certificate objects of type [SecCertificate](seccertificate.md) of the recipients of the message. If the [CMSEncoderAddRecipients(\_:\_:)](cmsencoderaddrecipients%28____%29.md) function has not been called for this message, this function returns a `NULL` array. You must use the [CFRelease](../corefoundation/cfrelease.md) function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddRecipients(\_:\_:)](cmsencoderaddrecipients%28____%29.md): Specifies a message is to be encrypted and specifies the recipients of the message.

# CMSEncoderCopyRecipients (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the array of recipients specified with the `CMSEncoderAddRecipients` function.

## Declaration

```objectivec
OSStatus CMSEncoderCopyRecipients(CMSEncoderRef cmsEncoder, CFArrayRef*recipientsOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate](cmsencodercreate%28__%29.md) function.
- `recipientsOut`: On return, points to an array of certificate objects of type [SecCertificateRef](seccertificate.md) of the recipients of the message. If the [CMSEncoderAddRecipients](cmsencoderaddrecipients%28____%29.md) function has not been called for this message, this function returns a `NULL` array. You must use the [CFRelease](../corefoundation/cfrelease.md) function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddRecipients](cmsencoderaddrecipients%28____%29.md): Specifies a message is to be encrypted and specifies the recipients of the message.
