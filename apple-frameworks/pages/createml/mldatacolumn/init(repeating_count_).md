> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/init(repeating:count:)](https://developer.apple.com/documentation/createml/mldatacolumn/init(repeating:count:))

# init(repeating:count:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column with a repeating element.

## Declaration

```swift
init(repeating repeatedValue: Element, count: Int)
```

## Parameters

- `repeatedValue`: An initial value for every element in the new column.
- `count`: A number of elements to create for the new column.

<a id="discussion"></a>

## Discussion

Use this initializer to create a column of repeating elements with any type that conforms to [MLDataValueConvertible](../mldatavalueconvertible.md), including integers, doubles, strings, arrays, and dictionaries.

```swift
let three5s = MLDataColumn(repeating: 5, count: 3)
print(three5s) // Prints [5, 5, 5]
```

## See Also

### Creating a data column

- [init(\_:)](init%28__%29.md): Creates a new column from a given sequence of elements.
- [init()](init%28%29.md): Constructs an invalid Column.
