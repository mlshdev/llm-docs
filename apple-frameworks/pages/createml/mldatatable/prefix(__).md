> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/prefix(_:)](https://developer.apple.com/documentation/createml/mldatatable/prefix(_:))

# prefix(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the table given a number of initial rows.

## Declaration

```swift
func prefix(_ maxLength: Int = 10) -> MLDataTable
```

## Parameters

- `maxLength`: The largest number of rows to use from the beginning of the data table. The default value is `10`.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Selecting rows

- [subscript(\_:)](subscript%28__%29-7h4j3.md): Creates a subset of the table given a range of rows.
- [subscript(\_:)](subscript%28__%29-5le8a.md): Creates a subset of the table given a range expression of rows.
- [suffix(\_:)](suffix%28__%29.md): Creates a subset of the table given a number of final rows.
- [intersect(\_:of:)](intersect%28__of_%29.md): Creates a subset of the table by including the rows that contain any of the given values in the given column.
