> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/subscript(_:)-2wkan](https://developer.apple.com/documentation/createml/mldatatable/subscript(_:)-2wkan)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the table given a sequence of column names.

## Declaration

```swift
subscript<S>(columnNames: S) -> MLDataTable where S : Sequence, S.Element == String { get }
```

## Parameters

- `columnNames`: A sequence of names indicating which columns to includein the new data table.

<a id="return-value"></a>

## Return Value

A new data table.
