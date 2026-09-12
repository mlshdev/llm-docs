> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicinstructionsbuilder/buildexpression(_:)](https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsbuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a builder with a list of tools expression.

## Declaration

```swift
@export(implementation) static func buildExpression(_ tools: [any Tool]) -> some DynamicInstructions

```

## See Also

### Building dynamic instructions

- [buildBlock()](buildblock%28%29.md): Creates a builder with an empty block.
- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](buildeither%28second_%29.md): Creates a builder with the second component.
- [buildOptional(\_:)](buildoptional%28__%29.md): Creates a builder with an optional component.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Creates a builder with limited availability dynamic instructions.
