> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/process(with:arguments:outputs:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/process(with:arguments:outputs:))

# process(with:arguments:outputs:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Override this class method of your Core Image Processor Kernel subclass if it needs to produce multiple outputs.

## Declaration

```swift
class func process(with inputs: [any CIImageProcessorInput]?, arguments: [String : Any]?, outputs: [any CIImageProcessorOutput]) throws
```

## Parameters

- `inputs`: An array of `id<CIImageProcessorInput>` that the class consumes to produce its output. The `input.region` may be larger than the rect returned by [roi(forInput:arguments:outputRect:)](roi%28forinput_arguments_outputrect_%29.md).
- `arguments`: The arguments dictionary that was passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).
- `outputs`: An array `id<CIImageProcessorOutput>` that the `CIImageProcessorKernel` must provide results to.

<a id="discussion"></a>

## Discussion

This supports 0, 1, 2 or more input images and 2 or more output images.

When a `CIImage` containing your `CIImageProcessorKernel` class is rendered, your class’ implementation of this method will be called as needed for that render.  The method may be called more than once if Core Image needs to tile to limit memory usage.

When your implementation of this class method is called, use the provided `inputs` and `arguments` objects to return processed pixel data to Core Image via multiple `outputs`.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).

# processWithInputs:arguments:outputs:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Override this class method of your Core Image Processor Kernel subclass if it needs to produce multiple outputs.

## Declaration

```objectivec
+ (BOOL) processWithInputs:(NSArray<id<CIImageProcessorInput>> *) inputs arguments:(NSDictionary<NSString *,id> *) arguments outputs:(NSArray<id<CIImageProcessorOutput>> *) outputs error:(NSError **) error;
```

## Parameters

- `inputs`: An array of `id<CIImageProcessorInput>` that the class consumes to produce its output. The `input.region` may be larger than the rect returned by [roiForInput:arguments:outputRect:](roi%28forinput_arguments_outputrect_%29.md).
- `arguments`: The arguments dictionary that was passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).
- `outputs`: An array `id<CIImageProcessorOutput>` that the `CIImageProcessorKernel` must provide results to.
- `error`: Pointer to the `NSError` object into which processing errors will be written.

<a id="return-value"></a>

## Return Value

 Returns YES if processing succeeded, and NO if processing failed.

<a id="discussion"></a>

## Discussion

This supports 0, 1, 2 or more input images and 2 or more output images.

When a `CIImage` containing your `CIImageProcessorKernel` class is rendered, your class’ implementation of this method will be called as needed for that render.  The method may be called more than once if Core Image needs to tile to limit memory usage.

When your implementation of this class method is called, use the provided `inputs` and `arguments` objects to return processed pixel data to Core Image via multiple `outputs`.

> **Important**

> This is a class method so that you cannot use or capture any state by accident. All the parameters that affect the output results must be passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).
