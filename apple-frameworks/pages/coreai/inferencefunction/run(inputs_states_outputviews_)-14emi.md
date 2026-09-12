> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/run(inputs:states:outputviews:)-14emi](https://developer.apple.com/documentation/coreai/inferencefunction/run(inputs:states:outputviews:)-14emi)

# run(inputs:states:outputViews:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Runs the function on the provided input values and returns the output values.

## Declaration

```swift
func run(inputs: borrowing InferenceFunction.Inputs, states: consuming InferenceFunction.MutableViews = MutableViews(), outputViews: consuming InferenceFunction.MutableViews = MutableViews()) async throws -> InferenceFunction.Outputs
```

## Parameters

- `inputs`: The input values for the function.
- `states`: The in-out arguments of the function, which the function reads and writes during inference. You must provide views for all states; omitting any state produces an error.
- `outputViews`: Pre-allocated output values that the function updates during inference. Outputs with a provided view are updated in-place and are not included in the returned [InferenceFunction.Outputs](outputs.md). Outputs without a provided view produce new values in the returned [InferenceFunction.Outputs](outputs.md).

<a id="return-value"></a>

## Return Value

The outputs from the function.

<a id="discussion"></a>

## Discussion

Any [NDArray](../ndarray.md) values in the returned outputs have a row-major contiguous layout.

## See Also

### Running inference

- [run(inputs:states:outputViews:)](run%28inputs_states_outputviews_%29-mqfb.md): Runs the function on the provided input arrays and returns the output values.
- [encode(inputs:states:outputViews:to:)](encode%28inputs_states_outputviews_to_%29.md): Encodes the inference onto the provided compute stream, returning async values for the outputs.
