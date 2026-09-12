> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/intersect(_:of:)](https://developer.apple.com/documentation/createml/mldatatable/intersect(_:of:))

# intersect(\_:of:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the table by including the rows that contain any of the given values in the given column.

## Declaration

```swift
func intersect<T>(_ values: T..., of columnNamed: String) -> MLDataTable where T : MLDataValueConvertible
```

## Parameters

- `values`: The values to include from the new table.
- `columnNamed`: The name of the column to search for included values.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Selecting rows

- [subscript(\_:)](subscript%28__%29-7h4j3.md): Creates a subset of the table given a range of rows.
- [subscript(\_:)](subscript%28__%29-5le8a.md): Creates a subset of the table given a range expression of rows.
- [prefix(\_:)](prefix%28__%29.md): Creates a subset of the table given a number of initial rows.
- [suffix(\_:)](suffix%28__%29.md): Creates a subset of the table given a number of final rows.
