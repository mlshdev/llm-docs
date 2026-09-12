> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/map(_:)](https://developer.apple.com/documentation/createml/mldatacolumn/map(_:))

# map(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column by applying the given thread-safe transform to every non-missing element of this column.

## Declaration

```swift
func map<T>(_ lazyTransform: @escaping (Element) -> T) -> MLDataColumn<T> where T : MLDataValueConvertible
```

## Parameters

- `lazyTransform`: A thread-safe element transformation function. The implementation of the transform you provide should accept an `Element` of the column and return a transformed value of a type that conforms to [MLDataValueConvertible](../mldatavalueconvertible.md).

<a id="return-value"></a>

## Return Value

A new column typed to the return type of `lazyTransform`.

## See Also

### Transforming elements to generate a column

- [mapMissing(\_:)](mapmissing%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a new column, potentially with missing elements, by applying the given thread-safe transform to every element of the column, including missing elements.
