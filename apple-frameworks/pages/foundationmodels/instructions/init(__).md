> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/instructions/init(_:)

# init(\_:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates instructions from the content of a builder closure.

## Declaration

```swift
init(@InstructionsBuilder _ content: () throws -> Instructions) rethrows
```

## Parameters

- `content`: A closure that produces the instructions to give the model.

## See Also

### Creating instructions

- [InstructionsBuilder](../instructionsbuilder.md): A type that represents an instructions builder.
- [InstructionsRepresentable](../instructionsrepresentable.md): A type that can be represented as instructions.
