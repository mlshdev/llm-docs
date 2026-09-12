> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/words-swift.associatedtype](https://developer.apple.com/documentation/swift/binaryinteger/words-swift.associatedtype)

# Words

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents the words of a binary integer.

## Declaration

```swift
associatedtype Words : RandomAccessCollection where Self.Words.Element == UInt, Self.Words.Index == Int
```

<a id="discussion"></a>

## Discussion

The `Words` type must conform to the `RandomAccessCollection` protocol with an `Element` type of `UInt` and `Index` type of `Int`.

## See Also

### Working with Binary Representation

- [bitWidth](bitwidth.md): The number of bits in the current binary representation of this value.
- [trailingZeroBitCount](trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [words](words-swift.property.md): A collection containing the words of this value’s binary representation, in order from the least significant to most significant.
