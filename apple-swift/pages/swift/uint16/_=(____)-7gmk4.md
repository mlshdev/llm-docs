> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint16/_=(_:_:)-7gmk4](https://developer.apple.com/documentation/swift/uint16/_=(_:_:)-7gmk4)

# /=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Divides the first value by the second and stores the quotient in the left-hand-side variable.

## Declaration

```swift
static func /= (lhs: inout UInt16, rhs: UInt16)
```

## Parameters

- `lhs`: The value to divide.
- `rhs`: The value to divide `lhs` by. `rhs` must not be zero.

<a id="discussion"></a>

## Discussion

For integer types, any remainder of the division is discarded.

```swift
var x = 21
x /= 5
// x == 4
```
