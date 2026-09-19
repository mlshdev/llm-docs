> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/conditionaldynamicinstructions/init(_:)

# init(\_:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a dynamic instructions instance that selects between two conditions.

## Declaration

```swift
init(_ branch: ConditionalDynamicInstructions<TrueContent, FalseContent>.Branch)
```

## Parameters

- `branch`: The condition to evaluate.

## See Also

### Creating an instance

- [ConditionalDynamicInstructions.Branch](branch.md): Conforms when `TrueContent` conforms to `DynamicInstructions` and `FalseContent` conforms to `DynamicInstructions`. An enumeration that represents a condition to evaluate.
