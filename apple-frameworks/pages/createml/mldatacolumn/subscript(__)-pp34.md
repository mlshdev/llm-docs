> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/subscript(_:)-pp34](https://developer.apple.com/documentation/createml/mldatacolumn/subscript(_:)-pp34)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column, given a range of elements.

## Declaration

```swift
subscript(slice: Range<Int>) -> MLDataColumn<Element> { get }
```

## Parameters

- `slice`: A range of integers indicating which elements to include in the new column.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Selecting elements to generate a column

- [subscript(\_:)](subscript%28__%29-5mczv.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a range expression of elements.
- [prefix(\_:)](prefix%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a number of initial elements.
- [suffix(\_:)](suffix%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a number of final elements.
