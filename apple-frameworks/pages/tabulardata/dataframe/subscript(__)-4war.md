> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/subscript(_:)-4war](https://developer.apple.com/documentation/tabulardata/dataframe/subscript(_:)-4war)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame that includes the columns in a sequence of column names.

## Declaration

```swift
subscript<S>(columnNames: S) -> DataFrame where S : Sequence, S.Element == String { get }
```

## Parameters

- `columnNames`: A sequence of column names.

<a id="return-value"></a>

## Return Value

A new data frame.

## See Also

### Selecting Columns

- [selecting(columnNames:)](selecting%28columnnames_%29-pp1o.md): Generates a data frame that includes the columns you select with a list of names.
- [selecting(columnNames:)](selecting%28columnnames_%29-3kms8.md): Generates a data frame that includes the columns you select with a sequence of names.
