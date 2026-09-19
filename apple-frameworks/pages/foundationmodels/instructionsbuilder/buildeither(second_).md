> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/instructionsbuilder/buildeither(second:)

# buildEither(second:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a builder with the second component.

## Declaration

```swift
@export(implementation) static func buildEither(second component: some InstructionsRepresentable) -> Instructions
```

## See Also

### Building instructions

- [buildArray(\_:)](buildarray%28__%29.md): Creates a builder with an array of instructions.
- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a builder with an instructions expression.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Creates a builder with limited availability instructions.
- [buildOptional(\_:)](buildoptional%28__%29.md): Creates a builder with an optional component.
