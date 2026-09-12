> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/columnnames(foralias:)](https://developer.apple.com/documentation/tabulardata/dataframe/columnnames(foralias:))

# columnNames(forAlias:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the column names for an alias.

## Declaration

```swift
func columnNames(forAlias alias: String) -> [String]
```

<a id="discussion"></a>

## Discussion

Use this method to discover whether an alias refers to more than one column. For example, a data frame may have multiple columns with the same name after you call its `joined(_:on:kind:)-6moa8` method.

## See Also

### Aliasing a Column Name

- [addAlias(\_:forColumn:)](addalias%28__forcolumn_%29.md): Adds an alternative name for a column.
- [removeAlias(\_:)](removealias%28__%29.md): Removes an alternative name for a column.
