> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8](https://developer.apple.com/documentation/swift/unicode/utf8)

# Unicode.UTF8

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@frozen enum UTF8
```

## Topics

### Structures

- [Unicode.UTF8.ForwardParser](utf8/forwardparser.md): A type that can be used to parse `CodeUnits` into `EncodedScalar`s.
- [Unicode.UTF8.ReverseParser](utf8/reverseparser.md): A type that can be used to parse a reversed sequence of `CodeUnits` into `EncodedScalar`s.
- [Unicode.UTF8.ValidationError](utf8/validationerror.md): The kind and location of a UTF-8 encoding error.

### Type Aliases

- [Unicode.UTF8.CodeUnit](utf8/codeunit.md): The basic unit of encoding
- [Unicode.UTF8.EncodedScalar](utf8/encodedscalar.md): A valid scalar value as represented in this encoding

### Type Properties

- [encodedReplacementCharacter](utf8/encodedreplacementcharacter.md): A unicode scalar value to be used when repairing encoding/decoding errors, as represented in this encoding.

### Type Methods

- [decode(\_:)](utf8/decode%28__%29-swift.type.method.md): Converts from encoded to encoding-independent representation
- [encode(\_:)](utf8/encode%28__%29.md): Converts from encoding-independent to encoded representation, returning `nil` if the scalar can’t be represented in this encoding.
- [isASCII(\_:)](utf8/isascii%28__%29.md): Returns whether the given code unit represents an ASCII scalar
- [isContinuation(\_:)](utf8/iscontinuation%28__%29.md): Returns a Boolean value indicating whether the specified code unit is a UTF-8 continuation byte.
- [transcode(\_:from:)](utf8/transcode%28__from_%29.md): Converts a scalar from another encoding’s representation, returning `nil` if the scalar can’t be represented in this encoding.
- [width(\_:)](utf8/width%28__%29.md): Returns the number of code units required to encode the given Unicode scalar.

### Default Implementations

- [UnicodeCodec Implementations](utf8/unicodecodec-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [Copyable](../copyable.md)
- [Escapable](../escapable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
- [UnicodeCodec](../unicodecodec.md)

## See Also

### Unicode Codecs

- [UnicodeCodec](../unicodecodec.md): A Unicode encoding form that translates between Unicode scalar values and form-specific code units.
- [Unicode.ASCII](ascii.md)
- [Unicode.UTF16](utf16.md)
- [Unicode.UTF32](utf32.md)
- [UnicodeDecodingResult](../unicodedecodingresult.md): The result of one Unicode decoding step.
- [Unicode.ParseResult](parseresult.md): The result of attempting to parse a `T` from some input.
