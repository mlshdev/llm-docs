> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencoderaddsigners(_:_:)](https://developer.apple.com/documentation/security/cmsencoderaddsigners(_:_:))

# CMSEncoderAddSigners(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies signers of the message.

## Declaration

```swift
func CMSEncoderAddSigners(_ cmsEncoder: CMSEncoder, _ signerOrArray: CFTypeRef) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `signerOrArray`: The identity object for the identity of one signer, specified as type `SecIdentityRef`, or a `CFArray` of identity objects of type`SecIdentityRef`.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this function only if the message is to be signed. You can call this function more than once for the same message.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCopySigners(\_:\_:)](cmsencodercopysigners%28____%29.md): Obtains the array of signers specified with the `CMSEncoderAddSigners` function.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSDecoderCopySignerStatus(\_:\_:\_:\_:\_:\_:\_:)](cmsdecodercopysignerstatus%28______________%29.md): Obtains the status of a CMS message’s signature.

# CMSEncoderAddSigners (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies signers of the message.

## Declaration

```objectivec
OSStatus CMSEncoderAddSigners(CMSEncoderRef cmsEncoder, CFTypeRef signerOrArray);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `signerOrArray`: The identity object for the identity of one signer, specified as type `SecIdentityRef`, or a `CFArray` of identity objects of type`SecIdentityRef`.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this function only if the message is to be signed. You can call this function more than once for the same message.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCopySigners](cmsencodercopysigners%28____%29.md): Obtains the array of signers specified with the `CMSEncoderAddSigners` function.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSDecoderCopySignerStatus](cmsdecodercopysignerstatus%28______________%29.md): Obtains the status of a CMS message’s signature.
