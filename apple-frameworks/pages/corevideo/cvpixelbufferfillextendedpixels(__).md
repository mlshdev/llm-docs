> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferfillextendedpixels(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferfillextendedpixels(_:))

# CVPixelBufferFillExtendedPixels(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Fills the extended pixels of the pixel buffer.

## Declaration

```swift
func CVPixelBufferFillExtendedPixels(_ pixelBuffer: CVPixelBuffer) -> CVReturn
```

## Parameters

- `pixelBuffer`: The pixel buffer whose extended pixels you want to fill.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function replicates edge pixels to fill the entire extended region of the image.

## See Also

### Modifying Pixel Buffers

- [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md): Locks the base address of the pixel buffer.
- [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md): Unlocks the base address of the pixel buffer.

# CVPixelBufferFillExtendedPixels (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Fills the extended pixels of the pixel buffer.

## Declaration

```objectivec
extern CVReturn CVPixelBufferFillExtendedPixels(CVPixelBufferRef pixelBuffer);
```

## Parameters

- `pixelBuffer`: The pixel buffer whose extended pixels you want to fill.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function replicates edge pixels to fill the entire extended region of the image.

## See Also

### Modifying Pixel Buffers

- [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md): Locks the base address of the pixel buffer.
- [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md): Unlocks the base address of the pixel buffer.
