> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/append(contentsof:)](https://developer.apple.com/documentation/createml/mldatatable/append(contentsof:))

# append(contentsOf:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Appends the contents of the given data table to the end of this data table.

## Declaration

```swift
mutating func append(contentsOf newTable: MLDataTable)
```

## Parameters

- `newTable`: Another data table to append to the data table.

<a id="discussion"></a>

## Discussion

> **Important**

> The columns of both data tables must have the same names and types. Otherwise, the data table will be invalidated.
