> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint16/&(_:_:)-3mlmk](https://developer.apple.com/documentation/swift/uint16/&(_:_:)-3mlmk)

# &(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of performing a bitwise AND operation on the two given values.

## Declaration

```swift
static func & (lhs: Self, rhs: Self) -> Self
```

## Parameters

- `lhs`: An integer value.
- `rhs`: Another integer value.

<a id="discussion"></a>

## Discussion

A bitwise AND operation results in a value that has each bit set to `1` where *both* of its arguments have that bit set to `1`. For example:

```swift
let x: UInt8 = 5          // 0b00000101
let y: UInt8 = 14         // 0b00001110
let z = x & y             // 0b00000100
// z == 4
```
