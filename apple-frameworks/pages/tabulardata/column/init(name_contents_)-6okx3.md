> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/init(name:contents:)-6okx3](https://developer.apple.com/documentation/tabulardata/column/init(name:contents:)-6okx3)

# init(name:contents:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a column with a name and a sequence of nonoptional values.

## Declaration

```swift
init<S>(name: String, contents: S) where WrappedElement == S.Element, S : Sequence
```

## Parameters

- `name`: A column name.
- `contents`: A sequence of nonoptional elements.

## See Also

### Creating a Column

- [init(name:capacity:)](init%28name_capacity_%29.md): Creates a column with a name and a capacity.
- [init(\_:capacity:)](init%28__capacity_%29.md): Creates a column with a column identifier and a capacity.
- [init(name:contents:)](init%28name_contents_%29-8nxtj.md): Creates a column with a name and a sequence of optional values.
- [init(\_:contents:)](init%28__contents_%29-1871a.md): Creates a column with an identifier and a sequence of nonoptional values.
- [init(\_:contents:)](init%28__contents_%29-7z5ji.md): Creates a column with a column identifier and a sequence of optional values.
- [init(\_:)](init%28__%29.md): Creates a column from a column slice.
