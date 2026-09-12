> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/script](https://developer.apple.com/documentation/foundation/locale/script)

# Locale.Script

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The written script used with a given language.

## Declaration

```swift
struct Script
```

## Topics

### Creating a script

- [init(\_:)](script/init%28__%29.md): Creates a script from a BCP 47 identifier.
- [init(stringLiteral:)](script/init%28stringliteral_%29.md): Creates a script from a BCP 47 identifier as a string literal.

### Examining script properties

- [identifier](script/identifier.md)

### Using defined scripts

- [unknown](script/unknown.md): Represents an uncoded script

### Instance Properties

- [isISOScript](script/isisoscript.md): Returns if the script is an ISO 15924 script

### Type Properties

- [adlam](script/adlam.md)
- [arabic](script/arabic.md)
- [arabicNastaliq](script/arabicnastaliq.md)
- [armenian](script/armenian.md)
- [bangla](script/bangla.md)
- [cherokee](script/cherokee.md)
- [cyrillic](script/cyrillic.md)
- [devanagari](script/devanagari.md)
- [ethiopic](script/ethiopic.md)
- [georgian](script/georgian.md)
- [greek](script/greek.md)
- [gujarati](script/gujarati.md)
- [gurmukhi](script/gurmukhi.md)
- [hanSimplified](script/hansimplified.md)
- [hanTraditional](script/hantraditional.md)
- [hanifiRohingya](script/hanifirohingya.md)
- [hebrew](script/hebrew.md)
- [hiragana](script/hiragana.md)
- [japanese](script/japanese.md)
- [kannada](script/kannada.md)
- [katakana](script/katakana.md)
- [khmer](script/khmer.md)
- [korean](script/korean.md)
- [lao](script/lao.md)
- [latin](script/latin.md)
- [malayalam](script/malayalam.md)
- [meiteiMayek](script/meiteimayek.md)
- [myanmar](script/myanmar.md)
- [odia](script/odia.md)
- [olChiki](script/olchiki.md)
- [sinhala](script/sinhala.md)
- [syriac](script/syriac.md)
- [tamil](script/tamil.md)
- [telugu](script/telugu.md)
- [thaana](script/thaana.md)
- [thai](script/thai.md)
- [tibetan](script/tibetan.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Examining language properties

- [languageCode](language-swift.struct/languagecode.md): The language code that identifies the language.
- [Locale.LanguageCode](languagecode-swift.struct.md): An alphabetical code associated with a language.
- [region](language-swift.struct/region.md): The region used with the language.
- [Locale.Region](region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [script](language-swift.struct/script.md): The written script of the language.
- [characterDirection](language-swift.struct/characterdirection.md): The ordering of characters within a line.
- [Locale.LanguageDirection](languagedirection.md): An alias for the standard set of language directions.
