> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodergethasdetachedcontent(_:_:)](https://developer.apple.com/documentation/security/cmsencodergethasdetachedcontent(_:_:))

# CMSEncoderGetHasDetachedContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Indicates whether the message is to have detached content.

## Declaration

```swift
func CMSEncoderGetHasDetachedContent(_ cmsEncoder: CMSEncoder, _ detachedContentOut: UnsafeMutablePointer<DarwinBoolean>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `detachedContentOut`: Returns `TRUE` if the message has detached content.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function returns the value specified in `CMSEncoderSetHasDetachedContent` if that function has been called; otherwise it returns `FALSE`.

## See Also

### Related Documentation

- [CMSEncoderSetHasDetachedContent(\_:\_:)](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.

# CMSEncoderGetHasDetachedContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Indicates whether the message is to have detached content.

## Declaration

```objectivec
OSStatus CMSEncoderGetHasDetachedContent(CMSEncoderRef cmsEncoder, Boolean *detachedContentOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `detachedContentOut`: Returns `TRUE` if the message has detached content.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function returns the value specified in `CMSEncoderSetHasDetachedContent` if that function has been called; otherwise it returns `FALSE`.

## See Also

### Related Documentation

- [CMSEncoderSetHasDetachedContent](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
