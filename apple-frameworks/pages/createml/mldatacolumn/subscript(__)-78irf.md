> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/subscript(_:)-78irf](https://developer.apple.com/documentation/createml/mldatacolumn/subscript(_:)-78irf)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column by masking its elements with a column of Booleans.

## Declaration

```swift
subscript(mask: MLDataColumn<Bool>) -> MLDataColumn<Element> { get }
```

## Parameters

- `mask`: A Boolean column indicating whether elements should be kept (`true`) or removed (`false`) in the derived column.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Masking elements to generate a column

- [subscript(\_:)](subscript%28__%29-1n3x.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Returns a `MLDataColumn` containing only the elements for which the corresponding mask has a nonzero or non-default value.
