> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopysignertimestamp(_:_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopysignertimestamp(_:_:_:))

# CMSDecoderCopySignerTimestamp(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns the timestamp of a signer of a CMS message, if present.

## Declaration

```swift
func CMSDecoderCopySignerTimestamp(_ cmsDecoder: CMSDecoder, _ signerIndex: Int, _ timestamp: UnsafeMutablePointer<CFAbsoluteTime>) -> OSStatus
```

## Parameters

- `cmsDecoder`: A CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `timestamp`: The address of an absolute time value where the result should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Typically, this function returns [errSecParam](errsecparam.md) if the CMS message was not signed or if `signerIndex` is out of bounds.

<a id="Discussion"></a>

## Discussion

This timestamp is an authenticated timestamp provided by a time stamping authority.

You must call [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md) before you call this function.

# CMSDecoderCopySignerTimestamp (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns the timestamp of a signer of a CMS message, if present.

## Declaration

```objectivec
OSStatus CMSDecoderCopySignerTimestamp(CMSDecoderRef cmsDecoder, size_t signerIndex, CFAbsoluteTime *timestamp);
```

## Parameters

- `cmsDecoder`: A CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `timestamp`: The address of an absolute time value where the result should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Typically, this function returns [errSecParam](errsecparam.md) if the CMS message was not signed or if `signerIndex` is out of bounds.

<a id="Discussion"></a>

## Discussion

This timestamp is an authenticated timestamp provided by a time stamping authority.

You must call [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md) before you call this function.
