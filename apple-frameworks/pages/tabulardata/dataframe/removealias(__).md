> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/removealias(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/removealias(_:))

# removeAlias(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Removes an alternative name for a column.

## Declaration

```swift
mutating func removeAlias(_ alias: String)
```

## Parameters

- `alias`: An additional name for the column.

## See Also

### Aliasing a Column Name

- [addAlias(\_:forColumn:)](addalias%28__forcolumn_%29.md): Adds an alternative name for a column.
- [columnNames(forAlias:)](columnnames%28foralias_%29.md): Returns the column names for an alias.
