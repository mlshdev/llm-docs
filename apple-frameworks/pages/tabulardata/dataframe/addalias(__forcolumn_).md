> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/addalias(_:forcolumn:)](https://developer.apple.com/documentation/tabulardata/dataframe/addalias(_:forcolumn:))

# addAlias(\_:forColumn:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds an alternative name for a column.

## Declaration

```swift
mutating func addAlias(_ alias: String, forColumn columnName: String)
```

## Parameters

- `alias`: An additional name for the column.
- `columnName`: The name of a column.

## See Also

### Aliasing a Column Name

- [columnNames(forAlias:)](columnnames%28foralias_%29.md): Returns the column names for an alias.
- [removeAlias(\_:)](removealias%28__%29.md): Removes an alternative name for a column.
