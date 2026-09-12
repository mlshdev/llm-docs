> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicodecodec](https://developer.apple.com/documentation/swift/unicodecodec)

# UnicodeCodec

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Unicode encoding form that translates between Unicode scalar values and form-specific code units.

## Declaration

```swift
protocol UnicodeCodec : _UnicodeEncoding
```

<a id="overview"></a>

## Overview

The `UnicodeCodec` protocol declares methods that decode code unit sequences into Unicode scalar values and encode Unicode scalar values into code unit sequences. The standard library implements codecs for the UTF-8, UTF-16, and UTF-32 encoding schemes as the `UTF8`, `UTF16`, and `UTF32` types, respectively. Use the `Unicode.Scalar` type to work with decoded Unicode scalar values.

## Topics

### Initializers

- [init()](unicodecodec/init%28%29.md): Creates an instance of the codec.

### Instance Methods

- [decode(\_:)](unicodecodec/decode%28__%29.md): Starts or continues decoding a code unit sequence into Unicode scalar values.

### Type Methods

- [encode(\_:into:)](unicodecodec/encode%28__into_%29.md): Encodes a Unicode scalar as a series of code units by calling the given closure on each code unit.

## Relationships

### Conforming Types

- [Unicode.UTF16](unicode/utf16.md)
- [Unicode.UTF32](unicode/utf32.md)
- [Unicode.UTF8](unicode/utf8.md)

## See Also

### Unicode Codecs

- [Unicode.ASCII](unicode/ascii.md)
- [Unicode.UTF8](unicode/utf8.md)
- [Unicode.UTF16](unicode/utf16.md)
- [Unicode.UTF32](unicode/utf32.md)
- [UnicodeDecodingResult](unicodedecodingresult.md): The result of one Unicode decoding step.
- [Unicode.ParseResult](unicode/parseresult.md): The result of attempting to parse a `T` from some input.
