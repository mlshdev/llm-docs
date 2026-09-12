> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/init(referencing:converter:destinationpixelformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(referencing:converter:destinationpixelformat:))

# init(referencing:converter:destinationPixelFormat:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new pixel buffer that references the specified Core Video pixel buffer and populated converter.

## Declaration

```swift
init(referencing lockedCVPixelBuffer: CVPixelBuffer, converter: vImageConverter, destinationPixelFormat: Format.Type = Format.self)
```

## Parameters

- `lockedCVPixelBuffer`: The locked Core Video pixel buffer. Use [CVPixelBufferLockBaseAddress(\_:\_:)](../../../corevideo/cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](../../../corevideo/cvpixelbufferunlockbaseaddress%28____%29.md) to lock and unlock the pixel buffer.
- `converter`: The vImage Core Video to Core Graphics any-to-any converter.
- `destinationPixelFormat`: The pixel format of the initialized buffer.

<a id="Discussion"></a>

## Discussion

The following code shows how to incorporate a vImage pixel buffer into a [CIImageProcessorKernel](../../../coreimage/ciimageprocessorkernel.md) instance. The code calls [init(referencing:converter:destinationPixelFormat:)](init%28referencing_converter_destinationpixelformat_%29.md) to initialize a source and destination vImage pixel buffers that share data with the processor kernel’s input and output.

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
    
    static let converter = try! vImageConverter.make(sourceFormat: cvImageFormat,
                                                     destinationFormat: cgImageFormat)
    
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
        
        CVPixelBufferLockBaseAddress(inputPixelBuffer,
                                     CVPixelBufferLockFlags.readOnly)
        CVPixelBufferLockBaseAddress(outputPixelBuffer,
                                     CVPixelBufferLockFlags(rawValue: 0))
        
        defer {
            CVPixelBufferUnlockBaseAddress(inputPixelBuffer,
                                           CVPixelBufferLockFlags.readOnly)
            CVPixelBufferUnlockBaseAddress(outputPixelBuffer,
                                           CVPixelBufferLockFlags(rawValue: 0))
        }
        
        let source = vImage.PixelBuffer(
            referencing: inputPixelBuffer,
            converter: converter,
            destinationPixelFormat: vImage.Interleaved8x4.self)
        
        let destination = vImage.PixelBuffer(
            referencing: outputPixelBuffer,
            converter: converter,
            destinationPixelFormat: vImage.Interleaved8x4.self)
        
        source.contrastStretch(destination: destination)
    }
}
```

## See Also

### Related Documentation

- [vImageBuffer_InitForCopyFromCVPixelBuffer(\_:\_:\_:\_:)](../../vimagebuffer_initforcopyfromcvpixelbuffer%28________%29.md): Initializes an array of vImage buffers in the order necessary to copy from a Core Video pixel buffer.

### Creating a pixel buffer from a Core Video buffer

- [init(copying:cvImageFormat:cgImageFormat:pixelFormat:)](init%28copying_cvimageformat_cgimageformat_pixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Initializes a pixel buffer by copying the data from a Core Video pixel buffer.
- [init(referencing:planeIndex:overrideSize:pixelFormat:)](init%28referencing_planeindex_overridesize_pixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Initializes a pixel buffer by refencing the data from a single plane of a multiplane Core Video pixel buffer.
