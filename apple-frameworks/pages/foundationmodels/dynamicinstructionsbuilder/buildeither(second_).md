> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsbuilder/buildeither(second:)

# buildEither(second:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a builder with the second component.

## Declaration

```swift
@export(implementation) static func buildEither<TrueContent, FalseContent>(second content: FalseContent) -> ConditionalDynamicInstructions<TrueContent, FalseContent> where TrueContent : DynamicInstructions, FalseContent : DynamicInstructions
```

## See Also

### Building dynamic instructions

- [buildBlock()](buildblock%28%29.md): Creates a builder with an empty block.
- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a builder with a list of tools expression.
- [buildOptional(\_:)](buildoptional%28__%29.md): Creates a builder with an optional component.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Creates a builder with limited availability dynamic instructions.
