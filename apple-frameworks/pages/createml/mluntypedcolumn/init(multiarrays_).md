> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/init(multiarrays:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/init(multiarrays:))

# init(multiArrays:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a MLUntypedColumn of type MLMultiArray from the specified MLUntypedColumn if the values of the given MLUntypedColumn are convertible to MLDataValue.MultiArrayType.

## Declaration

```swift
init(multiArrays: MLUntypedColumn)
```

## Parameters

- `multiArrays`: A MLUntypedColumn from which to create a MLUntypedColumn with type MLDataValue.DictionaryType

<a id="return-value"></a>

## Return Value

A MLUntypedColumn of type MultiArray from the specified MLUntypedColumn if the given MLUntypedColumn’s values are convertible to MLDataValue.MultiArrayType. Returns an invalid MLUntypedColumn if the elements in the given MLUntypedColumn are not convertible to MLDataValue.MultiArrayType.

## See Also

### Creating an untyped column by converting another column

- [init(ints:)](init%28ints_%29.md): Creates a new column of integers by converting the elements of another column.
- [init(doubles:)](init%28doubles_%29.md): Creates a new column of doubles by converting the elements of another column.
- [init(strings:)](init%28strings_%29.md): Creates a new column of strings by converting the elements of another column.
- [init(sequences:)](init%28sequences_%29.md): Creates a new column of machine learning sequences by converting the elements of another column.
- [init(dictionaries:)](init%28dictionaries_%29.md): Creates a new column of machine learning dictionaries by converting the elements of another column.
