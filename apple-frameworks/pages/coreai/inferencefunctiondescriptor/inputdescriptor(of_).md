> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/inferencefunctiondescriptor/inputdescriptor(of:)

# inputDescriptor(of:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the descriptor for the specified input.

## Declaration

```swift
func inputDescriptor(of inputName: String) -> InferenceValue.Descriptor?
```

## Parameters

- `inputName`: The name of the input.

<a id="return-value"></a>

## Return Value

The descriptor for the input, or `nil` if the function doesn’t have an input with the specified name.

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## See Also

### Describing inputs

- [inputCount](inputcount.md): The number of inputs the function accepts.
- [inputNames](inputnames.md): The names of the function’s inputs.
