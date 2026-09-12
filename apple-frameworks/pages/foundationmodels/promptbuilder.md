> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/promptbuilder](https://developer.apple.com/documentation/foundationmodels/promptbuilder)

# PromptBuilder

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that represents a prompt builder.

## Declaration

```swift
@resultBuilder struct PromptBuilder
```

## Topics

### Building a prompt

- [buildArray(\_:)](promptbuilder/buildarray%28__%29.md): Creates a builder with an array of prompts.
- [buildBlock(\_:)](promptbuilder/buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](promptbuilder/buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](promptbuilder/buildeither%28second_%29.md): Creates a builder with the second component.
- [buildExpression(\_:)](promptbuilder/buildexpression%28__%29.md): Creates a builder with a prompt expression.
- [buildLimitedAvailability(\_:)](promptbuilder/buildlimitedavailability%28__%29.md): Creates a builder with a limited availability prompt.
- [buildOptional(\_:)](promptbuilder/buildoptional%28__%29.md): Creates a builder with an optional component.

## See Also

### Creating a prompt

- [init(\_:)](prompt/init%28__%29.md)
- [PromptRepresentable](promptrepresentable.md): A type whose value can represent a prompt.
