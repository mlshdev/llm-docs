> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint32/_=(_:_:)-8vgdn](https://developer.apple.com/documentation/swift/uint32/_=(_:_:)-8vgdn)

# ^=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores the result of performing a bitwise XOR operation on the two given values in the left-hand-side variable.

## Declaration

```swift
static func ^= (lhs: inout UInt32, rhs: UInt32)
```

## Parameters

- `lhs`: An integer value.
- `rhs`: Another integer value.

<a id="discussion"></a>

## Discussion

A bitwise XOR operation, also known as an exclusive OR operation, results in a value that has each bit set to `1` where *one or the other but not both* of its arguments had that bit set to `1`. For example:

```swift
var x: UInt8 = 5          // 0b00000101
let y: UInt8 = 14         // 0b00001110
x ^= y                    // 0b00001011
```
