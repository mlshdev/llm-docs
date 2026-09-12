> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/subscript(_:)-1n3x](https://developer.apple.com/documentation/createml/mldatacolumn/subscript(_:)-1n3x)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Returns a `MLDataColumn` containing only the elements for which the corresponding mask has a nonzero or non-default value.

## Declaration

```swift
subscript(mask: MLUntypedColumn) -> MLDataColumn<Element> { get }
```

## Parameters

- `mask`: A MLUntypedColumn with the same element count as this MLUntypedColumn.

<a id="return-value"></a>

## Return Value

A MLUntypedColumn containing the subsequence of this MLUntypedColumn’s elements indicated by the mask MLUntypedColumn.

## See Also

### Masking elements to generate a column

- [subscript(\_:)](subscript%28__%29-78irf.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column by masking its elements with a column of Booleans.
