> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferisplanar(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferisplanar(_:))

# CVPixelBufferIsPlanar(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the pixel buffer is planar.

## Declaration

```swift
func CVPixelBufferIsPlanar(_ pixelBuffer: CVPixelBuffer) -> Bool
```

## Parameters

- `pixelBuffer`: The pixel buffer to check.

<a id="return-value"></a>

## Return Value

`true` if the pixel buffer is planar; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

Planar buffers can be created using the [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) function.

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
- [CVPixelBufferGetPlaneCount(\_:)](cvpixelbuffergetplanecount%28__%29.md): Returns number of planes of the pixel buffer.
- [CVPixelBufferGetDataSize(\_:)](cvpixelbuffergetdatasize%28__%29.md): Returns the data size for contiguous planes of the pixel buffer.
- [CVPixelBufferGetPixelFormatType(\_:)](cvpixelbuffergetpixelformattype%28__%29.md): Returns the pixel format type of the pixel buffer.
- [CVPixelBufferGetExtendedPixels(\_:\_:\_:\_:\_:)](cvpixelbuffergetextendedpixels%28__________%29.md): Returns the amount of extended pixel padding in the pixel buffer.
- [CVPixelBufferGetIOSurface(\_:)](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferCreateResolvedAttributesDictionary(\_:\_:\_:)](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes(\_:\_:)](cvpixelbufferiscompatiblewithattributes%28____%29.md)

# CVPixelBufferIsPlanar (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the pixel buffer is planar.

## Declaration

```objectivec
extern Boolean CVPixelBufferIsPlanar(CVPixelBufferRef pixelBuffer);
```

## Parameters

- `pixelBuffer`: The pixel buffer to check.

<a id="return-value"></a>

## Return Value

`true` if the pixel buffer is planar; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

Planar buffers can be created using the [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) function.

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
- [CVPixelBufferGetPlaneCount](cvpixelbuffergetplanecount%28__%29.md): Returns number of planes of the pixel buffer.
- [CVPixelBufferGetDataSize](cvpixelbuffergetdatasize%28__%29.md): Returns the data size for contiguous planes of the pixel buffer.
- [CVPixelBufferGetPixelFormatType](cvpixelbuffergetpixelformattype%28__%29.md): Returns the pixel format type of the pixel buffer.
- [CVPixelBufferGetExtendedPixels](cvpixelbuffergetextendedpixels%28__________%29.md): Returns the amount of extended pixel padding in the pixel buffer.
- [CVPixelBufferGetIOSurface](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferCreateResolvedAttributesDictionary](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes](cvpixelbufferiscompatiblewithattributes%28____%29.md)
