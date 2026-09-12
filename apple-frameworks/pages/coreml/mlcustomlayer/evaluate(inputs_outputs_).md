> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustomlayer/evaluate(inputs:outputs:)](https://developer.apple.com/documentation/coreml/mlcustomlayer/evaluate(inputs:outputs:))

# evaluate(inputs:outputs:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Evaluates the custom layer with the given inputs.

## Declaration

```swift
func evaluate(inputs: [MLMultiArray], outputs: [MLMultiArray]) throws
```

## Parameters

- `inputs`: The array of inputs to be evaluated.
- `outputs`: The array of outputs to be populated by evaluating the given inputs.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to evaluate the inputs using your layer’s custom behavior and to populate the output arrays. It will be called for each evaluation of your model performed on the CPU.

The memory for both input and output arrays is preallocated; don’t copy or move it. The inputs and outputs will have the shapes of the most recent call to [outputShapes(forInputShapes:)](outputshapes%28forinputshapes_%29.md). Don’t modify the input values.

Investigate [vecLib](../../accelerate/veclib.md) for methods that could optimize your implementation significantly.

## See Also

### Evaluating a layer

- [encode(commandBuffer:inputs:outputs:)](encode%28commandbuffer_inputs_outputs_%29.md): Encodes GPU commands to evaluate the custom layer.

# evaluateOnCPUWithInputs:outputs:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Evaluates the custom layer with the given inputs.

## Declaration

```objectivec
- (BOOL) evaluateOnCPUWithInputs:(NSArray<MLMultiArray *> *) inputs outputs:(NSArray<MLMultiArray *> *) outputs error:(NSError **) error;
```

## Parameters

- `inputs`: The array of inputs to be evaluated.
- `outputs`: The array of outputs to be populated by evaluating the given inputs.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to evaluate the inputs using your layer’s custom behavior and to populate the output arrays. It will be called for each evaluation of your model performed on the CPU.

The memory for both input and output arrays is preallocated; don’t copy or move it. The inputs and outputs will have the shapes of the most recent call to [outputShapesForInputShapes:error:](outputshapes%28forinputshapes_%29.md). Don’t modify the input values.

Investigate [vecLib](../../accelerate/veclib.md) for methods that could optimize your implementation significantly.

## See Also

### Evaluating a layer

- [encodeToCommandBuffer:inputs:outputs:error:](encode%28commandbuffer_inputs_outputs_%29.md): Encodes GPU commands to evaluate the custom layer.
