> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/outputs/remove(_:)](https://developer.apple.com/documentation/coreai/inferencefunction/outputs/remove(_:))

# remove(\_:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes and returns the output value with the specified name.

## Declaration

```swift
mutating func remove(_ outputName: String) -> InferenceValue?
```

## Parameters

- `outputName`: The name of the output to remove.

<a id="return-value"></a>

## Return Value

The output value, or `nil` if no output with the specified name exists.

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="discussion"></a>

## Discussion

After you remove a value, subsequent calls with the same name return `nil`.

## See Also

### Accessing outputs

- [count](count.md): The number of outputs in this collection.
- [names](names.md): The names of the outputs in this collection.
