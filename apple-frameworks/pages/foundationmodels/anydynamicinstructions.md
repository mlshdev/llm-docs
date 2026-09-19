> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/anydynamicinstructions

# AnyDynamicInstructions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A dynamic instructions type that’s type-erased.

## Declaration

```swift
struct AnyDynamicInstructions
```

## Topics

### Creating dynamic instructions

- [init(\_:)](anydynamicinstructions/init%28__%29.md): Creates an instance from the dynamic instructions you specify.
- [init(erasing:)](anydynamicinstructions/init%28erasing_%29.md): Creates an instance from the dynamic instructions you specify.

## Relationships

### Conforms To

- [DynamicInstructions](dynamicinstructions.md)

## See Also

### Building dynamic instructions

- [DynamicInstructionsBuilder](dynamicinstructionsbuilder.md): A result builder that combines tools and other content into dynamic instructions.
- [EmptyDynamicInstructions](emptydynamicinstructions.md): An empty dynamic instructions type.
- [ConditionalDynamicInstructions](conditionaldynamicinstructions.md): A dynamic instructions type that conditionally selects between two conditions.
- [TupleDynamicInstructions](tupledynamicinstructions.md): A dynamic instructions type that represents a tuple.
