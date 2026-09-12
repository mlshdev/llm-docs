> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/outputformat](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/outputformat)

# outputFormat (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class property if you want your processor’s output to be in a specific pixel format.

## Declaration

```swift
class var outputFormat: CIFormat { get }
```

<a id="discussion"></a>

## Discussion

The format must be one of `kCIFormatBGRA8`, `kCIFormatRGBAh`, `kCIFormatRGBAf` or `kCIFormatR8`. On iOS 12 and macOS 10.14, the formats `kCIFormatRh` and `kCIFormatRf` are also supported.

If the outputFormat is `0`, then the output will be a supported format that best matches the rendering context’s `/CIContext/workingFormat`.

If a processor returns data in a color space other than the context working color space, then call `/CIImage/imageByColorMatchingColorSpaceToWorkingSpace:` on the processor output. If a processor returns data as alpha-unpremultiplied RGBA data, then call, `/CIImage/imageByPremultiplyingAlpha` on the processor output.

## See Also

### Type Properties

- [outputIsOpaque](outputisopaque.md): Override this class property if your processor’s output stores 1.0 into the alpha channel of all pixels within the output extent.
- [synchronizeInputs](synchronizeinputs.md): Override this class property to return false if you want your processor to be given input objects that have not been synchronized for CPU access.

# outputFormat (Objective-C)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class property if you want your processor’s output to be in a specific pixel format.

## Declaration

```objectivec
@property (class, readonly) CIFormat outputFormat;
```

<a id="discussion"></a>

## Discussion

The format must be one of `kCIFormatBGRA8`, `kCIFormatRGBAh`, `kCIFormatRGBAf` or `kCIFormatR8`. On iOS 12 and macOS 10.14, the formats `kCIFormatRh` and `kCIFormatRf` are also supported.

If the outputFormat is `0`, then the output will be a supported format that best matches the rendering context’s `/CIContext/workingFormat`.

If a processor returns data in a color space other than the context working color space, then call `/CIImage/imageByColorMatchingColorSpaceToWorkingSpace:` on the processor output. If a processor returns data as alpha-unpremultiplied RGBA data, then call, `/CIImage/imageByPremultiplyingAlpha` on the processor output.

## See Also

### Type Properties

- [outputIsOpaque](outputisopaque.md): Override this class property if your processor’s output stores 1.0 into the alpha channel of all pixels within the output extent.
- [synchronizeInputs](synchronizeinputs.md): Override this class property to return false if you want your processor to be given input objects that have not been synchronized for CPU access.
