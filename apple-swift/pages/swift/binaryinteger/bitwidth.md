> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/bitwidth](https://developer.apple.com/documentation/swift/binaryinteger/bitwidth)

# bitWidth

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bits in the current binary representation of this value.

## Declaration

```swift
var bitWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

This property is a constant for instances of fixed-width integer types.

## Default Implementations

### BinaryInteger Implementations

- [bitWidth](bitwidth-57x70.md): The number of bits in the current binary representation of this value.

## See Also

### Working with Binary Representation

- [trailingZeroBitCount](trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.
- [Words](words-swift.associatedtype.md): A type that represents the words of a binary integer.
