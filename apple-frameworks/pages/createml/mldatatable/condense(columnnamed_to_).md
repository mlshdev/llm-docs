> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/condense(columnnamed:to:)](https://developer.apple.com/documentation/createml/mldatatable/condense(columnnamed:to:))

# condense(columnNamed:to:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new data table where duplicate row values in the given column are condensed into a new sequence-type column.

## Declaration

```swift
func condense(columnNamed: String, to: String) -> MLDataTable
```

## Parameters

- `columnNamed`: The name of the column to condense.
- `to`: The name of the new condensed column.

<a id="return-value"></a>

## Return Value

A new data table.

<a id="discussion"></a>

## Discussion

This function performs the inverse of [expand(columnNamed:to:)](expand%28columnnamed_to_%29.md).
