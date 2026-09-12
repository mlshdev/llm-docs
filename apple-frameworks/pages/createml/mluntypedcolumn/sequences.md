> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/sequences](https://developer.apple.com/documentation/createml/mluntypedcolumn/sequences)

# sequences

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A cloned data column of machine learning sequences.

## Declaration

```swift
var sequences: MLDataColumn<MLDataValue.SequenceType>? { get }
```

<a id="return-value"></a>

## Return Value

A new data column if the underlying type of the column is [MLDataValue.SequenceType](../mldatavalue/sequencetype.md); otherwise `nil`.

<a id="discussion"></a>

## Discussion

This property is functionally equivalent to passing [MLDataValue.SequenceType](../mldatavalue/sequencetype.md) `.self` to [column(type:)](column%28type_%29.md). Typically you ensure [type](type.md) is equal to [MLDataValue.ValueType.sequence](../mldatavalue/valuetype/sequence.md) before getting this property.

## See Also

### Exposing the underlying type to generate a data column

- [type](type.md): The underlying type of the column.
- [ints](ints.md): A cloned data column of integers.
- [doubles](doubles.md): A cloned data column of doubles.
- [strings](strings.md): A cloned data column of strings.
- [dictionaries](dictionaries.md): A cloned data column of machine learning dictionaries.
- [multiArrays](multiarrays.md): A cloned data column of machine learning multi-arrays.
- [column(type:)](column%28type_%29.md): Clones the column to a data column of the given type.
