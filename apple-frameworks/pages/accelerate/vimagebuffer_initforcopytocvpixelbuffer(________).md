> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagebuffer_initforcopytocvpixelbuffer(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagebuffer_initforcopytocvpixelbuffer(_:_:_:_:))

# vImageBuffer_InitForCopyToCVPixelBuffer(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes an array of vImage buffers in the order necessary to copy to a Core Video pixel buffer.

## Declaration

```swift
func vImageBuffer_InitForCopyToCVPixelBuffer(_ buffers: UnsafeMutablePointer<vImage_Buffer>, _ converter: vImageConverter, _ pixelBuffer: CVPixelBuffer, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `buffers`: An array of [vImage_Buffer](vimage_buffer.md) structures. The number of destination buffers is the return value of [vImageConverter_GetNumberOfDestinationBuffers(\_:)](vimageconverter_getnumberofdestinationbuffers%28__%29.md).
- `converter`: A Core-Graphics-to-Core-Video [vImageConverter](vimageconverter.md) instance.
- `pixelBuffer`: A locked [CVPixelBuffer](../corevideo/cvpixelbuffer.md) instance.
- `flags`: The options to use when performing this operation.

  > **Important**

  >  Always pass the [kvImageNoAllocate](kvimagenoallocate.md) flag to this function. The [kvImageNoAllocate](kvimagenoallocate.md) flag instructs the function to initialize the buffers to read directly from a locked [CVPixelBuffer](../corevideo/cvpixelbuffer.md) instance. All operations that use the buffers must be between calls to the [CVPixelBufferLockBaseAddress(\_:\_:)](../corevideo/cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](../corevideo/cvpixelbufferunlockbaseaddress%28____%29.md) functions.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The vImage library represents multiple plane Core Video pixel buffers as individual vImage buffers. Call [vImageConverter_GetNumberOfDestinationBuffers(\_:)](vimageconverter_getnumberofdestinationbuffers%28__%29.md) to instantiate the correct number of destination buffers. Use this function to initialize the vImage buffers that you pass as the destinations to a Core-Video-to-Core-Graphics [vImageConverter](vimageconverter.md) instance.

The following shows the code for creating the three destination buffers required to represent a [kCVPixelFormatType_420YpCbCr8Planar](../corevideo/kcvpixelformattype_420ypcbcr8planar.md) pixel buffer. On return of [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md), the three vImage buffers contain the luminance, Cb, and Cr image data.

```swift
let colorSpace = CGColorSpaceCreateDeviceRGB()

guard
    let cgImageFormat = vImage_CGImageFormat(
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        colorSpace: colorSpace,
        bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.noneSkipFirst.rawValue),
        renderingIntent: .defaultIntent),
    
    let cvImageFormat = vImageCVImageFormat.make(
        format: .format420YpCbCr8Planar,
        matrix: kvImage_ARGBToYpCbCrMatrix_ITU_R_709_2.pointee,
        chromaSiting: .center,
        colorSpace: colorSpace,
        alphaIsOpaqueHint: false),
    
    let converterCGtoCV = try? vImageConverter.make(
        sourceFormat: cgImageFormat,
        destinationFormat: cvImageFormat) else {
    return
}

let destinationBufferCount = vImageConverter_GetNumberOfDestinationBuffers(converterCGtoCV)
var destinationBuffers = (0 ..< destinationBufferCount).map { _ in
    return vImage_Buffer()
}

// `cvPixelBuffer` is the destination Core Video pixel buffer.
CVPixelBufferLockBaseAddress(cvPixelBuffer,
                             CVPixelBufferLockFlags(rawValue: 0))

// Initialize the destination buffers.
vImageBuffer_InitForCopyToCVPixelBuffer(
    &destinationBuffers,
    converterCGtoCV,
    cvPixelBuffer,
    vImage_Flags(kvImageNoAllocate))

// The source has an interleaved format with one or more channels, and 
// is encodable with a `vImage_CGImageFormat`.
assert(vImageConverter_GetNumberOfSourceBuffers(converterCGtoCV) == 1)

// On return, `destinationBuffers` contains the YpCbCr conversion of the RGB
// image data in the vImage source buffer.
// `sourceBuffer` is the source vImage buffer.
vImageConvert_AnyToAny(converterCGtoCV,
                       &sourceBuffer,
                       &destinationBuffers,
                       nil,
                       vImage_Flags(kvImageNoFlags))

CVPixelBufferUnlockBaseAddress(cvPixelBuffer,
                               CVPixelBufferLockFlags(rawValue: 0))
