> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercreate(_:)](https://developer.apple.com/documentation/security/cmsdecodercreate(_:))

# CMSDecoderCreate(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a CMSDecoder reference.

## Declaration

```swift
func CMSDecoderCreate(_ cmsDecoderOut: UnsafeMutablePointer<CMSDecoder?>) -> OSStatus
```

## Parameters

- `cmsDecoderOut`: On return, points to a CMSDecoder reference. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This is the first function in a sequence of decoder functions that you call to get information from a CMS message. The other functions in the sequence require you to pass in the CMSDecoder reference returned by this function. The next function in the sequence is `CMSDecoderUpdateMessage`.

## See Also

### Related Documentation

- [CMSDecoderUpdateMessage(\_:\_:\_:)](cmsdecoderupdatemessage%28______%29.md): Feeds raw bytes of the message to be decoded into the decoder.

# CMSDecoderCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a CMSDecoder reference.

## Declaration

```objectivec
OSStatus CMSDecoderCreate(CMSDecoderRef*cmsDecoderOut);
```

## Parameters

- `cmsDecoderOut`: On return, points to a CMSDecoder reference. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This is the first function in a sequence of decoder functions that you call to get information from a CMS message. The other functions in the sequence require you to pass in the CMSDecoder reference returned by this function. The next function in the sequence is `CMSDecoderUpdateMessage`.

## See Also

### Related Documentation

- [CMSDecoderUpdateMessage](cmsdecoderupdatemessage%28______%29.md): Feeds raw bytes of the message to be decoded into the decoder.
