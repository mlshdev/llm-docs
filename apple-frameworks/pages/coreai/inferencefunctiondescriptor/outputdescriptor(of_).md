> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunctiondescriptor/outputdescriptor(of:)](https://developer.apple.com/documentation/coreai/inferencefunctiondescriptor/outputdescriptor(of:))

# outputDescriptor(of:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the descriptor for the specified output.

## Declaration

```swift
func outputDescriptor(of outputName: String) -> InferenceValue.Descriptor?
```

## Parameters

- `outputName`: The name of the output.

<a id="return-value"></a>

## Return Value

The descriptor for the output, or `nil` if the function doesn’t have an output with the specified name.

## See Also

### Describing outputs

- [outputCount](outputcount.md): The number of outputs the function produces.
- [outputNames](outputnames.md): The names of the function’s outputs.
