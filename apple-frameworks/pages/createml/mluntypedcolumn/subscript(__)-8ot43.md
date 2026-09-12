> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/subscript(_:)-8ot43](https://developer.apple.com/documentation/createml/mluntypedcolumn/subscript(_:)-8ot43)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column by masking its elements with a data column of Booleans.

## Declaration

```swift
subscript(mask: MLDataColumn<Bool>) -> MLUntypedColumn { get }
```

## Parameters

- `mask`: A Boolean column indicating whether elements should be kept (`true`) or removed (`false`) in the derived column.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Masking elements to generate an untyped column

- [subscript(\_:)](subscript%28__%29.md): Accesses the element at the given position.
- [subscript(\_:)](subscript%28__%29-9hr32.md): Creates a subset of the column by masking its elements with another untyped column.
