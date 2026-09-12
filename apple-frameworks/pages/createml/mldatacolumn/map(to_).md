> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/map(to:)](https://developer.apple.com/documentation/createml/mldatacolumn/map(to:))

# map(to:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column by converting this column to the given type.

## Declaration

```swift
func map<T>(to type: T.Type) -> MLDataColumn<T> where T : MLDataValueConvertible
```

## Parameters

- `type`: A type of [MLDataColumn](../mldatacolumn.md) to convert the contents of the column to, using [MLDataValueConvertible](../mldatavalueconvertible.md).

<a id="return-value"></a>

## Return Value

A new column.

<a id="discussion"></a>

## Discussion

This method is functionally equivalent to the initializers of [MLDataColumn](../mldatacolumn.md) that have one parameter `column`, such as [init(column:)](init%28column_%29-86ge9.md).

## See Also

### Creating a data column by converting another column

- [init(column:)](init%28column_%29.md): Conforms when `Element` is `MLDataValue.SequenceType`. Creates a new column of machine learning sequences from a given column whose elements can be converted to sequences.
- [init(column:)](init%28column_%29-5rg9u.md): Conforms when `Element` is `Int`. Creates a new column of integers from a given column whose elements can be converted to integers.
- [init(column:)](init%28column_%29-2rxtu.md): Conforms when `Element` is `[Int]`. Creates a new column of arrays of integers from a given column whose elements can be converted to an array of integers.
- [init(column:)](init%28column_%29-86ge9.md): Conforms when `Element` is `Double`. Creates a new column of doubles from a given column whose elements can be converted to doubles.
- [init(column:)](init%28column_%29-23pmx.md): Conforms when `Element` is `[Double]`. Creates a new column of arrays of doubles from a given column whose elements can be converted to an array of doubles.
- [init(column:)](init%28column_%29-ztkv.md): Conforms when `Element` is `String`. Creates a new column of strings from a given column whose elements can be converted to strings.
- [init(column:)](init%28column_%29-8uzuq.md): Conforms when `Element` is `[String]`. Creates a new column of arrays of strings from a given column whose elements can be converted to an array of strings.
- [init(column:)](init%28column_%29-855l9.md): Conforms when `Element` is `MLDataValue.SequenceType`. Creates a new column of machine learning sequences from a given column whose elements can be converted to sequences.
- [init(column:)](init%28column_%29-s8g5.md): Conforms when `Element` is `MLDataValue.DictionaryType`. Creates a new column of machine learning dictionaries from a given column whose elements can be converted to dictionaries.
