> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/init(_:)-ag8f](https://developer.apple.com/documentation/createml/mluntypedcolumn/init(_:)-ag8f)

# init(\_:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column from a given sequence of elements that can be converted to machine learning data values.

## Declaration

```swift
init<S>(_ source: S) where S : Sequence, S.Element : MLDataValueConvertible
```

## Parameters

- `source`: A sequence of convertible elements  for the new column.

<a id="discussion"></a>

## Discussion

Use this initializer to create a column from a sequence of any type that conforms to [MLDataValueConvertible](../mldatavalueconvertible.md).

```swift
let sequenceColumn = MLUntypedColumn([2, 3, 5, 7, 11])
print(sequenceColumn)
/* Prints...
 ValueType: Int
 Values:        [2, 3, 5, 7, 11]
 */
```

## See Also

### Creating an untyped column

- [init(repeating:count:)](init%28repeating_count_%29.md): Creates a new column with a repeating value.
- [init(repeating:count:)](init%28repeating_count_%29-7ttf1.md): Creates a new column with a repeating value.
- [init(repeating:count:)](init%28repeating_count_%29-q8yk.md): Creates a new column with a repeating value.
- [init(\_:)](init%28__%29.md): Creates a new column of integers from a given closed range.
- [init(\_:)](init%28__%29-33tcv.md): Creates a new column of integers from a given range.
- [init(\_:)](init%28__%29-9no5.md): Creates a new column of integers from a given closed range.
- [init(\_:)](init%28__%29-5by2g.md): Creates a new column from a given sequence of machine learning data values.
- [init()](init%28%29.md): Creates an empty, invalid column used to remove an existing column from a data table.
