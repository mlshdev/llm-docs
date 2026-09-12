> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnprotocol/_(_:_:)-7gy2j](https://developer.apple.com/documentation/tabulardata/columnprotocol/_(_:_:)-7gy2j)

# \<(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean array that indicates whether the corresponding element of a column type is less than a value.

## Declaration

```swift
static func < (lhs: Self, rhs: Self.Element) -> [Bool]
```

<a id="return-value"></a>

## Return Value

A Boolean array.

<a id="discussion"></a>

## Discussion

- lhs: A column type.
- rhs: A value of the same type as the column.
