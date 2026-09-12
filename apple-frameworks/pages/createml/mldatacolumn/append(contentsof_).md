> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/append(contentsof:)](https://developer.apple.com/documentation/createml/mldatacolumn/append(contentsof:))

# append(contentsOf:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Appends the elements of the given column to the end of this column.

## Declaration

```swift
mutating func append(contentsOf newColumn: MLDataColumn<Element>)
```

## Parameters

- `newColumn`: A column to append.

<a id="discussion"></a>

## Discussion

> **Note**

> The type of `newColumn` must be the same type or convertible to the same type as the column. See [MLDataValueConvertible](../mldatavalueconvertible.md).
