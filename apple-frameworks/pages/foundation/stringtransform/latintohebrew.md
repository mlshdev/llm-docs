> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringtransform/latintohebrew](https://developer.apple.com/documentation/foundation/stringtransform/latintohebrew)

# latinToHebrew (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant containing the transliteration of a string from Latin script to Hebrew script.

## Declaration

```swift
static let latinToHebrew: StringTransform
```

<a id="Discussion"></a>

## Discussion

This transformation is reversible.

For example, the string “ʻbryţ” transliterates to “עברית”.

This is equivalent to [kCFStringTransformLatinHebrew](../../corefoundation/kcfstringtransformlatinhebrew.md).

## See Also

### Constants

- [latinToKatakana](latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [latinToHiragana](latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [latinToHangul](latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [latinToArabic](latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [latinToThai](latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [latinToCyrillic](latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [toLatin](tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [mandarinToLatin](mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.
- [hiraganaToKatakana](hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [fullwidthToHalfwidth](fullwidthtohalfwidth.md): A constant containing the transformation of a string from full-width CJK characters to half-width forms.
- [toXMLHex](toxmlhex.md): A constant containing the transformation of a string from characters to XML hexadecimal escape codes.
- [toUnicodeName](tounicodename.md): An identifier for a transform that converts characters to Unicode names.
- [stripCombiningMarks](stripcombiningmarks.md): A constant containing the transformation of a string by removing combining marks.
- [stripDiacritics](stripdiacritics.md): A constant containing the transformation of a string by removing diacritics.

# NSStringTransformLatinToHebrew (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant containing the transliteration of a string from Latin script to Hebrew script.

## Declaration

```objectivec
extern NSStringTransform const NSStringTransformLatinToHebrew;
```

<a id="Discussion"></a>

## Discussion

This transformation is reversible.

For example, the string “ʻbryţ” transliterates to “עברית”.

This is equivalent to [kCFStringTransformLatinHebrew](../../corefoundation/kcfstringtransformlatinhebrew.md).

## See Also

### Constants

- [NSStringTransformLatinToKatakana](latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [NSStringTransformLatinToHiragana](latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [NSStringTransformLatinToHangul](latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [NSStringTransformLatinToArabic](latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [NSStringTransformLatinToThai](latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [NSStringTransformLatinToCyrillic](latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [NSStringTransformToLatin](tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [NSStringTransformMandarinToLatin](mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.
- [NSStringTransformHiraganaToKatakana](hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [NSStringTransformFullwidthToHalfwidth](fullwidthtohalfwidth.md): A constant containing the transformation of a string from full-width CJK characters to half-width forms.
- [NSStringTransformToXMLHex](toxmlhex.md): A constant containing the transformation of a string from characters to XML hexadecimal escape codes.
- [NSStringTransformToUnicodeName](tounicodename.md): An identifier for a transform that converts characters to Unicode names.
- [NSStringTransformStripCombiningMarks](stripcombiningmarks.md): A constant containing the transformation of a string by removing combining marks.
- [NSStringTransformStripDiacritics](stripdiacritics.md): A constant containing the transformation of a string by removing diacritics.
