> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/conditionaldynamicinstructions

# ConditionalDynamicInstructions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A dynamic instructions type that conditionally selects between two conditions.

## Declaration

```swift
struct ConditionalDynamicInstructions<TrueContent, FalseContent> where TrueContent : DynamicInstructions, FalseContent : DynamicInstructions
```

## Topics

### Creating an instance

- [init(\_:)](conditionaldynamicinstructions/init%28__%29.md): Creates a dynamic instructions instance that selects between two conditions.
- [ConditionalDynamicInstructions.Branch](conditionaldynamicinstructions/branch.md): Conforms when `TrueContent` conforms to `DynamicInstructions` and `FalseContent` conforms to `DynamicInstructions`. An enumeration that represents a condition to evaluate.

## Relationships

### Conforms To

- [DynamicInstructions](dynamicinstructions.md)

## See Also

### Building dynamic instructions

- [DynamicInstructionsBuilder](dynamicinstructionsbuilder.md): A result builder that combines tools and other content into dynamic instructions.
- [EmptyDynamicInstructions](emptydynamicinstructions.md): An empty dynamic instructions type.
- [AnyDynamicInstructions](anydynamicinstructions.md): A dynamic instructions type that’s type-erased.
- [TupleDynamicInstructions](tupledynamicinstructions.md): A dynamic instructions type that represents a tuple.
