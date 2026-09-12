> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/map(to:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/map(to:))

# map(to:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column of typed values by converting this untyped column to the given type.

## Declaration

```swift
func map<T>(to type: T.Type) -> MLDataColumn<T> where T : MLDataValueConvertible
```

## Parameters

- `type`: A metatype used to create a new data column of that type.

<a id="return-value"></a>

## Return Value

A new data column if the column’s underlying type is convertible to given type; otherwise `nil`.

<a id="discussion"></a>

## Discussion

Use this method to convert the elements of the column to a data column of the given type via [MLDataValueConvertible](../mldatavalueconvertible.md). Unlike [column(type:)](column%28type_%29.md), which doesn’t alter its elements, [map(to:)](map%28to_%29.md) converts the elements to the destination type. For example, you can use [map(to:)](map%28to_%29.md) to convert an untyped column of integers to a data column of strings.
