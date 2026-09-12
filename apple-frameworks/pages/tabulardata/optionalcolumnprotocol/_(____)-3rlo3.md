> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/optionalcolumnprotocol/_(_:_:)-3rlo3](https://developer.apple.com/documentation/tabulardata/optionalcolumnprotocol/_(_:_:)-3rlo3)

# /(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a floating-point column by dividing each element in an optional column type by the corresponding elements of another.

## Declaration

```swift
static func / (lhs: Self, rhs: Self) -> Column<Self.WrappedElement>
```

## Parameters

- `lhs`: An optional column type.
- `rhs`: Another optional column type.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Generating an Optional Column by Dividing Two Columns

- [/(\_:\_:)](_%28____%29-4nmnl.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates an integer column by dividing each element in an optional column type by the corresponding elements of another.
- [/(\_:\_:)](../_%28____%29-9v3nw.md): Generates an integer column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](../_%28____%29-4igyw.md): Generates an integer column by dividing each element in an optional column type by the corresponding elements of a column type.
- [/(\_:\_:)](../_%28____%29-4pr65.md): Generates a floating-point column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](../_%28____%29-58kg6.md): Generates a floating-point column by dividing each element in an optional column type by the corresponding elements of a column type.
