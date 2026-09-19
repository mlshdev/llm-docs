> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/instructionsbuilder/buildblock(_:)

# buildBlock(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a builder with a block.

## Declaration

```swift
@export(implementation) static func buildBlock<each I>(_ components: repeat each I) -> Instructions where repeat each I : InstructionsRepresentable
```

## See Also

### Building instructions

- [buildArray(\_:)](buildarray%28__%29.md): Creates a builder with an array of instructions.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](buildeither%28second_%29.md): Creates a builder with the second component.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a builder with an instructions expression.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Creates a builder with limited availability instructions.
- [buildOptional(\_:)](buildoptional%28__%29.md): Creates a builder with an optional component.
