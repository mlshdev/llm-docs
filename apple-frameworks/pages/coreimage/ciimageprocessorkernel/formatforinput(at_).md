> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/formatforinput(at:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/formatforinput(at:))

# formatForInput(at:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class method if you want your any of the inputs to be in a specific pixel format.

## Declaration

```swift
class func formatForInput(at inputIndex: Int32) -> CIFormat
```

<a id="discussion"></a>

## Discussion

The format must be one of `kCIFormatBGRA8`, `kCIFormatRGBAh`, `kCIFormatRGBAf` or `kCIFormatR8`. On iOS 12 and macOS 10.14, the formats `kCIFormatRh` and `kCIFormatRf` are also supported.

If the requested inputFormat is `0`, then the input will be a supported format that best matches the rendering context’s `/CIContext/workingFormat`.

If a processor wants data in a colorspace other than the context’s working color space, then call `/CIImage/imageByColorMatchingWorkingSpaceToColorSpace:` on the processor input. If a processor wants it input as alpha-unpremultiplied RGBA data, then call `/CIImage/imageByUnpremultiplyingAlpha` on the processor input.

## See Also

### Type Methods

- [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [process(with:arguments:output:)](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roi(forInput:arguments:outputRect:)](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
- [roiTileArray(forInput:arguments:outputRect:)](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.

# formatForInputAtIndex: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class method if you want your any of the inputs to be in a specific pixel format.

## Declaration

```objectivec
+ (CIFormat) formatForInputAtIndex:(int) inputIndex;
```

<a id="discussion"></a>

## Discussion

The format must be one of `kCIFormatBGRA8`, `kCIFormatRGBAh`, `kCIFormatRGBAf` or `kCIFormatR8`. On iOS 12 and macOS 10.14, the formats `kCIFormatRh` and `kCIFormatRf` are also supported.

If the requested inputFormat is `0`, then the input will be a supported format that best matches the rendering context’s `/CIContext/workingFormat`.

If a processor wants data in a colorspace other than the context’s working color space, then call `/CIImage/imageByColorMatchingWorkingSpaceToColorSpace:` on the processor input. If a processor wants it input as alpha-unpremultiplied RGBA data, then call `/CIImage/imageByUnpremultiplyingAlpha` on the processor input.

## See Also

### Type Methods

- [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roiForInput:arguments:outputRect:](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
- [roiTileArrayForInput:arguments:outputRect:](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.
