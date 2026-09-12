> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/init(columns:)](https://developer.apple.com/documentation/tabulardata/dataframe/init(columns:))

# init(columns:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new data frame from a sequence of columns.

## Declaration

```swift
init<S>(columns: S) where S : Sequence, S.Element == AnyColumn
```

## Parameters

- `columns`: A sequence of type-erased columns.

## See Also

### Creating a Data Frame

- [init()](init%28%29.md): Creates an empty data frame with no rows or columns.
- [init(dictionaryLiteral:)](init%28dictionaryliteral_%29.md): Creates a data frame from a dictionary literal.
