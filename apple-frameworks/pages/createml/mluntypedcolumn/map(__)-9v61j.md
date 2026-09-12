> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/map(_:)-9v61j](https://developer.apple.com/documentation/createml/mluntypedcolumn/map(_:)-9v61j)

# map(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of typed values, potentially with missing values, by applying the given thread-safe transform to every non-missing element of this untyped column.

## Declaration

```swift
func map<T>(_ lazyTransform: @escaping (MLDataValue) -> T?) -> MLDataColumn<T> where T : MLDataValueConvertible
```

## Parameters

- `lazyTransform`: A thread-safe element transformation function. The implementation of the transform you provide should accept an `Element` of the column and return a transformed value of a type that conforms to [MLDataValueConvertible](../mldatavalueconvertible.md). If the transform returns `nil` for a given element, the corresponding element in the new column will have a missing value.

<a id="return-value"></a>

## Return Value

A new `MLDataColumn` typed to the return type of `lazyTransform`.

## See Also

### Transforming elements to generate a data column

- [map(\_:)](map%28__%29.md): Creates a new column of typed values by applying the given thread-safe transform to every non-missing element of this untyped column.
- [map(\_:)](map%28__%29-139qy.md): Creates a new column of typed values by applying the given thread-safe transform to every non-missing element of this untyped column.
- [mapMissing(\_:)](mapmissing%28__%29.md): Creates a new column of typed values by applying the given thread-safe transform to every element of this untyped column, including missing elements.
