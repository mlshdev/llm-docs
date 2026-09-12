> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/process(with:arguments:output:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/process(with:arguments:output:))

# process(with:arguments:output:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class method to implement your Core Image Processor Kernel subclass.

## Declaration

```swift
class func process(with inputs: [any CIImageProcessorInput]?, arguments: [String : Any]?, output: any CIImageProcessorOutput) throws
```

## Parameters

- `inputs`: An array of `id<CIImageProcessorInput>` that the class consumes to produce its output. The `input.region` may be larger than the rect returned by [roi(forInput:arguments:outputRect:)](roi%28forinput_arguments_outputrect_%29.md).
- `arguments`: The arguments dictionary that was passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).
- `output`: The `id<CIImageProcessorOutput>` that the `CIImageProcessorKernel` must provide results to.

<a id="discussion"></a>

## Discussion

When a `CIImage` containing your `CIImageProcessorKernel` class is rendered, your class’ implementation of this method will be called as needed for that render.  The method may be called more than once if Core Image needs to tile to limit memory usage.

When your implementation of this class method is called, use the provided `inputs` and `arguments` objects to return processed pixel data to Core Image via `output`.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).

## See Also

### Type Methods

- [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [formatForInput(at:)](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [roi(forInput:arguments:outputRect:)](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
- [roiTileArray(forInput:arguments:outputRect:)](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.

# processWithInputs:arguments:output:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Override this class method to implement your Core Image Processor Kernel subclass.

## Declaration

```objectivec
+ (BOOL) processWithInputs:(NSArray<id<CIImageProcessorInput>> *) inputs arguments:(NSDictionary<NSString *,id> *) arguments output:(id<CIImageProcessorOutput>) output error:(NSError **) error;
```

## Parameters

- `inputs`: An array of `id<CIImageProcessorInput>` that the class consumes to produce its output. The `input.region` may be larger than the rect returned by [roiForInput:arguments:outputRect:](roi%28forinput_arguments_outputrect_%29.md).
- `arguments`: The arguments dictionary that was passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).
- `output`: The `id<CIImageProcessorOutput>` that the `CIImageProcessorKernel` must provide results to.
- `error`: Pointer to the `NSError` object into which processing errors will be written.

<a id="return-value"></a>

## Return Value

 Returns YES if processing succeeded, and NO if processing failed.

<a id="discussion"></a>

## Discussion

When a `CIImage` containing your `CIImageProcessorKernel` class is rendered, your class’ implementation of this method will be called as needed for that render.  The method may be called more than once if Core Image needs to tile to limit memory usage.

When your implementation of this class method is called, use the provided `inputs` and `arguments` objects to return processed pixel data to Core Image via `output`.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).

## See Also

### Type Methods

- [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md): Call this method on your Core Image Processor Kernel subclass to create a new image of the specified extent.
- [formatForInputAtIndex:](formatforinput%28at_%29.md): Override this class method if you want your any of the inputs to be in a specific pixel format.
- [roiForInput:arguments:outputRect:](roi%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s ROI callback.
- [roiTileArrayForInput:arguments:outputRect:](roitilearray%28forinput_arguments_outputrect_%29.md): Override this class method to implement your processor’s tiled ROI callback.
