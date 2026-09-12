> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopysignertimestampcertificates(_:_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopysignertimestampcertificates(_:_:_:))

# CMSDecoderCopySignerTimestampCertificates(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns an array containing the certificates from a timestamp response.

## Declaration

```swift
func CMSDecoderCopySignerTimestampCertificates(_ cmsDecoder: CMSDecoder, _ signerIndex: Int, _ certificateRefs: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `cmsDecoder`: A CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `certificateRefs`: The address of a Core Foundation array reference where the resulting array should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Typically, this function returns [errSecParam](errsecparam.md) if the CMS message was not signed or `signerIndex` is out of bounds, and returns [errSecItemNotFound](errsecitemnotfound.md) if no certificates were found.

<a id="Discussion"></a>

## Discussion

The signature must contain an authenticated timestamp provided by a time stamping authority. Elements of the returned array are of type `SecCertificateRef`. The caller is responsible for releasing the returned array by calling `CFRelease`.

You must call [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md) before you call this function.

# CMSDecoderCopySignerTimestampCertificates (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns an array containing the certificates from a timestamp response.

## Declaration

```objectivec
OSStatus CMSDecoderCopySignerTimestampCertificates(CMSDecoderRef cmsDecoder, size_t signerIndex, CFArrayRef*certificateRefs);
```

## Parameters

- `cmsDecoder`: A CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `certificateRefs`: The address of a Core Foundation array reference where the resulting array should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Typically, this function returns [errSecParam](errsecparam.md) if the CMS message was not signed or `signerIndex` is out of bounds, and returns [errSecItemNotFound](errsecitemnotfound.md) if no certificates were found.

<a id="Discussion"></a>

## Discussion

The signature must contain an authenticated timestamp provided by a time stamping authority. Elements of the returned array are of type `SecCertificateRef`. The caller is responsible for releasing the returned array by calling `CFRelease`.

You must call [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md) before you call this function.
