> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/selecting(columnnames:)-3kms8](https://developer.apple.com/documentation/tabulardata/dataframe/selecting(columnnames:)-3kms8)

# selecting(columnNames:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame that includes the columns you select with a sequence of names.

## Declaration

```swift
func selecting<S>(columnNames: S) -> DataFrame where S : Sequence, S.Element == String
```

## Parameters

- `columnNames`: A sequence of column names.

<a id="return-value"></a>

## Return Value

A new data frame.

## See Also

### Selecting Columns

- [subscript(\_:)](subscript%28__%29-4war.md): Generates a data frame that includes the columns in a sequence of column names.
- [selecting(columnNames:)](selecting%28columnnames_%29-pp1o.md): Generates a data frame that includes the columns you select with a list of names.
