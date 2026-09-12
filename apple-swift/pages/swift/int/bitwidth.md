> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/bitwidth](https://developer.apple.com/documentation/swift/int/bitwidth)

# bitWidth

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bits used for the underlying binary representation of values of this type.

## Declaration

```swift
static var bitWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

The bit width of a `Int` instance is 32 on 32-bit platforms and 64 on 64-bit platforms.

## See Also

### Working with Binary Representation

- [bitWidth](bitwidth-swift.property.md): The number of bits in the current binary representation of this value.
- [nonzeroBitCount](nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.
- [leadingZeroBitCount](leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [trailingZeroBitCount](trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.
- [Int.Words](words-swift.struct.md): A type that represents the words of this integer.
