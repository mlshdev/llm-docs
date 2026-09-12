> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/encode(inputs:states:outputviews:to:)](https://developer.apple.com/documentation/coreai/inferencefunction/encode(inputs:states:outputviews:to:))

# encode(inputs:states:outputViews:to:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Encodes the inference onto the provided compute stream, returning async values for the outputs.

## Declaration

```swift
func encode(inputs: [String : InferenceFunction.AsyncValue], states: consuming InferenceFunction.AsyncMutableViews = AsyncMutableViews(), outputViews: consuming InferenceFunction.AsyncMutableViews = AsyncMutableViews(), to stream: ComputeStream) throws -> [String : InferenceFunction.AsyncValue]
```

## Parameters

- `inputs`: The input values.
- `states`: The `inout` arguments that the function reads and writes during inference. Note that views for states are not optional. Omitting a view for any state results in an error.
- `outputViews`: A collection of pre-allocated output values that the inference updates during execution. The returned dictionary doesn’t contain [InferenceFunction](../inferencefunction.md) outputs for which you provide a view, because the inference updates the mutable view in place. When you don’t provide a view, the returned dictionary includes a new async output value.
- `stream`: The compute stream that receives the encoded inference.

<a id="return-value"></a>

## Return Value

A dictionary mapping output name to an [InferenceFunction.AsyncValue](asyncvalue.md) for each output not included in `outputViews`.

<a id="discussion"></a>

## Discussion

When this method returns, the compute may still be running on `stream`. You can pass the returned async values as inputs to subsequent `encode` calls to build a pipeline of inferences without waiting for intermediate results, or await them to retrieve the final compute outputs on the CPU.

```swift
let computeStream = ComputeStream()
let pipelineFunctionOne: InferenceFunction = ...
let pipelineFunctionTwo: InferenceFunction = ...
let initialInput: NDArray = ...

// Run stage one of pipeline and get async value output.
let asyncInput = InferenceFunction.AsyncValue(initialInput)
let functionOneOutputs = try pipelineFunctionOne.encode(inputs: ["input": asyncInput], to: computeStream)
guard let functionOneOutput = functionOneOutputs["output"] else {
    // Handle unexpected missing output
    return
}

// Feed output from function one as an input to function two.
// Note that function one may be running the actual compute asynchronously while function two
// encodes its inference.
let functionTwoOutputs = try pipelineFunctionTwo.encode(inputs: ["input": functionOneOutput], to: computeStream)
guard let functionTwoOutput = functionTwoOutputs["output"] else {
    // Handle unexpected missing output
    return
}

// Now both inferences have been encoded
guard let finalNDArray = try await functionTwoOutput.ndArray else {
    // Handle case where output is not an NDArray
    return
}
```

## See Also

### Running inference

- [run(inputs:states:outputViews:)](run%28inputs_states_outputviews_%29-mqfb.md): Runs the function on the provided input arrays and returns the output values.
- [run(inputs:states:outputViews:)](run%28inputs_states_outputviews_%29-14emi.md): Runs the function on the provided input values and returns the output values.
