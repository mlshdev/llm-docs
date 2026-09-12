> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel/loadfunction(named:)](https://developer.apple.com/documentation/coreai/aimodel/loadfunction(named:))

# loadFunction(named:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func loadFunction(named functionName: String) throws -> InferenceFunction?
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## See Also

### Loading inference functions

- [functionDescriptor(for:)](functiondescriptor%28for_%29.md): Returns a descriptor for the specified function.
- [functionNames](functionnames.md): The names of the inference functions in this model.
