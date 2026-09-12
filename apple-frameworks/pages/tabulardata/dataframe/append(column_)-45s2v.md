> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/append(column:)-45s2v](https://developer.apple.com/documentation/tabulardata/dataframe/append(column:)-45s2v)

# append(column:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a type-erased column to the end of the data frame.

## Declaration

```swift
mutating func append(column: AnyColumn)
```

## Parameters

- `column`: A type-erased column. The column must have the same number of rows as the data frame, and must not have the same name as another column in the data frame.

## See Also

### Adding a Column

- [append(column:)](append%28column_%29-aema.md): Adds a typed column to the end of the data frame.
- [insert(column:at:)](insert%28column_at_%29-784jb.md): Adds a type-erased column at a position in the data frame.
- [insert(column:at:)](insert%28column_at_%29-5g6i9.md): Adds a typed column at a position in the data frame.
