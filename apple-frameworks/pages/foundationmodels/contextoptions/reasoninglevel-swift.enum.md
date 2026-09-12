> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/contextoptions/reasoninglevel-swift.enum](https://developer.apple.com/documentation/foundationmodels/contextoptions/reasoninglevel-swift.enum)

# ContextOptions.ReasoningLevel

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Controls the amount of reasoning that the model is allowed to output before producing a response.

## Declaration

```swift
enum ReasoningLevel
```

## Topics

### Reasoning level cases

- [ContextOptions.ReasoningLevel.deep](reasoninglevel-swift.enum/deep.md): A level that indicates deep reasoning that’s good for more analysis over a request.
- [ContextOptions.ReasoningLevel.light](reasoninglevel-swift.enum/light.md): A level that indicates light reasoning that’s good for quick responses.
- [ContextOptions.ReasoningLevel.moderate](reasoninglevel-swift.enum/moderate.md): A level that indicates a moderate amount of reasoning.
- [ContextOptions.ReasoningLevel.custom(\_:)](reasoninglevel-swift.enum/custom%28__%29.md): A custom level that indicates a level not supported by the other cases.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the reasoning level

- [reasoningLevel](reasoninglevel-swift.property.md): Controls the amount of reasoning that the model is allowed to output before producing a response.
