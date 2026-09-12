> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/outputs](https://developer.apple.com/documentation/coreai/inferencefunction/outputs)

# InferenceFunction.Outputs

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The output values produced by running an inference function.

## Declaration

```swift
struct Outputs
```

## Topics

### Accessing outputs

- [remove(\_:)](outputs/remove%28__%29.md): Removes and returns the output value with the specified name.
- [count](outputs/count.md): The number of outputs in this collection.
- [names](outputs/names.md): The names of the outputs in this collection.

## See Also

### Supporting types

- [InferenceFunction.Inputs](inputs.md): A collection of named input values for an inference function.
- [InferenceFunction.MutableViews](mutableviews.md): A collection of `InferenceValue.MutableView`s which can be updated in-place by an `InferenceFunction`.
