> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/sort(columnnamed:byincreasingorder:)](https://developer.apple.com/documentation/createml/mldatatable/sort(columnnamed:byincreasingorder:))

# sort(columnNamed:byIncreasingOrder:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new data table by sorting the table by the given column.

## Declaration

```swift
func sort(columnNamed: String, byIncreasingOrder: Bool = true) -> MLDataTable
```

## Parameters

- `columnNamed`: The name of the column to sort the rows of data table.
- `byIncreasingOrder`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to sort the table in ascending order.

<a id="return-value"></a>

## Return Value

A new data table.
