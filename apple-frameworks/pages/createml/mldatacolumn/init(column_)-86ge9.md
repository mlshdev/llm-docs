> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/init(column:)-86ge9](https://developer.apple.com/documentation/createml/mldatacolumn/init(column:)-86ge9)

# init(column:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of doubles from a given column whose elements can be converted to doubles.

## Declaration

```swift
init<T>(column: MLDataColumn<T>) where T : MLDataValueConvertible
```

## Parameters

- `column`: An [MLDataColumn](../mldatacolumn.md) of elements convertible to [Double](https://developer.apple.com/documentation/swift/double).

<a id="discussion"></a>

## Discussion

Use this initializer to create a column of doubles from another column. Start by creating a column that is convertible to a column of doubles.

```swift
let stringsColumn = MLDataColumn(["1.0", "2.0", "3.0", "4.0", "5.0"])
print(stringsColumn) // Prints ["1.0", "2.0", "3.0", "4.0", "5.0"]
```

Then use [init(column:)](init%28column_%29-86ge9.md) to convert the column to a column of doubles.

```swift
let doublesColumn = MLDataColumn<Double>(column: stringsColumn)
print(doublesColumn) // Prints [1.0, 2.0, 3.0, 4.0, 5.0]
```

## See Also

### Creating a data column by converting another column

- [map(to:)](map%28to_%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a new column by converting this column to the given type.
- [init(column:)](init%28column_%29.md): Conforms when `Element` is `MLDataValue.SequenceType`. Creates a new column of machine learning sequences from a given column whose elements can be converted to sequences.
- [init(column:)](init%28column_%29-5rg9u.md): Conforms when `Element` is `Int`. Creates a new column of integers from a given column whose elements can be converted to integers.
- [init(column:)](init%28column_%29-2rxtu.md): Conforms when `Element` is `[Int]`. Creates a new column of arrays of integers from a given column whose elements can be converted to an array of integers.
- [init(column:)](init%28column_%29-23pmx.md): Conforms when `Element` is `[Double]`. Creates a new column of arrays of doubles from a given column whose elements can be converted to an array of doubles.
- [init(column:)](init%28column_%29-ztkv.md): Conforms when `Element` is `String`. Creates a new column of strings from a given column whose elements can be converted to strings.
- [init(column:)](init%28column_%29-8uzuq.md): Conforms when `Element` is `[String]`. Creates a new column of arrays of strings from a given column whose elements can be converted to an array of strings.
- [init(column:)](init%28column_%29-855l9.md): Conforms when `Element` is `MLDataValue.SequenceType`. Creates a new column of machine learning sequences from a given column whose elements can be converted to sequences.
- [init(column:)](init%28column_%29-s8g5.md): Conforms when `Element` is `MLDataValue.DictionaryType`. Creates a new column of machine learning dictionaries from a given column whose elements can be converted to dictionaries.
