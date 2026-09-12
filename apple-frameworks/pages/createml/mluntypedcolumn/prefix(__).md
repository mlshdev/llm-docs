> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/prefix(_:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/prefix(_:))

# prefix(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column, given a number of initial elements.

## Declaration

```swift
func prefix(_ maxLength: Int = 10) -> MLUntypedColumn
```

## Parameters

- `maxLength`: The largest number of elements to use from the beginning of the column. The default value is `10`.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Selecting elements to generate an untyped column

- [subscript(\_:)](subscript%28__%29-33ua2.md): Creates a subset of the column, given a range of elements.
- [subscript(\_:)](subscript%28__%29-9dpy7.md): Creates a subset of the column, given a range expression of elements.
- [suffix(\_:)](suffix%28__%29.md): Creates a subset of the column, given a number of final elements.
