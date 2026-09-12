> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffercreateresolvedattributesdictionary(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffercreateresolvedattributesdictionary(_:_:_:))

# CVPixelBufferCreateResolvedAttributesDictionary(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.

## Declaration

```swift
func CVPixelBufferCreateResolvedAttributesDictionary(_ allocator: CFAllocator?, _ attributes: CFArray?, _ resolvedDictionaryOut: UnsafeMutablePointer<CFDictionary?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use to create the pixel buffer. Pass `NULL` to specify the default allocator.
- `attributes`: An array of Core Foundation dictionaries containing pixel buffer attribute key-value pairs.
- `resolvedDictionaryOut`: On output, the consolidated dictionary. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

This call is useful when you need to resolve requirements between several potential clients of a buffer.

If two or more dictionaries contain the same key but different values, this function adjusts values where possible so that the output dictionary contains a mutually compatible set of values. For example, if the `attributes` parameter contains dictionaries whose bytes-per-row attributes differ, the `rowBytes` value in the output dictionary is the least common multiple of the input values.

Some mismatched attributes cannot be resolved. Calling this function results in an error if the widths, heights, pixel format allocators, or callbacks in the input dictionaries do not match.

## See Also

### Inspecting Pixel Buffers

- [CVPixelBufferGetBaseAddress(\_:)](cvpixelbuffergetbaseaddress%28__%29.md): Returns the base address of the pixel buffer.
- [CVPixelBufferGetBaseAddressOfPlane(\_:\_:)](cvpixelbuffergetbaseaddressofplane%28____%29.md): Returns the base address of the plane at the specified plane index.
- [CVPixelBufferGetBytesPerRow(\_:)](cvpixelbuffergetbytesperrow%28__%29.md): Returns the number of bytes per row of the pixel buffer.
- [CVPixelBufferGetBytesPerRowOfPlane(\_:\_:)](cvpixelbuffergetbytesperrowofplane%28____%29.md): Returns the number of bytes per row for a plane at the specified index in the pixel buffer.
- [CVPixelBufferGetHeight(\_:)](cvpixelbuffergetheight%28__%29.md): Returns the height of the pixel buffer.
- [CVPixelBufferGetHeightOfPlane(\_:\_:)](cvpixelbuffergetheightofplane%28____%29.md): Returns the height of the plane at planeIndex in the pixel buffer.
- [CVPixelBufferGetWidth(\_:)](cvpixelbuffergetwidth%28__%29.md): Returns the width of the pixel buffer.
- [CVPixelBufferGetWidthOfPlane(\_:\_:)](cvpixelbuffergetwidthofplane%28____%29.md): Returns the width of the plane at a given index in the pixel buffer.
- [CVPixelBufferIsPlanar(\_:)](cvpixelbufferisplanar%28__%29.md): Determines whether the pixel buffer is planar.
- [CVPixelBufferGetPlaneCount(\_:)](cvpixelbuffergetplanecount%28__%29.md): Returns number of planes of the pixel buffer.
- [CVPixelBufferGetDataSize(\_:)](cvpixelbuffergetdatasize%28__%29.md): Returns the data size for contiguous planes of the pixel buffer.
- [CVPixelBufferGetPixelFormatType(\_:)](cvpixelbuffergetpixelformattype%28__%29.md): Returns the pixel format type of the pixel buffer.
- [CVPixelBufferGetExtendedPixels(\_:\_:\_:\_:\_:)](cvpixelbuffergetextendedpixels%28__________%29.md): Returns the amount of extended pixel padding in the pixel buffer.
- [CVPixelBufferGetIOSurface(\_:)](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferIsCompatibleWithAttributes(\_:\_:)](cvpixelbufferiscompatiblewithattributes%28____%29.md)

# CVPixelBufferCreateResolvedAttributesDictionary (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.

## Declaration

```objectivec
extern CVReturn CVPixelBufferCreateResolvedAttributesDictionary(CFAllocatorRef allocator, CFArrayRef attributes, CFDictionaryRef*resolvedDictionaryOut);
```

## Parameters

- `allocator`: The allocator to use to create the pixel buffer. Pass `NULL` to specify the default allocator.
- `attributes`: An array of Core Foundation dictionaries containing pixel buffer attribute key-value pairs.
- `resolvedDictionaryOut`: On output, the consolidated dictionary. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

This call is useful when you need to resolve requirements between several potential clients of a buffer.

If two or more dictionaries contain the same key but different values, this function adjusts values where possible so that the output dictionary contains a mutually compatible set of values. For example, if the `attributes` parameter contains dictionaries whose bytes-per-row attributes differ, the `rowBytes` value in the output dictionary is the least common multiple of the input values.

Some mismatched attributes cannot be resolved. Calling this function results in an error if the widths, heights, pixel format allocators, or callbacks in the input dictionaries do not match.

## See Also

### Inspecting Pixel Buffers

- [CVPixelBufferGetBaseAddress](cvpixelbuffergetbaseaddress%28__%29.md): Returns the base address of the pixel buffer.
- [CVPixelBufferGetBaseAddressOfPlane](cvpixelbuffergetbaseaddressofplane%28____%29.md): Returns the base address of the plane at the specified plane index.
- [CVPixelBufferGetBytesPerRow](cvpixelbuffergetbytesperrow%28__%29.md): Returns the number of bytes per row of the pixel buffer.
- [CVPixelBufferGetBytesPerRowOfPlane](cvpixelbuffergetbytesperrowofplane%28____%29.md): Returns the number of bytes per row for a plane at the specified index in the pixel buffer.
- [CVPixelBufferGetHeight](cvpixelbuffergetheight%28__%29.md): Returns the height of the pixel buffer.
- [CVPixelBufferGetHeightOfPlane](cvpixelbuffergetheightofplane%28____%29.md): Returns the height of the plane at planeIndex in the pixel buffer.
- [CVPixelBufferGetWidth](cvpixelbuffergetwidth%28__%29.md): Returns the width of the pixel buffer.
- [CVPixelBufferGetWidthOfPlane](cvpixelbuffergetwidthofplane%28____%29.md): Returns the width of the plane at a given index in the pixel buffer.
- [CVPixelBufferIsPlanar](cvpixelbufferisplanar%28__%29.md): Determines whether the pixel buffer is planar.
- [CVPixelBufferGetPlaneCount](cvpixelbuffergetplanecount%28__%29.md): Returns number of planes of the pixel buffer.
- [CVPixelBufferGetDataSize](cvpixelbuffergetdatasize%28__%29.md): Returns the data size for contiguous planes of the pixel buffer.
- [CVPixelBufferGetPixelFormatType](cvpixelbuffergetpixelformattype%28__%29.md): Returns the pixel format type of the pixel buffer.
- [CVPixelBufferGetExtendedPixels](cvpixelbuffergetextendedpixels%28__________%29.md): Returns the amount of extended pixel padding in the pixel buffer.
- [CVPixelBufferGetIOSurface](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferIsCompatibleWithAttributes](cvpixelbufferiscompatiblewithattributes%28____%29.md)
