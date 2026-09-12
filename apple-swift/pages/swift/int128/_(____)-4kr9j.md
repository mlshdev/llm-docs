> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int128/_(_:_:)-4kr9j](https://developer.apple.com/documentation/swift/int128/_(_:_:)-4kr9j)

# %(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the remainder of dividing the first value by the second.

## Declaration

```swift
static func % (a: Int128, b: Int128) -> Int128
```

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
