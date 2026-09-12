> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopysignercert(_:_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopysignercert(_:_:_:))

# CMSDecoderCopySignerCert(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the certificate of the specified signer of a CMS message.

## Declaration

```swift
func CMSDecoderCopySignerCert(_ cmsDecoder: CMSDecoder, _ signerIndex: Int, _ signerCertOut: UnsafeMutablePointer<SecCertificate?>) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer’s email address to return. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `signerCertOut`: On return, points to the certificate of the specified signer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecParam](errsecparam.md) if the CMS message was not signed or if `signerIndex` is greater than the number of signers of the message minus one (signerIndex \> (numSigners – 1)).

<a id="Discussion"></a>

## Discussion

You cannot call this function until after you have called the [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md) function.

## See Also

### Related Documentation

- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.

# CMSDecoderCopySignerCert (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the certificate of the specified signer of a CMS message.

## Declaration

```objectivec
OSStatus CMSDecoderCopySignerCert(CMSDecoderRef cmsDecoder, size_t signerIndex, SecCertificateRef*signerCertOut);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer’s email address to return. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `signerCertOut`: On return, points to the certificate of the specified signer.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecParam](errsecparam.md) if the CMS message was not signed or if `signerIndex` is greater than the number of signers of the message minus one (signerIndex \> (numSigners – 1)).

<a id="Discussion"></a>

## Discussion

You cannot call this function until after you have called the [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md) function.

## See Also

### Related Documentation

- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.
