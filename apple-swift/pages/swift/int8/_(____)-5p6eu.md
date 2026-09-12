> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int8/_(_:_:)-5p6eu](https://developer.apple.com/documentation/swift/int8/_(_:_:)-5p6eu)

# |(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of performing a bitwise OR operation on the two given values.

## Declaration

```swift
static func | (lhs: Int8, rhs: Int8) -> Int8
```

## Parameters

- `lhs`: An integer value.
- `rhs`: Another integer value.

<a id="discussion"></a>

## Discussion

A bitwise OR operation results in a value that has each bit set to `1` where *one or both* of its arguments have that bit set to `1`. For example:

```swift
let x: UInt8 = 5          // 0b00000101
let y: UInt8 = 14         // 0b00001110
let z = x | y             // 0b00001111
// z == 15
```