```

## See Also

### Initializing vImage buffers that reference Core Video pixel buffer data

- [vImageBuffer_InitForCopyFromCVPixelBuffer(\_:\_:\_:\_:)](vimagebuffer_initforcopyfromcvpixelbuffer%28________%29.md): Initializes an array of vImage buffers in the order necessary to copy from a Core Video pixel buffer.

# vImageBuffer_InitForCopyToCVPixelBuffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes an array of vImage buffers in the order necessary to copy to a Core Video pixel buffer.

## Declaration

```objectivec
vImage_Error vImageBuffer_InitForCopyToCVPixelBuffer(vImage_Buffer *buffers, vImageConverterRef const converter, CVPixelBufferRef const pixelBuffer, vImage_Flags flags);
```

## Parameters

- `buffers`: An array of [vImage_Buffer](vimage_buffer.md) structures. The number of destination buffers is the return value of [vImageConverter_GetNumberOfDestinationBuffers](vimageconverter_getnumberofdestinationbuffers%28__%29.md).
- `converter`: A Core-Graphics-to-Core-Video [vImageConverterRef](vimageconverter.md) instance.
- `pixelBuffer`: A locked [CVPixelBufferRef](../corevideo/cvpixelbuffer.md) instance.
- `flags`: The options to use when performing this operation.

  > **Important**

  >  Always pass the [kvImageNoAllocate](kvimagenoallocate.md) flag to this function. The [kvImageNoAllocate](kvimagenoallocate.md) flag instructs the function to initialize the buffers to read directly from a locked [CVPixelBufferRef](../corevideo/cvpixelbuffer.md) instance. All operations that use the buffers must be between calls to the [CVPixelBufferLockBaseAddress](../corevideo/cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](../corevideo/cvpixelbufferunlockbaseaddress%28____%29.md) functions.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The vImage library represents multiple plane Core Video pixel buffers as individual vImage buffers. Call [vImageConverter_GetNumberOfDestinationBuffers](vimageconverter_getnumberofdestinationbuffers%28__%29.md) to instantiate the correct number of destination buffers. Use this function to initialize the vImage buffers that you pass as the destinations to a Core-Video-to-Core-Graphics [vImageConverterRef](vimageconverter.md) instance.

The following shows the code for creating the three destination buffers required to represent a [kCVPixelFormatType_420YpCbCr8Planar](../corevideo/kcvpixelformattype_420ypcbcr8planar.md) pixel buffer. On return of [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md), the three vImage buffers contain the luminance, Cb, and Cr image data.

```swift
let colorSpace = CGColorSpaceCreateDeviceRGB()

guard
    let cgImageFormat = vImage_CGImageFormat(
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        colorSpace: colorSpace,
        bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.noneSkipFirst.rawValue),
        renderingIntent: .defaultIntent),
    
    let cvImageFormat = vImageCVImageFormat.make(
        format: .format420YpCbCr8Planar,
        matrix: kvImage_ARGBToYpCbCrMatrix_ITU_R_709_2.pointee,
        chromaSiting: .center,
        colorSpace: colorSpace,
        alphaIsOpaqueHint: false),
    
    let converterCGtoCV = try? vImageConverter.make(
        sourceFormat: cgImageFormat,
        destinationFormat: cvImageFormat) else {
    return
}

let destinationBufferCount = vImageConverter_GetNumberOfDestinationBuffers(converterCGtoCV)
var destinationBuffers = (0 ..< destinationBufferCount).map { _ in
    return vImage_Buffer()
}

// `cvPixelBuffer` is the destination Core Video pixel buffer.
CVPixelBufferLockBaseAddress(cvPixelBuffer,
                             CVPixelBufferLockFlags(rawValue: 0))

// Initialize the destination buffers.
vImageBuffer_InitForCopyToCVPixelBuffer(
    &destinationBuffers,
    converterCGtoCV,
    cvPixelBuffer,
    vImage_Flags(kvImageNoAllocate))

// The source has an interleaved format with one or more channels, and 
// is encodable with a `vImage_CGImageFormat`.
assert(vImageConverter_GetNumberOfSourceBuffers(converterCGtoCV) == 1)

// On return, `destinationBuffers` contains the YpCbCr conversion of the RGB
// image data in the vImage source buffer.
// `sourceBuffer` is the source vImage buffer.
vImageConvert_AnyToAny(converterCGtoCV,
                       &sourceBuffer,
                       &destinationBuffers,
                       nil,
                       vImage_Flags(kvImageNoFlags))

CVPixelBufferUnlockBaseAddress(cvPixelBuffer,
                               CVPixelBufferLockFlags(rawValue: 0))
```

## See Also

### Initializing vImage buffers that reference Core Video pixel buffer data

- [vImageBuffer_InitForCopyFromCVPixelBuffer](vimagebuffer_initforcopyfromcvpixelbuffer%28________%29.md): Initializes an array of vImage buffers in the order necessary to copy from a Core Video pixel buffer.
