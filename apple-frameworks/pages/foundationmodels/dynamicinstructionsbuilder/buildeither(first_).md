> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicinstructionsbuilder/buildeither(first:)](https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a builder with the first component.

## Declaration

```swift
@export(implementation) static func buildEither<TrueContent, FalseContent>(first content: TrueContent) -> ConditionalDynamicInstructions<TrueContent, FalseContent> where TrueContent : DynamicInstructions, FalseContent : DynamicInstructions
```

## See Also

### Building dynamic instructions

- [buildBlock()](buildblock%28%29.md): Creates a builder with an empty block.
- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(second:)](buildeither%28second_%29.md): Creates a builder with the second component.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a builder with a list of tools expression.
- [buildOptional(\_:)](buildoptional%28__%29.md): Creates a builder with an optional component.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Creates a builder with limited availability dynamic instructions.
