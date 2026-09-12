> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tupledynamicinstructions](https://developer.apple.com/documentation/foundationmodels/tupledynamicinstructions)

# TupleDynamicInstructions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A dynamic instructions type that represents a tuple.

## Declaration

```swift
struct TupleDynamicInstructions<each Content> where repeat each Content : DynamicInstructions
```

## Topics

### Creating an instance

- [init(\_:)](tupledynamicinstructions/init%28__%29.md): Creates a dynamic instructions instance that represents a tuple.

## Relationships

### Conforms To

- [DynamicInstructions](dynamicinstructions.md)

## See Also

### Building dynamic instructions

- [DynamicInstructionsBuilder](dynamicinstructionsbuilder.md)
- [EmptyDynamicInstructions](emptydynamicinstructions.md): An empty dynamic instructions type.
- [ConditionalDynamicInstructions](conditionaldynamicinstructions.md): A dynamic instructions type that conditionally selects between two conditions.
- [AnyDynamicInstructions](anydynamicinstructions.md): A dynamic instructions type that’s type-erased.
