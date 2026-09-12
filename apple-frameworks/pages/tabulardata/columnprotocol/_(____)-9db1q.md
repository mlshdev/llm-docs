> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnprotocol/*(_:_:)-9db1q](https://developer.apple.com/documentation/tabulardata/columnprotocol/*(_:_:)-9db1q)

# \*(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by multiplying each element in a column type by the corresponding elements of another.

## Declaration

```swift
static func * (lhs: Self, rhs: Self) -> Column<Self.Element>
```

## Parameters

- `lhs`: A column type.
- `rhs`: Another column type.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Generating a Column by Multiplying Two Columns

- [\*(\_:\_:)](../_%28____%29-l9r3.md): Generates a column by multiplying each element in a column type by the corresponding elements of an optional column type.
- [\*(\_:\_:)](../_%28____%29-2toor.md): Generates a column by multiplying each element in an optional column type by the corresponding elements of a column type.
