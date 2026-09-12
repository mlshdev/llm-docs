> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopydetachedcontent(_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopydetachedcontent(_:_:))

# CMSDecoderCopyDetachedContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the detached content specified with the `CMSDecoderSetDetachedContent` function.

## Declaration

```swift
func CMSDecoderCopyDetachedContent(_ cmsDecoder: CMSDecoder, _ detachedContentOut: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `detachedContentOut`: On return, points to the data reference specified by an earlier call to the `CMSDecoderSetDetachedContent` function. Returns a NULL data reference if no detached content has been specified. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.

# CMSDecoderCopyDetachedContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the detached content specified with the `CMSDecoderSetDetachedContent` function.

## Declaration

```objectivec
OSStatus CMSDecoderCopyDetachedContent(CMSDecoderRef cmsDecoder, CFDataRef*detachedContentOut);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `detachedContentOut`: On return, points to the data reference specified by an earlier call to the `CMSDecoderSetDetachedContent` function. Returns a NULL data reference if no detached content has been specified. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
