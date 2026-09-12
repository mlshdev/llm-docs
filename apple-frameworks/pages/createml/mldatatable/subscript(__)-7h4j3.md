> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/subscript(_:)-7h4j3](https://developer.apple.com/documentation/createml/mldatatable/subscript(_:)-7h4j3)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the table given a range of rows.

## Declaration

```swift
subscript(slice: Range<Int>) -> MLDataTable { get }
```

## Parameters

- `slice`: A range of integers indicating which rows to include in the new data table.

<a id="return-value"></a>

## Return Value

A new data table.
