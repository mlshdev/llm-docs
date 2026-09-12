> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf32](https://developer.apple.com/documentation/swift/unicode/utf32)

# Unicode.UTF32

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@frozen enum UTF32
```

## Topics

### Structures

- [Unicode.UTF32.Parser](utf32/parser.md)

### Operators

- [==(\_:\_:)](utf32/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Instance Properties

- [hashValue](utf32/hashvalue.md): The hash value.

### Instance Methods

- [hash(into:)](utf32/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Aliases

- [Unicode.UTF32.CodeUnit](utf32/codeunit.md): The basic unit of encoding
- [Unicode.UTF32.EncodedScalar](utf32/encodedscalar.md): A valid scalar value as represented in this encoding
- [Unicode.UTF32.ForwardParser](utf32/forwardparser.md): A type that can be used to parse `CodeUnits` into `EncodedScalar`s.
- [Unicode.UTF32.ReverseParser](utf32/reverseparser.md): A type that can be used to parse a reversed sequence of `CodeUnits` into `EncodedScalar`s.

### Type Properties

- [encodedReplacementCharacter](utf32/encodedreplacementcharacter.md): A unicode scalar value to be used when repairing encoding/decoding errors, as represented in this encoding.

### Type Methods

- [decode(\_:)](utf32/decode%28__%29-swift.type.method.md): Converts from encoded to encoding-independent representation
- [encode(\_:)](utf32/encode%28__%29.md): Converts from encoding-independent to encoded representation, returning `nil` if the scalar can’t be represented in this encoding.
- [isASCII(\_:)](utf32/isascii%28__%29.md): Returns whether the given code unit represents an ASCII scalar

### Default Implementations

- [Equatable Implementations](utf32/equatable-implementations.md)
- [UnicodeCodec Implementations](utf32/unicodecodec-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [Copyable](../copyable.md)
- [Equatable](../equatable.md)
- [Escapable](../escapable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
- [UnicodeCodec](../unicodecodec.md)

## See Also

### Unicode Codecs

- [UnicodeCodec](../unicodecodec.md): A Unicode encoding form that translates between Unicode scalar values and form-specific code units.
- [Unicode.ASCII](ascii.md)
- [Unicode.UTF8](utf8.md)
- [Unicode.UTF16](utf16.md)
- [UnicodeDecodingResult](../unicodedecodingresult.md): The result of one Unicode decoding step.
- [Unicode.ParseResult](parseresult.md): The result of attempting to parse a `T` from some input.
