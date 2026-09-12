> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/selecting(columnnames:)-48kji](https://developer.apple.com/documentation/tabulardata/dataframe/slice/selecting(columnnames:)-48kji)

# selecting(columnNames:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame slice that includes the columns you select with a list of names.

## Declaration

```swift
func selecting(columnNames: String...) -> DataFrame.Slice
```

## Parameters

- `columnNames`: A comma-separated, or variadic, list of column names.

<a id="return-value"></a>

## Return Value

A new data frame slice.

## See Also

### Creating a Slice by Selecting Multiple Columns

- [subscript(\_:)](subscript%28__%29-5y42o.md): Generates a data frame slice that includes the columns in a sequence of column names.
- [selecting(columnNames:)](selecting%28columnnames_%29-9l8oe.md): Generates a data frame slice that includes the columns you select with a sequence of names.
