> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/instructionsbuilder

# InstructionsBuilder

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that represents an instructions builder.

## Declaration

```swift
@resultBuilder struct InstructionsBuilder
```

## Topics

### Building instructions

- [buildArray(\_:)](instructionsbuilder/buildarray%28__%29.md): Creates a builder with an array of instructions.
- [buildBlock(\_:)](instructionsbuilder/buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](instructionsbuilder/buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](instructionsbuilder/buildeither%28second_%29.md): Creates a builder with the second component.
- [buildExpression(\_:)](instructionsbuilder/buildexpression%28__%29.md): Creates a builder with an instructions expression.
- [buildLimitedAvailability(\_:)](instructionsbuilder/buildlimitedavailability%28__%29.md): Creates a builder with limited availability instructions.
- [buildOptional(\_:)](instructionsbuilder/buildoptional%28__%29.md): Creates a builder with an optional component.

## See Also

### Creating instructions

- [init(\_:)](instructions/init%28__%29.md): Creates instructions from the content of a builder closure.
- [InstructionsRepresentable](instructionsrepresentable.md): A type that can be represented as instructions.
