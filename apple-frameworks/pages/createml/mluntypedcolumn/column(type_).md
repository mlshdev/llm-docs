> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/column(type:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/column(type:))

# column(type:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Clones the column to a data column of the given type.

## Declaration

```swift
func column<T>(type: T.Type) -> MLDataColumn<T>? where T : MLDataValueConvertible
```

## Parameters

- `type`: A metatype used to create a new data column of that type.

<a id="return-value"></a>

## Return Value

A new data column if the underlying type of the column is the same as `type`; otherwise `nil`.

<a id="discussion"></a>

## Discussion

Use this method to create a typed copy of the column. For example, to create a data column of integers from an untyped column of integers, use [column(type:)](column%28type_%29.md) with [Int](https://developer.apple.com/documentation/swift/int)`.self` as the argument for the `type` parameter.

## See Also

### Exposing the underlying type to generate a data column

- [type](type.md): The underlying type of the column.
- [ints](ints.md): A cloned data column of integers.
- [doubles](doubles.md): A cloned data column of doubles.
- [strings](strings.md): A cloned data column of strings.
- [sequences](sequences.md): A cloned data column of machine learning sequences.
- [dictionaries](dictionaries.md): A cloned data column of machine learning dictionaries.
- [multiArrays](multiarrays.md): A cloned data column of machine learning multi-arrays.
