> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncsequence/lines](https://developer.apple.com/documentation/swift/asyncsequence/lines)

# lines

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A non-blocking sequence of newline-separated `Strings` created by decoding the elements of `self` as UTF8.

## Declaration

```swift
var lines: AsyncLineSequence<Self> { get }
```

## See Also

### Adapting Textual Sequences

- [characters](characters.md): Conforms when `Element` is `UInt8`. A non-blocking sequence of `Characters` created by decoding the elements of `self` as UTF8.
- [AsyncCharacterSequence](https://developer.apple.com/documentation/foundation/asynccharactersequence): An asynchronous sequence of characters.
- [unicodeScalars](unicodescalars.md): Conforms when `Element` is `UInt8`. A non-blocking sequence of `UnicodeScalars` created by decoding the elements of `self` as UTF8.
- [AsyncUnicodeScalarSequence](https://developer.apple.com/documentation/foundation/asyncunicodescalarsequence): An asychronous sequence of Unicode scalar values.
- [AsyncLineSequence](https://developer.apple.com/documentation/foundation/asynclinesequence): An asynchronous sequence of lines of text.
