> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercopyencodedcontent(_:_:)](https://developer.apple.com/documentation/security/cmsencodercopyencodedcontent(_:_:))

# CMSEncoderCopyEncodedContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Finishes encoding the message and obtains the encoded result.

## Declaration

```swift
func CMSEncoderCopyEncodedContent(_ cmsEncoder: CMSEncoder, _ encodedContentOut: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `encodedContentOut`: On return, points to the encoded message. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This is the last function in the sequence of encoding functions you call when creating a signed or encrypted message. In many cases, you can call the `CMSEncode` function alone instead of using the sequence of encoding functions.

# CMSEncoderCopyEncodedContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Finishes encoding the message and obtains the encoded result.

## Declaration

```objectivec
OSStatus CMSEncoderCopyEncodedContent(CMSEncoderRef cmsEncoder, CFDataRef*encodedContentOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `encodedContentOut`: On return, points to the encoded message. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This is the last function in the sequence of encoding functions you call when creating a signed or encrypted message. In many cases, you can call the `CMSEncode` function alone instead of using the sequence of encoding functions.
