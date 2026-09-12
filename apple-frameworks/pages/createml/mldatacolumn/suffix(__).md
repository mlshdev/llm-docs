> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/suffix(_:)](https://developer.apple.com/documentation/createml/mldatacolumn/suffix(_:))

# suffix(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column, given a number of final elements.

## Declaration

```swift
func suffix(_ maxLength: Int = 10) -> MLDataColumn<Element>
```

## Parameters

- `maxLength`: An integer that limits the number of elements to use from the end of the column. The default value is `10`.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Selecting elements to generate a column

- [subscript(\_:)](subscript%28__%29-pp34.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a range of elements.
- [subscript(\_:)](subscript%28__%29-5mczv.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a range expression of elements.
- [prefix(\_:)](prefix%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column, given a number of initial elements.
