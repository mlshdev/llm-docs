> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnprotocol/!=(_:_:)-72ddh](https://developer.apple.com/documentation/tabulardata/columnprotocol/!=(_:_:)-72ddh)

# !=(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean array that indicates whether the value isn’t equal to the corresponding element of a column type.

## Declaration

```swift
static func != (lhs: Self.Element, rhs: Self) -> [Bool]
```

<a id="return-value"></a>

## Return Value

A Boolean array.

<a id="discussion"></a>

## Discussion

- lhs: A value of the same type as the column.
- rhs: A column type.

## See Also

### Comparing a Column with a Value

- [==(\_:\_:)](==%28____%29-5jc0x.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type is equal to a value.
- [==(\_:\_:)](==%28____%29-4hx04.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value is equal to the corresponding element of a column type.
- [!=(\_:\_:)](!=%28____%29-557vb.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type isn’t equal to a value.
