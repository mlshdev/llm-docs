> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/apply(withextent:inputs:arguments:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/apply(withextent:inputs:arguments:))

# apply(withExtent:inputs:arguments:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.

## Declaration

```swift
class func apply(withExtent extent: CGRect, inputs: [CIImage]?, arguments: [String : Any]?) throws -> CIImage
```

## Parameters

- `extent`: The bounding `CGRect` of pixels that the `CIImageProcessorKernel` can produce. This method will return `/CIImage/emptyImage` if extent is empty.
- `inputs`: An array of [CIImage](../ciimage.md) objects to use as input.
- `arguments`: This dictionary contains any additional parameters that the processor needs to produce its output. The argument objects can be of any type but in order for CoreImage to cache intermediates, they must be of the following immutable types: `NSArray`, `NSDictionary`, `NSNumber`, `NSValue`, `NSData`, `NSString`, `NSNull`, [CIVector](../civector.md), [CIColor](../cicolor.md), `CGImage`, `CGColorSpace`, or `MLModel`.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md)

<a id="discussion"></a>

## Discussion

The inputs and arguments will be retained so that your subclass can be called when the image is drawn.

This method will return `nil` and an error if:

- calling [outputFormat](outputformat.md) on your subclass returns an unsupported format.
- calling [formatForInput(at:)](formatforinput%28at_%29.md) on your subclass returns an unsupported format.
- your subclass does not implement [process(with:arguments:output:)](process%28with_arguments_output_%29.md)

## See Also

### Type Methods

- [formatForInput(at:)](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [process(with:arguments:output:)](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roi(forInput:arguments:outputRect:)](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
- [roiTileArray(forInput:arguments:outputRect:)](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.

# applyWithExtent:inputs:arguments:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.

## Declaration

```objectivec
+ (CIImage *) applyWithExtent:(CGRect) extent inputs:(NSArray<CIImage *> *) inputs arguments:(NSDictionary<NSString *,id> *) arguments error:(NSError **) error;
```

## Parameters

- `extent`: The bounding `CGRect` of pixels that the `CIImageProcessorKernel` can produce. This method will return `/CIImage/emptyImage` if extent is empty.
- `inputs`: An array of [CIImage](../ciimage.md) objects to use as input.
- `arguments`: This dictionary contains any additional parameters that the processor needs to produce its output. The argument objects can be of any type but in order for CoreImage to cache intermediates, they must be of the following immutable types: `NSArray`, `NSDictionary`, `NSNumber`, `NSValue`, `NSData`, `NSString`, `NSNull`, [CIVector](../civector.md), [CIColor](../cicolor.md), `CGImage`, `CGColorSpace`, or `MLModel`.
- `error`: Pointer to the `NSError` object into which processing errors will be written.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md). On failure, this method returns `nil`.

<a id="discussion"></a>

## Discussion

The inputs and arguments will be retained so that your subclass can be called when the image is drawn.

This method will return `nil` and an error if:

- calling [outputFormat](outputformat.md) on your subclass returns an unsupported format.
- calling [formatForInputAtIndex:](formatforinput%28at_%29.md) on your subclass returns an unsupported format.
- your subclass does not implement [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md)

## See Also

### Type Methods

- [formatForInputAtIndex:](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roiForInput:arguments:outputRect:](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
- [roiTileArrayForInput:arguments:outputRect:](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.
