> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecoderfinalizemessage(_:)](https://developer.apple.com/documentation/security/cmsdecoderfinalizemessage(_:))

# CMSDecoderFinalizeMessage(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Indicates that there is no more data to decode.

## Declaration

```swift
func CMSDecoderFinalizeMessage(_ cmsDecoder: CMSDecoder) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecUnknownFormat](errsecunknownformat.md) upon detection of an improperly formatted CMS message.

<a id="Discussion"></a>

## Discussion

When you call this function, the decoder finishes decoding the message. If the message was encrypted and this function returns a result code of `noErr`, the message was successfully decrypted. Call the [CMSDecoderCopyContent(\_:\_:)](cmsdecodercopycontent%28____%29.md) function to retrieve the message content. Call the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) function to find out if the message was signed and, if so, how many signers there were.

## See Also

### Related Documentation

- [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md): Obtains the number of signers of a message.
- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderCopyContent(\_:\_:)](cmsdecodercopycontent%28____%29.md): Obtains the message content, if any.

# CMSDecoderFinalizeMessage (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Indicates that there is no more data to decode.

## Declaration

```objectivec
OSStatus CMSDecoderFinalizeMessage(CMSDecoderRef cmsDecoder);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecUnknownFormat](errsecunknownformat.md) upon detection of an improperly formatted CMS message.

<a id="Discussion"></a>

## Discussion

When you call this function, the decoder finishes decoding the message. If the message was encrypted and this function returns a result code of `noErr`, the message was successfully decrypted. Call the [CMSDecoderCopyContent](cmsdecodercopycontent%28____%29.md) function to retrieve the message content. Call the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) function to find out if the message was signed and, if so, how many signers there were.

## See Also

### Related Documentation

- [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md): Obtains the number of signers of a message.
- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderCopyContent](cmsdecodercopycontent%28____%29.md): Obtains the message content, if any.
