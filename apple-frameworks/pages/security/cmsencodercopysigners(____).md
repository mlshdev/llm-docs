> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercopysigners(_:_:)](https://developer.apple.com/documentation/security/cmsencodercopysigners(_:_:))

# CMSEncoderCopySigners(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the array of signers specified with the `CMSEncoderAddSigners` function.

## Declaration

```swift
func CMSEncoderCopySigners(_ cmsEncoder: CMSEncoder, _ signersOut: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md) function.
- `signersOut`: On return, points to an array of identity objects of type [SecIdentity](secidentity.md) of the signers of the message. If the [CMSEncoderAddSigners(\_:\_:)](cmsencoderaddsigners%28____%29.md) function has not been called for this message, this function returns a `NULL` array. You must use the [CFRelease](../corefoundation/cfrelease.md) function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddSigners(\_:\_:)](cmsencoderaddsigners%28____%29.md): Specifies signers of the message.

# CMSEncoderCopySigners (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the array of signers specified with the `CMSEncoderAddSigners` function.

## Declaration

```objectivec
OSStatus CMSEncoderCopySigners(CMSEncoderRef cmsEncoder, CFArrayRef*signersOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate](cmsencodercreate%28__%29.md) function.
- `signersOut`: On return, points to an array of identity objects of type [SecIdentityRef](secidentity.md) of the signers of the message. If the [CMSEncoderAddSigners](cmsencoderaddsigners%28____%29.md) function has not been called for this message, this function returns a `NULL` array. You must use the [CFRelease](../corefoundation/cfrelease.md) function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddSigners](cmsencoderaddsigners%28____%29.md): Specifies signers of the message.
