> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/customaction/apply(table:)](https://developer.apple.com/documentation/tabletopkit/customaction/apply(table:))

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
