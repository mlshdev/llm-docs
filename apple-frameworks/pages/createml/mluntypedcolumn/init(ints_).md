> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/init(ints:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/init(ints:))

# init(ints:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of integers by converting the elements of another column.

## Declaration

```swift
init(ints: MLUntypedColumn)
```

## Parameters

- `ints`: A column with elements that are convertible to integers.

<a id="return-value"></a>

## Return Value

A new untyped column of integers; otherwise an invalid column if any element of the given column cannot be converted to [Int](https://developer.apple.com/documentation/swift/int).

<a id="discussion"></a>

## Discussion

Use this initializer to create a column of integers from another column. As an example, to create a column with this initializer, first start with a column that is convertible to integers.

```swift
let stringColumn = MLUntypedColumn(["1", "2", "3", "4", "5"])
print(stringColumn)
/* Prints...
 ValueType: String
 Values:        [1, 2, 3, 4, 5]
 */
```

Then use [init(ints:)](init%28ints_%29.md) to convert the column to a column of integers.

```swift
let intsColumn = MLUntypedColumn(ints: stringColumn)
print(intsColumn)
/* Prints...
 ValueType: Int
 Values:        [1, 2, 3, 4, 5]
 */
```

## See Also

### Creating an untyped column by converting another column

- [init(doubles:)](init%28doubles_%29.md): Creates a new column of doubles by converting the elements of another column.
- [init(strings:)](init%28strings_%29.md): Creates a new column of strings by converting the elements of another column.
- [init(sequences:)](init%28sequences_%29.md): Creates a new column of machine learning sequences by converting the elements of another column.
- [init(dictionaries:)](init%28dictionaries_%29.md): Creates a new column of machine learning dictionaries by converting the elements of another column.
- [init(multiArrays:)](init%28multiarrays_%29.md): Creates a MLUntypedColumn of type MLMultiArray from the specified MLUntypedColumn if the values of the given MLUntypedColumn are convertible to MLDataValue.MultiArrayType.
