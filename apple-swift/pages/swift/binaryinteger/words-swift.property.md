> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/words-swift.property](https://developer.apple.com/documentation/swift/binaryinteger/words-swift.property)

# words

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

## Declaration

```swift
var words: Self.Words { get }
```

<a id="discussion"></a>

## Discussion

Negative values are returned in two’s complement representation, regardless of the type’s underlying implementation.

## See Also

### Working with Binary Representation

- [bitWidth](bitwidth.md): The number of bits in the current binary representation of this value.
- [trailingZeroBitCount](trailingzerobitcount.md): The number of trailing zeros in this value’s binary representation.
- [Words](words-swift.associatedtype.md): A type that represents the words of a binary integer.
