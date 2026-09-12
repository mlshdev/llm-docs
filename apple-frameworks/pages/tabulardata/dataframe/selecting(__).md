> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/selecting(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/selecting(_:))

# selecting(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Generates a data frame that includes only the column selection.

## Declaration

```swift
func selecting(_ selection: ColumnSelection) -> DataFrame
```

## Parameters

- `selection`: A selection of columns.

<a id="return-value"></a>

## Return Value

A new data frame including only the selected columns.
