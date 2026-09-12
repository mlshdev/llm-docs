> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/subscript(_:)-5y42o](https://developer.apple.com/documentation/tabulardata/dataframe/slice/subscript(_:)-5y42o)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame slice that includes the columns in a sequence of column names.

## Declaration

```swift
subscript<S>(columnNames: S) -> DataFrame.Slice where S : Sequence, S.Element == String { get }
```

## Parameters

- `columnNames`: A sequence of column names.

<a id="return-value"></a>

## Return Value

A new data frame slice.

## See Also

### Creating a Slice by Selecting Multiple Columns

- [selecting(columnNames:)](selecting%28columnnames_%29-9l8oe.md): Generates a data frame slice that includes the columns you select with a sequence of names.
- [selecting(columnNames:)](selecting%28columnnames_%29-48kji.md): Generates a data frame slice that includes the columns you select with a list of names.
