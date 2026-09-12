> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/parseresult](https://developer.apple.com/documentation/swift/unicode/parseresult)

# Unicode.ParseResult

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The result of attempting to parse a `T` from some input.

## Declaration

```swift
@frozen enum ParseResult<T>
```

## Topics

### Enumeration Cases

- [Unicode.ParseResult.emptyInput](parseresult/emptyinput.md): The input was entirely consumed.
- [Unicode.ParseResult.error(length:)](parseresult/error%28length_%29.md): An encoding error was detected.
- [Unicode.ParseResult.valid(\_:)](parseresult/valid%28__%29.md): A `T` was parsed successfully

## Relationships

### Conforms To

- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Unicode Codecs

- [UnicodeCodec](../unicodecodec.md): A Unicode encoding form that translates between Unicode scalar values and form-specific code units.
- [Unicode.ASCII](ascii.md)
- [Unicode.UTF8](utf8.md)
- [Unicode.UTF16](utf16.md)
- [Unicode.UTF32](utf32.md)
- [UnicodeDecodingResult](../unicodedecodingresult.md): The result of one Unicode decoding step.
