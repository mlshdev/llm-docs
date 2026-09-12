> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/withcvpixelbuffer(readonly:body:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/withcvpixelbuffer(readonly:body:))

# withCVPixelBuffer(readOnly:body:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calls the given closure with a locked 32-bit BGRA Core Video Pixel Buffer.

## Declaration

```swift
func withCVPixelBuffer(readOnly: Bool, body: (CVPixelBuffer) -> Void)
```

## Parameters

- `readOnly`: A Boolean value that specifies whether the function locks the [CVPixelBuffer](../../../corevideo/cvpixelbuffer.md) with the [readOnly](../../../corevideo/cvpixelbufferlockflags/readonly.md) flag. If the closure doesn’t modify the data, set this parameter to `true`.
- `body`: A closure with a [CVPixelBuffer](../../../corevideo/cvpixelbuffer.md) parameter that points to the underlying pixel buffer image data.

<a id="Discussion"></a>

## Discussion

Use this function to pass a vImage pixel buffer to other frameworks. For example, the following code creates a Core Image [CIImage](../../../coreimage/ciimage.md) instance from a [CVPixelBuffer](../../../corevideo/cvpixelbuffer.md) that shares its underlying storage with a pixel buffer:

```swift
let src = vImage.PixelBuffer<vImage.Interleaved8x4>(
    size: vImage.Size(width: 64, height: 64))

src.withCVPixelBuffer(readOnly: false) { cvPixelBuffer in

    let ciImage = CIImage(cvImageBuffer: cvPixelBuffer)

    // Core Image workflow using `ciImage`
}
```

## See Also

### Pixel buffer methods

- [copy(to:)](copy%28to_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Copies the contents of the pixel buffer to another pixel buffer.
- [copy(to:cvImageFormat:cgImageFormat:)](copy%28to_cvimageformat_cgimageformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Copies the contents of a pixel buffer to a Core Video pixel buffer.
- [makeCGImage(cgImageFormat:)](makecgimage%28cgimageformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a Core Graphics image from the pixel buffer’s contents.
