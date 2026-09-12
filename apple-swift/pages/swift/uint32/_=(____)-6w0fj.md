> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint32/_=(_:_:)-6w0fj](https://developer.apple.com/documentation/swift/uint32/_=(_:_:)-6w0fj)

# %=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Divides the first value by the second and stores the remainder in the left-hand-side variable.

## Declaration

```swift
static func %= (lhs: inout UInt32, rhs: UInt32)
```

## Parameters

- `lhs`: The value to divide.
- `rhs`: The value to divide `lhs` by. `rhs` must not be zero.

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
