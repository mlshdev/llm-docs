> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicodedecodingresult](https://developer.apple.com/documentation/swift/unicodedecodingresult)

# UnicodeDecodingResult

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The result of one Unicode decoding step.

## Declaration

```swift
@frozen enum UnicodeDecodingResult
```

<a id="overview"></a>

## Overview

Each `UnicodeDecodingResult` instance can represent a Unicode scalar value, an indication that no more Unicode scalars are available, or an indication of a decoding error.

## Topics

### Operators

- [==(\_:\_:)](unicodedecodingresult/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Enumeration Cases

- [UnicodeDecodingResult.emptyInput](unicodedecodingresult/emptyinput.md): An indication that no more Unicode scalars are available in the input.
- [UnicodeDecodingResult.error](unicodedecodingresult/error.md): An indication of a decoding error.
- [UnicodeDecodingResult.scalarValue(\_:)](unicodedecodingresult/scalarvalue%28__%29.md): A decoded Unicode scalar value.

### Default Implementations

- [Equatable Implementations](unicodedecodingresult/equatable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Equatable](equatable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Unicode Codecs

- [UnicodeCodec](unicodecodec.md): A Unicode encoding form that translates between Unicode scalar values and form-specific code units.
- [Unicode.ASCII](unicode/ascii.md)
- [Unicode.UTF8](unicode/utf8.md)
- [Unicode.UTF16](unicode/utf16.md)
- [Unicode.UTF32](unicode/utf32.md)
- [Unicode.ParseResult](unicode/parseresult.md): The result of attempting to parse a `T` from some input.
