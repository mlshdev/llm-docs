> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/trailingzerobitcount](https://developer.apple.com/documentation/swift/uint128/trailingzerobitcount)

# trailingZeroBitCount

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The number of trailing zeros in this value’s binary representation.

## Declaration

```swift
var trailingZeroBitCount: Int { get }
```

<a id="discussion"></a>

## Discussion

For example, in a fixed-width integer type with a `bitWidth` value of 8, the number -8 has three trailing zeros.

```swift
let x = Int8(bitPattern: 0b1111_1000)
// x == -8
// x.trailingZeroBitCount == 3
```

If the value is zero, then `trailingZeroBitCount` is equal to `bitWidth`.
