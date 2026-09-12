> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf32/encodedreplacementcharacter](https://developer.apple.com/documentation/swift/unicode/utf32/encodedreplacementcharacter)

# encodedReplacementCharacter

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unicode scalar value to be used when repairing encoding/decoding errors, as represented in this encoding.

## Declaration

```swift
static var encodedReplacementCharacter: Unicode.UTF32.EncodedScalar { get }
```

<a id="discussion"></a>

## Discussion

If the Unicode replacement character U+FFFD is representable in this encoding, `encodedReplacementCharacter` encodes that scalar value.
