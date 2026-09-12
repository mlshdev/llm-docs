> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcreatecgimagefromcvpixelbuffer(_:options:imageout:)](https://developer.apple.com/documentation/videotoolbox/vtcreatecgimagefromcvpixelbuffer(_:options:imageout:))

# VTCreateCGImageFromCVPixelBuffer(\_:options:imageOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.2+ · visionOS 1.0+

Creates a Core Graphics bitmap image or image mask using the provided pixel buffer.

## Declaration

```swift
func VTCreateCGImageFromCVPixelBuffer(_ pixelBuffer: CVPixelBuffer, options: CFDictionary?, imageOut: UnsafeMutablePointer<CGImage?>) -> OSStatus
```

## Parameters

- `pixelBuffer`: A pixel buffer to use as the image data source for the [CGImage](../coregraphics/cgimage.md).
- `options`: No options are currently supported. Pass `NULL` for this argument.
- `imageOut`: Pointer to an address to receive the newly created [CGImage](../coregraphics/cgimage.md).

<a id="Discussion"></a>

## Discussion

This routine creates a [CGImage](../coregraphics/cgimage.md) representation of the image data contained in the provided [CVPixelBuffer](../corevideo/cvpixelbuffer.md). The source `CVPixelBuffer` may be retained for the lifetime of the `CGImage`. Changes to the `CVPixelBuffer` after making this call (other than releasing it) will have undefined results.

Not all `CVPixelBuffer` pixel formats support conversion into a `CGImage-`compatible pixel format.

# VTCreateCGImageFromCVPixelBuffer (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.2+ · visionOS 1.0+

Creates a Core Graphics bitmap image or image mask using the provided pixel buffer.

## Declaration

```objectivec
extern OSStatus VTCreateCGImageFromCVPixelBuffer(CVPixelBufferRef pixelBuffer, CFDictionaryRef options, CGImageRef*imageOut);
```

## Parameters

- `pixelBuffer`: A pixel buffer to use as the image data source for the [CGImageRef](../coregraphics/cgimage.md).
- `options`: No options are currently supported. Pass `NULL` for this argument.
- `imageOut`: Pointer to an address to receive the newly created [CGImageRef](../coregraphics/cgimage.md).

<a id="Discussion"></a>

## Discussion

This routine creates a [CGImageRef](../coregraphics/cgimage.md) representation of the image data contained in the provided [CVPixelBufferRef](../corevideo/cvpixelbuffer.md). The source `CVPixelBuffer` may be retained for the lifetime of the `CGImage`. Changes to the `CVPixelBuffer` after making this call (other than releasing it) will have undefined results.

Not all `CVPixelBuffer` pixel formats support conversion into a `CGImage-`compatible pixel format.
