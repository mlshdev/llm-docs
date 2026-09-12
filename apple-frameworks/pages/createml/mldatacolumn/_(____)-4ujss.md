> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/_(_:_:)-4ujss](https://developer.apple.com/documentation/createml/mldatacolumn/_(_:_:)-4ujss)

# \<(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column of Booleans by testing whether each element in the given column is less than the given value.

## Declaration

```swift
static func < (a: MLDataColumn<Element>, b: Element) -> MLDataColumn<Bool>
```

## Parameters

- `a`: A column.
- `b`: A value of the same type as the elements of the column.

<a id="return-value"></a>

## Return Value

A new column of Booleans.

## See Also

### Comparing a column with a value to generate a column of booleans

- [==(\_:\_:)](==%28____%29-7clbs.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is equal to the given value.
- [!=(\_:\_:)](!=%28____%29-4jp0y.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is not equal to the given value.
- [\<=(\_:\_:)](_=%28____%29-86x3a.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is less than or equal to the given value.
- [\>(\_:\_:)](_%28____%29-ebgq.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is greater than the given value.
- [\>=(\_:\_:)](_=%28____%29-1ctuz.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a column of Booleans by testing whether each element in the given column is greater than or equal to the given value.
