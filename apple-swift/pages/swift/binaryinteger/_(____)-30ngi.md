> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/_(_:_:)-30ngi](https://developer.apple.com/documentation/swift/binaryinteger/_(_:_:)-30ngi)

# %(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the remainder of dividing the first value by the second.

## Declaration

```swift
static func % (lhs: Self, rhs: Self) -> Self
```

## Parameters

- `lhs`: The value to divide.
- `rhs`: The value to divide `lhs` by. `rhs` must not be zero.

<a id="discussion"></a>

## Discussion

The result of the remainder operator (`%`) has the same sign as `lhs` and has a magnitude less than `rhs.magnitude`.

```swift
let x = 22 % 5
// x == 2
let y = 22 % -5
// y == 2
let z = -22 % -5
// z == -2
```

For any two integers `a` and `b`, their quotient `q`, and their remainder `r`, `a == b * q + r`.
