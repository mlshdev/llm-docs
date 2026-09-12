> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnprotocol/_(_:_:)-68any](https://developer.apple.com/documentation/tabulardata/columnprotocol/_(_:_:)-68any)

# \>(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean array that indicates whether the value is greater than the corresponding element of a column type.

## Declaration

```swift
static func > (lhs: Self.Element, rhs: Self) -> [Bool]
```

<a id="return-value"></a>

## Return Value

A Boolean array.

<a id="discussion"></a>

## Discussion

- lhs: A value of the same type as the column.
- rhs: A column type.
