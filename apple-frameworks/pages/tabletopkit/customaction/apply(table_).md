> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/customaction/apply(table:)

# apply(table:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Implement this function to perform the changes to the table state that this action represents. It is important that the code performed in this function is only a function of the provided table state and the data of the action instance.

## Declaration

```swift
func apply(table: inout TableState)
```

## Parameters

- `table`: The table to modify.
