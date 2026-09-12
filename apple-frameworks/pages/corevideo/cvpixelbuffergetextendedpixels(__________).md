> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffergetextendedpixels(_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffergetextendedpixels(_:_:_:_:_:))

# CVPixelBufferGetExtendedPixels(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the amount of extended pixel padding in the pixel buffer.

## Declaration

```swift
func CVPixelBufferGetExtendedPixels(_ pixelBuffer: CVPixelBuffer, _ extraColumnsOnLeft: UnsafeMutablePointer<Int>?, _ extraColumnsOnRight: UnsafeMutablePointer<Int>?, _ extraRowsOnTop: UnsafeMutablePointer<Int>?, _ extraRowsOnBottom: UnsafeMutablePointer<Int>?)
```

## Parameters

- `pixelBuffer`: The pixel buffer whose extended pixel size you want to obtain.
- `extraColumnsOnLeft`: On output, the pixel row padding to the left.  Pass `NULL` if you do not want this information.
- `extraColumnsOnRight`: On output, the pixel row padding to the right. Pass `NULL` if you do not want this information.
- `extraRowsOnTop`: On output, the pixel row padding to the top.  Pass `NULL` if you do not want this information.
- `extraRowsOnBottom`: On output, the pixel row padding to the bottom. Pass `NULL` if you do not want this information.

<a id="Discussion"></a>

## Discussion

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
- [CVPixelBufferGetIOSurface(\_:)](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferCreateResolvedAttributesDictionary(\_:\_:\_:)](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes(\_:\_:)](cvpixelbufferiscompatiblewithattributes%28____%29.md)

# CVPixelBufferGetExtendedPixels (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the amount of extended pixel padding in the pixel buffer.

## Declaration

```objectivec
extern void CVPixelBufferGetExtendedPixels(CVPixelBufferRef pixelBuffer, size_t *extraColumnsOnLeft, size_t *extraColumnsOnRight, size_t *extraRowsOnTop, size_t *extraRowsOnBottom);
```

## Parameters

- `pixelBuffer`: The pixel buffer whose extended pixel size you want to obtain.
- `extraColumnsOnLeft`: On output, the pixel row padding to the left.  Pass `NULL` if you do not want this information.
- `extraColumnsOnRight`: On output, the pixel row padding to the right. Pass `NULL` if you do not want this information.
- `extraRowsOnTop`: On output, the pixel row padding to the top.  Pass `NULL` if you do not want this information.
- `extraRowsOnBottom`: On output, the pixel row padding to the bottom. Pass `NULL` if you do not want this information.

<a id="Discussion"></a>

## Discussion

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
- [CVPixelBufferGetIOSurface](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferCreateResolvedAttributesDictionary](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes](cvpixelbufferiscompatiblewithattributes%28____%29.md)
