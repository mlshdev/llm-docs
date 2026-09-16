> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uint128/_=(_:_:)-75khj

# %=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Divides the first value by the second and stores the remainder in the left-hand-side variable.

## Declaration

```swift
static func %= (a: inout UInt128, b: UInt128)
```

<a id="discussion"></a>

## Discussion

The result has the same sign as `lhs` and has a magnitude less than `rhs.magnitude`.

```swift
var x = 22
x %= 5
// x == 2

var y = 22
y %= -5
// y == 2

var z = -22
z %= -5
// z == -2
```
