> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/type](https://developer.apple.com/documentation/createml/mluntypedcolumn/type)

# type

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The underlying type of the column.

## Declaration

```swift
var type: MLDataValue.ValueType { get }
```

<a id="discussion"></a>

## Discussion

Use this to determine the underlying type of the column. Then use a corresponding property or method to create an [MLDataColumn](../mldatacolumn.md) of the untyped column. For example, if [type](type.md) is equal to [MLDataValue.ValueType.double](../mldatavalue/valuetype/double.md), then use the [MLUntypedColumn](../mluntypedcolumn.md) [doubles](doubles.md) property.

## See Also

### Exposing the underlying type to generate a data column

- [ints](ints.md): A cloned data column of integers.
- [doubles](doubles.md): A cloned data column of doubles.
- [strings](strings.md): A cloned data column of strings.
- [sequences](sequences.md): A cloned data column of machine learning sequences.
- [dictionaries](dictionaries.md): A cloned data column of machine learning dictionaries.
- [multiArrays](multiarrays.md): A cloned data column of machine learning multi-arrays.
- [column(type:)](column%28type_%29.md): Clones the column to a data column of the given type.
