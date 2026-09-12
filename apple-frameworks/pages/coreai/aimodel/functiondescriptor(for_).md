> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel/functiondescriptor(for:)](https://developer.apple.com/documentation/coreai/aimodel/functiondescriptor(for:))

# functionDescriptor(for:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a descriptor for the specified function.

## Declaration

```swift
func functionDescriptor(for functionName: String) -> InferenceFunctionDescriptor?
```

## Parameters

- `functionName`: The name of the function to describe.

<a id="return-value"></a>

## Return Value

A descriptor for the function, or `nil` if the model doesn’t contain a function with the specified name.

<a id="discussion"></a>

## Discussion

Use the descriptor to inspect the function’s inputs, outputs, and state names before loading it for inference.

## See Also

### Loading inference functions

- [loadFunction(named:)](loadfunction%28named_%29.md)
- [functionNames](functionnames.md): The names of the inference functions in this model.
