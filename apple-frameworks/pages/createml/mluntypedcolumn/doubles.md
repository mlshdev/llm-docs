> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/doubles](https://developer.apple.com/documentation/createml/mluntypedcolumn/doubles)

# doubles

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A cloned data column of doubles.

## Declaration

```swift
var doubles: MLDataColumn<Double>? { get }
```

<a id="return-value"></a>

## Return Value

A new data column if the underlying type of the column is [Double](https://developer.apple.com/documentation/swift/double); otherwise `nil`.

<a id="discussion"></a>

## Discussion

This property is functionally equivalent to passing [Double](https://developer.apple.com/documentation/swift/double)`.self` to [column(type:)](column%28type_%29.md). Typically you ensure [type](type.md) is equal to [MLDataValue.ValueType.double](../mldatavalue/valuetype/double.md) before getting this property.

## See Also

### Exposing the underlying type to generate a data column

- [type](type.md): The underlying type of the column.
- [ints](ints.md): A cloned data column of integers.
- [strings](strings.md): A cloned data column of strings.
- [sequences](sequences.md): A cloned data column of machine learning sequences.
- [dictionaries](dictionaries.md): A cloned data column of machine learning dictionaries.
- [multiArrays](multiarrays.md): A cloned data column of machine learning multi-arrays.
- [column(type:)](column%28type_%29.md): Clones the column to a data column of the given type.
