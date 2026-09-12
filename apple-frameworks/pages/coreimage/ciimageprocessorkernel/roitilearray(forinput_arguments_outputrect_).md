> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/roitilearray(forinput:arguments:outputrect:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/roitilearray(forinput:arguments:outputrect:))

# roiTileArray(forInput:arguments:outputRect:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Override this class method to implement your processor’s tiled ROI callback.

## Declaration

```swift
class func roiTileArray(forInput inputIndex: Int32, arguments: [String : Any]?, outputRect: CGRect) -> [CIVector]
```

## Parameters

- `inputIndex`: The index that tells you which processor input for which to return the array of ROI rectangles
- `arguments`: The arguments dictionary that was passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).
- `outputRect`: The output `CGRect` that processor will be asked to output.

<a id="return-value"></a>

## Return Value

 An array of [CIVector](../civector.md) that specify tile regions of the `inputIndex`’th input that is required for the above `outputRect` Each region tile in the array is a created by calling `/CIVector/vectorWithCGRect:` The tiles may overlap but should fully cover the area of ‘input’ that is needed. If a processor has multiple inputs, then each input should return the same number of region tiles.

<a id="discussion"></a>

## Discussion

This will be called one or more times per render to determine what tiles of the input images are needed to render a given `outputRect` of the output.

If the processor implements this method, then when rendered;

- as CoreImage prepares for a render, this method will be called for each input to return an ROI tile array.
- as CoreImage performs the render, the method [process(with:arguments:output:)](process%28with_arguments_output_%29.md) will be called once for each tile.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).

## See Also

### Type Methods

- [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [formatForInput(at:)](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [process(with:arguments:output:)](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roi(forInput:arguments:outputRect:)](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.

# roiTileArrayForInput:arguments:outputRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Override this class method to implement your processor’s tiled ROI callback.

## Declaration

```objectivec
+ (NSArray<CIVector *> *) roiTileArrayForInput:(int) inputIndex arguments:(NSDictionary<NSString *,id> *) arguments outputRect:(CGRect) outputRect;
```

## Parameters

- `inputIndex`: The index that tells you which processor input for which to return the array of ROI rectangles
- `arguments`: The arguments dictionary that was passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).
- `outputRect`: The output `CGRect` that processor will be asked to output.

<a id="return-value"></a>

## Return Value

 An array of [CIVector](../civector.md) that specify tile regions of the `inputIndex`’th input that is required for the above `outputRect` Each region tile in the array is a created by calling `/CIVector/vectorWithCGRect:` The tiles may overlap but should fully cover the area of ‘input’ that is needed. If a processor has multiple inputs, then each input should return the same number of region tiles.

<a id="discussion"></a>

## Discussion

This will be called one or more times per render to determine what tiles of the input images are needed to render a given `outputRect` of the output.

If the processor implements this method, then when rendered;

- as CoreImage prepares for a render, this method will be called for each input to return an ROI tile array.
- as CoreImage performs the render, the method [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md) will be called once for each tile.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).

## See Also

### Type Methods

- [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [formatForInputAtIndex:](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md): Override this class method to implement your Core Image Processor Kernel subclass.
- [roiForInput:arguments:outputRect:](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
