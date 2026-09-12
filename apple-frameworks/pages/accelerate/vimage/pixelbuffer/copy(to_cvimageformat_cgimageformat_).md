> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/copy(to:cvimageformat:cgimageformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/copy(to:cvimageformat:cgimageformat:))

# copy(to:cvImageFormat:cgImageFormat:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Copies the contents of a pixel buffer to a Core Video pixel buffer.

## Declaration

```swift
func copy(to cvPixelBuffer: CVPixelBuffer, cvImageFormat: vImageCVImageFormat, cgImageFormat: vImage_CGImageFormat) throws
```

## Parameters

- `cvPixelBuffer`: The destination Core Video pixel buffer.
- `cvImageFormat`: A [vImageCVImageFormat](../../vimagecvimageformat.md) that specifies the pixel format of the destination buffer.
- `cgImageFormat`: The Core Graphics format of the source buffer.

<a id="Discussion"></a>

## Discussion

The destination Core Video pixel buffer must be nonplanar and be the same size as the source buffer.

The following code shows how to incorporate a vImage pixel buffer into a [CIImageProcessorKernel](../../../coreimage/ciimageprocessorkernel.md) instance. The code calls [copy(to:cvImageFormat:cgImageFormat:)](copy%28to_cvimageformat_cgimageformat_%29.md) to write the result of a contast stretch operation to the processor kernel’s output.

```swift
class ContrastStretchImageProcessorKernel: CIImageProcessorKernel {
    
    static var cgImageFormat = vImage_CGImageFormat(
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        colorSpace: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.noneSkipLast.rawValue),
        renderingIntent: .defaultIntent)!
    
    static let cvImageFormat = vImageCVImageFormat.make(
        format: .format32BGRA,
        colorSpace: CGColorSpaceCreateDeviceRGB(),
        alphaIsOpaqueHint: true)!

    override class var outputFormat: CIFormat {
        return CIFormat.BGRA8
    }
    
    override class func formatForInput(at input: Int32) -> CIFormat {
        return CIFormat.BGRA8
    }
    
    override class func process(with inputs: [CIImageProcessorInput]?,
                                arguments: [String: Any]?,
                                output: CIImageProcessorOutput) throws {
        
        guard
            let input = inputs?.first,
            let inputPixelBuffer = input.pixelBuffer,
            let outputPixelBuffer = output.pixelBuffer else {
                return
            }
   
        let buffer = try vImage.PixelBuffer(copying: inputPixelBuffer,
                                            cvImageFormat: cvImageFormat,
                                            cgImageFormat: &cgImageFormat,
                                            pixelFormat: vImage.Interleaved8x4.self)
        
        buffer.contrastStretch(destination: buffer)
        
        try buffer.copy(to: outputPixelBuffer,
                        cvImageFormat: cvImageFormat,
                        cgImageFormat: cgImageFormat)
    }
}
```

## See Also

### Pixel buffer methods

- [copy(to:)](copy%28to_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Copies the contents of the pixel buffer to another pixel buffer.
- [makeCGImage(cgImageFormat:)](makecgimage%28cgimageformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a Core Graphics image from the pixel buffer’s contents.
- [withCVPixelBuffer(readOnly:body:)](withcvpixelbuffer%28readonly_body_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Calls the given closure with a locked 32-bit BGRA Core Video Pixel Buffer.
