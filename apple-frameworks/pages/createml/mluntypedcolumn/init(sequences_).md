> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/init(sequences:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/init(sequences:))

# init(sequences:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of machine learning sequences by converting the elements of another column.

## Declaration

```swift
init(sequences: MLUntypedColumn)
```

## Parameters

- `sequences`: A column with elements that are convertible to Create ML sequences.

<a id="return-value"></a>

## Return Value

A new untyped column of doubles; otherwise an invalid column if any element of the given column cannot be converted to [MLDataValue.SequenceType](../mldatavalue/sequencetype.md).

<a id="discussion"></a>

## Discussion

Use this initializer to create a column of sequences from another column. As an example, to create a column with this initializer, first start with a column that is convertible to sequences.

```swift
let intSequenceString = "[1, 2, 3]"
let intSequenceString2 = "[4, 5, 6]"
let stringsColumn = MLUntypedColumn([intSequenceString, intSequenceString2])

print(stringsColumn)
/* Prints...
 ValueType: String
 Values:        [[1, 2, 3], [4, 5, 6]]
 */
```

Then use [init(sequences:)](init%28sequences_%29.md) to convert the column to a column of sequences.

```swift
let sequenceColumn = MLUntypedColumn(sequences: stringsColumn)
print(sequenceColumn)
/* Prints...
 ValueType: Sequence
 Values:        [[DataValue(1), DataValue(2), DataValue(3)],
                 [DataValue(4), DataValue(5), DataValue(6)]]
 */
```

## See Also

### Creating an untyped column by converting another column

- [init(ints:)](init%28ints_%29.md): Creates a new column of integers by converting the elements of another column.
- [init(doubles:)](init%28doubles_%29.md): Creates a new column of doubles by converting the elements of another column.
- [init(strings:)](init%28strings_%29.md): Creates a new column of strings by converting the elements of another column.
- [init(dictionaries:)](init%28dictionaries_%29.md): Creates a new column of machine learning dictionaries by converting the elements of another column.
- [init(multiArrays:)](init%28multiarrays_%29.md): Creates a MLUntypedColumn of type MLMultiArray from the specified MLUntypedColumn if the values of the given MLUntypedColumn are convertible to MLDataValue.MultiArrayType.
