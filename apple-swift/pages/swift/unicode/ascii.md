> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/ascii](https://developer.apple.com/documentation/swift/unicode/ascii)

# Unicode.ASCII

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@frozen enum ASCII
```

## Topics

### Structures

- [Unicode.ASCII.Parser](ascii/parser.md)

### Type Aliases

- [Unicode.ASCII.CodeUnit](ascii/codeunit.md): The basic unit of encoding
- [Unicode.ASCII.EncodedScalar](ascii/encodedscalar.md): A valid scalar value as represented in this encoding
- [Unicode.ASCII.ForwardParser](ascii/forwardparser.md): A type that can be used to parse `CodeUnits` into `EncodedScalar`s.
- [Unicode.ASCII.ReverseParser](ascii/reverseparser.md): A type that can be used to parse a reversed sequence of `CodeUnits` into `EncodedScalar`s.

### Type Properties

- [encodedReplacementCharacter](ascii/encodedreplacementcharacter.md): A unicode scalar value to be used when repairing encoding/decoding errors, as represented in this encoding.

### Type Methods

- [decode(\_:)](ascii/decode%28__%29.md): Converts from encoded to encoding-independent representation
- [encode(\_:)](ascii/encode%28__%29.md): Converts from encoding-independent to encoded representation, returning `nil` if the scalar can’t be represented in this encoding.
- [isASCII(\_:)](ascii/isascii%28__%29.md): Returns whether the given code unit represents an ASCII scalar
- [transcode(\_:from:)](ascii/transcode%28__from_%29.md): Converts a scalar from another encoding’s representation, returning `nil` if the scalar can’t be represented in this encoding.

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [Copyable](../copyable.md)
- [Escapable](../escapable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Unicode Codecs

- [UnicodeCodec](../unicodecodec.md): A Unicode encoding form that translates between Unicode scalar values and form-specific code units.
- [Unicode.UTF8](utf8.md)
- [Unicode.UTF16](utf16.md)
- [Unicode.UTF32](utf32.md)
- [UnicodeDecodingResult](../unicodedecodingresult.md): The result of one Unicode decoding step.
- [Unicode.ParseResult](parseresult.md): The result of attempting to parse a `T` from some input.
