> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/instructionsbuilder/buildoptional(_:)](https://developer.apple.com/documentation/foundationmodels/instructionsbuilder/buildoptional(_:))

# buildOptional(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a builder with an optional component.

## Declaration

```swift
@export(implementation) static func buildOptional(_ instructions: Instructions?) -> Instructions
```

## See Also

### Building instructions

- [buildArray(\_:)](buildarray%28__%29.md): Creates a builder with an array of instructions.
- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](buildeither%28second_%29.md): Creates a builder with the second component.
- [buildExpression(\_:)](buildexpression%28__%29.md): Creates a builder with an instructions expression.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Creates a builder with limited availability instructions.
