> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode](https://developer.apple.com/documentation/swift/unicode)

# Unicode

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A namespace for Unicode utilities.

## Declaration

```swift
@frozen enum Unicode
```

## Topics

### Individual Unicode Scalar Values

- [Unicode.Scalar](unicode/scalar.md): A Unicode scalar value.

### Unicode Scalar Classifications

- [Unicode.GeneralCategory](unicode/generalcategory.md): The most general classification of a Unicode scalar.
- [Unicode.CanonicalCombiningClass](unicode/canonicalcombiningclass.md): The classification of a scalar used in the Canonical Ordering Algorithm defined by the Unicode Standard.
- [Unicode.NumericType](unicode/numerictype.md): The numeric type of a scalar.

### Unicode Codecs

- [UnicodeCodec](unicodecodec.md): A Unicode encoding form that translates between Unicode scalar values and form-specific code units.
- [Unicode.ASCII](unicode/ascii.md)
- [Unicode.UTF8](unicode/utf8.md)
- [Unicode.UTF16](unicode/utf16.md)
- [Unicode.UTF32](unicode/utf32.md)
- [UnicodeDecodingResult](unicodedecodingresult.md): The result of one Unicode decoding step.
- [Unicode.ParseResult](unicode/parseresult.md): The result of attempting to parse a `T` from some input.

### Translation Between Unicode Encodings

- [transcode(\_:from:to:stoppingOnError:into:)](transcode%28__from_to_stoppingonerror_into_%29.md): Translates the given input from one Unicode encoding to another by calling the given closure.

### Deprecated

- [UnicodeScalar](unicodescalar.md)
- [UTF8](utf8.md)
- [UTF16](utf16.md)
- [UTF32](utf32.md)

### Type Aliases

- [Unicode.Encoding](unicode/encoding.md)
- [Unicode.Parser](unicode/parser.md)
- [Unicode.Version](unicode/version.md): A version of the Unicode Standard represented by its major and minor components.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
