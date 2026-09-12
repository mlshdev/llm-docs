> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/roi(forinput:arguments:outputrect:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/roi(forinput:arguments:outputrect:))

# roi(forInput:arguments:outputRect:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class method to implement your processor’s ROI callback.

## Declaration

```swift
class func roi(forInput inputIndex: Int32, arguments: [String : Any]?, outputRect: CGRect) -> CGRect
```

## Parameters

- `inputIndex`: The index that tells you which processor input for which to return the ROI rectangle.
- `arguments`: The arguments dictionary that was passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).
- `outputRect`: The output `CGRect` that processor will be asked to output.

<a id="return-value"></a>

## Return Value

 The `CGRect` of the `inputIndex`th input that is required for the above `outputRect`

<a id="discussion"></a>

## Discussion

This will be called one or more times per render to determine what portion of the input images are needed to render a given ‘outputRect’ of the output. This will not be called if processor has no input images.

The default implementation would return outputRect.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).

## See Also

### Type Methods

- [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [formatForInput(at:)](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [process(with:arguments:output:)](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roiTileArray(forInput:arguments:outputRect:)](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.

# roiForInput:arguments:outputRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class method to implement your processor’s ROI callback.

## Declaration

```objectivec
+ (CGRect) roiForInput:(int) inputIndex arguments:(NSDictionary<NSString *,id> *) arguments outputRect:(CGRect) outputRect;
```

## Parameters

- `inputIndex`: The index that tells you which processor input for which to return the ROI rectangle.
- `arguments`: The arguments dictionary that was passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).
- `outputRect`: The output `CGRect` that processor will be asked to output.

<a id="return-value"></a>

## Return Value

 The `CGRect` of the `inputIndex`th input that is required for the above `outputRect`

<a id="discussion"></a>

## Discussion

This will be called one or more times per render to determine what portion of the input images are needed to render a given ‘outputRect’ of the output. This will not be called if processor has no input images.

The default implementation would return outputRect.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).

## See Also

### Type Methods

- [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [formatForInputAtIndex:](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roiTileArrayForInput:arguments:outputRect:](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.
