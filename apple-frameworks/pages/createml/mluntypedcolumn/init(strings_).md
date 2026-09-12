> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/init(strings:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/init(strings:))

# init(strings:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of strings by converting the elements of another column.

## Declaration

```swift
init(strings: MLUntypedColumn)
```

## Parameters

- `strings`: A column with elements that are convertible to string.

<a id="return-value"></a>

## Return Value

A new untyped column of doubles; otherwise an invalid column if any element of the given column cannot be converted to [String](https://developer.apple.com/documentation/swift/string).

<a id="discussion"></a>

## Discussion

Use this initializer to create a column of strings from another column. As an example, to create a column with this initializer, first start with a column that is convertible to strings.

```swift
let doublesColumn = MLUntypedColumn([1.0, 2.718, 3.14, 4.2, 5.1])
print(doublesColumn)
/* Prints...
 ValueType: Double
 Values:        [1.0, 2.718, 3.14, 4.2, 5.1]
 */
```

Then use [init(strings:)](init%28strings_%29.md) to convert the column to a column of strings.

```swift
let stringsColumn = MLUntypedColumn(strings: doublesColumn)
print(stringsColumn)
/* Prints...
 ValueType: String
 Values:        [1, 2.718, 3.14, 4.2, 5.1]
 */
```

## See Also

### Creating an untyped column by converting another column

- [init(ints:)](init%28ints_%29.md): Creates a new column of integers by converting the elements of another column.
- [init(doubles:)](init%28doubles_%29.md): Creates a new column of doubles by converting the elements of another column.
- [init(sequences:)](init%28sequences_%29.md): Creates a new column of machine learning sequences by converting the elements of another column.
- [init(dictionaries:)](init%28dictionaries_%29.md): Creates a new column of machine learning dictionaries by converting the elements of another column.
- [init(multiArrays:)](init%28multiarrays_%29.md): Creates a MLUntypedColumn of type MLMultiArray from the specified MLUntypedColumn if the values of the given MLUntypedColumn are convertible to MLDataValue.MultiArrayType.
