> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopysignersigningtime(_:_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopysignersigningtime(_:_:_:))

# CMSDecoderCopySignerSigningTime(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.8+

Obtains the signing time of a CMS message, if present.

## Declaration

```swift
func CMSDecoderCopySignerSigningTime(_ cmsDecoder: CMSDecoder, _ signerIndex: Int, _ signingTime: UnsafeMutablePointer<CFAbsoluteTime>) -> OSStatus
```

## Parameters

- `cmsDecoder`: A CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `signingTime`: The address of an absolute time value where the result should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Typically, this function returns [errSecParam](errsecparam.md) if the CMS message was not signed or if `signerIndex` is out of bounds.

<a id="Discussion"></a>

## Discussion

The timestamp is an unauthenticated time, although it is part of the signed attributes of the message.

You must call [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md) before you call this function.

# CMSDecoderCopySignerSigningTime (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.8+

Obtains the signing time of a CMS message, if present.

## Declaration

```objectivec
OSStatus CMSDecoderCopySignerSigningTime(CMSDecoderRef cmsDecoder, size_t signerIndex, CFAbsoluteTime *signingTime);
```

## Parameters

- `cmsDecoder`: A CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `signingTime`: The address of an absolute time value where the result should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Typically, this function returns [errSecParam](errsecparam.md) if the CMS message was not signed or if `signerIndex` is out of bounds.

<a id="Discussion"></a>

## Discussion

The timestamp is an unauthenticated time, although it is part of the signed attributes of the message.

You must call [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md) before you call this function.
