> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/optionalcolumnprotocol/+(_:_:)-2qex0](https://developer.apple.com/documentation/tabulardata/optionalcolumnprotocol/+(_:_:)-2qex0)

# +(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by adding each element in an optional column type to the corresponding elements of another.

## Declaration

```swift
static func + (lhs: Self, rhs: Self) -> Column<Self.WrappedElement>
```

## Parameters

- `lhs`: An optional column type.
- `rhs`: Another optional column type.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Generating an Optional Column by Adding Two Columns

- [+(\_:\_:)](../+%28____%29-1i7oh.md): Generates a column by adding each element in a column type to the corresponding elements of an optional column type.
- [+(\_:\_:)](../+%28____%29-3exmp.md): Generates a column by adding each element in an optional column type to the corresponding elements of a column type.
