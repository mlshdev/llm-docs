> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/init(_:)-33tcv](https://developer.apple.com/documentation/createml/mluntypedcolumn/init(_:)-33tcv)

# init(\_:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of integers from a given range.

## Declaration

```swift
init(_ range: Range<Int>)
```

## Parameters

- `range`: A range of integer elements for the new column.

<a id="discussion"></a>

## Discussion

Use this initializer to create a column of incrementing values from a range.

```swift
let rangeColumn = MLUntypedColumn(3..<7)

print(rangeColumn)
/* Prints...
 ValueType: Int
 Values:        [3, 4, 5, 6]
 */
```

## See Also

### Creating an untyped column

- [init(repeating:count:)](init%28repeating_count_%29.md): Creates a new column with a repeating value.
- [init(repeating:count:)](init%28repeating_count_%29-7ttf1.md): Creates a new column with a repeating value.
- [init(repeating:count:)](init%28repeating_count_%29-q8yk.md): Creates a new column with a repeating value.
- [init(\_:)](init%28__%29.md): Creates a new column of integers from a given closed range.
- [init(\_:)](init%28__%29-9no5.md): Creates a new column of integers from a given closed range.
- [init(\_:)](init%28__%29-ag8f.md): Creates a new column from a given sequence of elements that can be converted to machine learning data values.
- [init(\_:)](init%28__%29-5by2g.md): Creates a new column from a given sequence of machine learning data values.
- [init()](init%28%29.md): Creates an empty, invalid column used to remove an existing column from a data table.
