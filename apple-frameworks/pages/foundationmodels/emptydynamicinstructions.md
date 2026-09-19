> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/emptydynamicinstructions

# EmptyDynamicInstructions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An empty dynamic instructions type.

## Declaration

```swift
struct EmptyDynamicInstructions
```

## Topics

### Creating an instance

- [init()](emptydynamicinstructions/init%28%29.md): Creates an empty instance.

## Relationships

### Conforms To

- [DynamicInstructions](dynamicinstructions.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Building dynamic instructions

- [DynamicInstructionsBuilder](dynamicinstructionsbuilder.md): A result builder that combines tools and other content into dynamic instructions.
- [ConditionalDynamicInstructions](conditionaldynamicinstructions.md): A dynamic instructions type that conditionally selects between two conditions.
- [AnyDynamicInstructions](anydynamicinstructions.md): A dynamic instructions type that’s type-erased.
- [TupleDynamicInstructions](tupledynamicinstructions.md): A dynamic instructions type that represents a tuple.
