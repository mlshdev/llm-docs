> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/_(_:_:)-4hvzy](https://developer.apple.com/documentation/swift/uint128/_(_:_:)-4hvzy)

# /(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the quotient of dividing the first value by the second.

## Declaration

```swift
static func / (a: UInt128, b: UInt128) -> UInt128
```

<a id="discussion"></a>

## Discussion

For integer types, any remainder of the division is discarded.

```swift
let x = 21 / 5
// x == 4
```
