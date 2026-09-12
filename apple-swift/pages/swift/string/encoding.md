> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/encoding](https://developer.apple.com/documentation/swift/string/encoding)

# String.Encoding

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
struct Encoding
```

## Topics

### Initializers

- [init(ianaName:)](encoding/init%28iananame_%29.md): Creates an instance from the name of the IANA registry “charset”.

### Instance Properties

- [ianaName](encoding/iananame.md): The name of this encoding that is compatible with the one of the IANA registry “charset”.

### Type Properties

- [ascii](encoding/ascii.md)
- [iso2022JP](encoding/iso2022jp.md)
- [isoLatin1](encoding/isolatin1.md)
- [isoLatin2](encoding/isolatin2.md)
- [japaneseEUC](encoding/japaneseeuc.md)
- [macOSRoman](encoding/macosroman.md)
- [nextstep](encoding/nextstep.md)
- [nonLossyASCII](encoding/nonlossyascii.md)
- [shiftJIS](encoding/shiftjis.md)
- [symbol](encoding/symbol.md)
- [unicode](encoding/unicode.md)
- [utf16](encoding/utf16.md)
- [utf16BigEndian](encoding/utf16bigendian.md)
- [utf16LittleEndian](encoding/utf16littleendian.md)
- [utf32](encoding/utf32.md)
- [utf32BigEndian](encoding/utf32bigendian.md)
- [utf32LittleEndian](encoding/utf32littleendian.md)
- [utf8](encoding/utf8.md)
- [windowsCP1250](encoding/windowscp1250.md)
- [windowsCP1251](encoding/windowscp1251.md)
- [windowsCP1252](encoding/windowscp1252.md)
- [windowsCP1253](encoding/windowscp1253.md)
- [windowsCP1254](encoding/windowscp1254.md)

## Relationships

### Conforms To

- [Copyable](../copyable.md)
- [CustomStringConvertible](../customstringconvertible.md)
- [Equatable](../equatable.md)
- [Escapable](../escapable.md)
- [Hashable](../hashable.md)
- [RawRepresentable](../rawrepresentable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Related String Types

- [Substring](../substring.md): A slice of a string.
- [StringProtocol](../stringprotocol.md): A type that can represent a string as a collection of characters.
- [String.Index](index.md): A position of a character or code unit in a string.
- [String.UnicodeScalarView](unicodescalarview.md): A view of a string’s contents as a collection of Unicode scalar values.
- [String.UTF16View](utf16view.md): A view of a string’s contents as a collection of UTF-16 code units.
- [String.UTF8View](utf8view.md): A view of a string’s contents as a collection of UTF-8 code units.
- [String.Iterator](iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
