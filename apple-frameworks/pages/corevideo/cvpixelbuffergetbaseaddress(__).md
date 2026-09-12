> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffergetbaseaddress(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffergetbaseaddress(_:))

# CVPixelBufferGetBaseAddress(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the base address of the pixel buffer.

## Declaration

```swift
func CVPixelBufferGetBaseAddress(_ pixelBuffer: CVPixelBuffer) -> UnsafeMutableRawPointer?
```

## Parameters

- `pixelBuffer`: The pixel buffer whose base address you want to obtain.

<a id="return-value"></a>

## Return Value

The base address of the pixel buffer.

<a id="Discussion"></a>

## Discussion

The pointer returned by this function depends on the type of buffer and the conditions under which it was created.

- For chunky buffers, returns a pointer to the pixel at (0,0) in the buffer.
- For planar buffers, returns a pointer to a [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure, or `NULL` if no such structure is present.

Because this function returns `NULL` for some planar buffers, you should call [CVPixelBufferGetBaseAddressOfPlane(\_:\_:)](cvpixelbuffergetbaseaddressofplane%28____%29.md) and [CVPixelBufferGetBytesPerRowOfPlane(\_:\_:)](cvpixelbuffergetbytesperrowofplane%28____%29.md) to get information about a planar buffer.

Retrieving the base address for a pixel buffer requires that the buffer base address be locked using the [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) function.

## See Also

### Inspecting Pixel Buffers

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
- [CVPixelBufferCreateResolvedAttributesDictionary(\_:\_:\_:)](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes(\_:\_:)](cvpixelbufferiscompatiblewithattributes%28____%29.md)

# CVPixelBufferGetBaseAddress (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the base address of the pixel buffer.

## Declaration

```objectivec
extern void *CVPixelBufferGetBaseAddress(CVPixelBufferRef pixelBuffer);
```

## Parameters

- `pixelBuffer`: The pixel buffer whose base address you want to obtain.

<a id="return-value"></a>

## Return Value

The base address of the pixel buffer.

<a id="Discussion"></a>

## Discussion

The pointer returned by this function depends on the type of buffer and the conditions under which it was created.

- For chunky buffers, returns a pointer to the pixel at (0,0) in the buffer.
- For planar buffers, returns a pointer to a [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure, or `NULL` if no such structure is present.

Because this function returns `NULL` for some planar buffers, you should call [CVPixelBufferGetBaseAddressOfPlane](cvpixelbuffergetbaseaddressofplane%28____%29.md) and [CVPixelBufferGetBytesPerRowOfPlane](cvpixelbuffergetbytesperrowofplane%28____%29.md) to get information about a planar buffer.

Retrieving the base address for a pixel buffer requires that the buffer base address be locked using the [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) function.

## See Also

### Inspecting Pixel Buffers

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
- [CVPixelBufferCreateResolvedAttributesDictionary](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes](cvpixelbufferiscompatiblewithattributes%28____%29.md)
