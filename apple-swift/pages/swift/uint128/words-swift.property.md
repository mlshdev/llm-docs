> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uint128/words-swift.property

# words

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection containing the words of this value’s binary representation, in order from the least significant to most significant.

## Declaration

```swift
var words: UInt128.Words { get }
```

<a id="discussion"></a>

## Discussion

Negative values are returned in two’s complement representation, regardless of the type’s underlying implementation.
