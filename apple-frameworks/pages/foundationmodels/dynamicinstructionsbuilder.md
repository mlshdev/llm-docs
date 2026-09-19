> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsbuilder

# DynamicInstructionsBuilder

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A result builder that combines tools and other content into dynamic instructions.

## Declaration

```swift
@resultBuilder struct DynamicInstructionsBuilder
```

## Topics

### Building dynamic instructions

- [buildBlock()](dynamicinstructionsbuilder/buildblock%28%29.md): Creates a builder with an empty block.
- [buildBlock(\_:)](dynamicinstructionsbuilder/buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](dynamicinstructionsbuilder/buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](dynamicinstructionsbuilder/buildeither%28second_%29.md): Creates a builder with the second component.
- [buildExpression(\_:)](dynamicinstructionsbuilder/buildexpression%28__%29.md): Creates a builder with a list of tools expression.
- [buildOptional(\_:)](dynamicinstructionsbuilder/buildoptional%28__%29.md): Creates a builder with an optional component.
- [buildLimitedAvailability(\_:)](dynamicinstructionsbuilder/buildlimitedavailability%28__%29.md): Creates a builder with limited availability dynamic instructions.

## See Also

### Building dynamic instructions

- [EmptyDynamicInstructions](emptydynamicinstructions.md): An empty dynamic instructions type.
- [ConditionalDynamicInstructions](conditionaldynamicinstructions.md): A dynamic instructions type that conditionally selects between two conditions.
- [AnyDynamicInstructions](anydynamicinstructions.md): A dynamic instructions type that’s type-erased.
- [TupleDynamicInstructions](tupledynamicinstructions.md): A dynamic instructions type that represents a tuple.
