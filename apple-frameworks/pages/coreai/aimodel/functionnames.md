> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/aimodel/functionnames

# functionNames

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The names of the inference functions in this model.

## Declaration

```swift
var functionNames: [String] { get }
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## See Also

### Loading inference functions

- [loadFunction(named:)](loadfunction%28named_%29.md)
- [functionDescriptor(for:)](functiondescriptor%28for_%29.md): Returns a descriptor for the specified function.
