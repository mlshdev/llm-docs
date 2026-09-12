> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringtransform/tounicodename](https://developer.apple.com/documentation/foundation/stringtransform/tounicodename)

# toUnicodeName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An identifier for a transform that converts characters to Unicode names.

## Declaration

```swift
static let toUnicodeName: StringTransform
```

<a id="Discussion"></a>

## Discussion

For example, the string “🐶🐮” transforms to ```"``\N{DOG FACE}\N{COW FACE}"``` .

Passing this constant to the [applyTransform(\_:reverse:range:updatedRange:)](../nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md) method is equivalent to passing [kCFStringTransformToUnicodeName](../../corefoundation/kcfstringtransformtounicodename.md) to [CFStringTransform(\_:\_:\_:\_:)](../../corefoundation/cfstringtransform%28________%29.md).

> **Note**

>  The result of a forward transformation delimits each Unicode name with enclosing curly braces and the leading character sequence `"\N"`. In some programming languages, `"\N{...}"` is used as an escape sequence for Unicode characters in strings and regular expressions; this isn’t supported in Swift or Objective-C. To perform the reverse transform of a string literal in Swift or Objective-C, escape the leading backslash (`"\\N{...}"`) for each Unicode name.

## See Also

### Constants

- [latinToKatakana](latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [latinToHiragana](latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [latinToHangul](latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [latinToArabic](latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [latinToHebrew](latintohebrew.md): A constant containing the transliteration of a string from Latin script to Hebrew script.
- [latinToThai](latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [latinToCyrillic](latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [toLatin](tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [mandarinToLatin](mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.
- [hiraganaToKatakana](hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [fullwidthToHalfwidth](fullwidthtohalfwidth.md): A constant containing the transformation of a string from full-width CJK characters to half-width forms.
- [toXMLHex](toxmlhex.md): A constant containing the transformation of a string from characters to XML hexadecimal escape codes.
- [stripCombiningMarks](stripcombiningmarks.md): A constant containing the transformation of a string by removing combining marks.
- [stripDiacritics](stripdiacritics.md): A constant containing the transformation of a string by removing diacritics.

# NSStringTransformToUnicodeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An identifier for a transform that converts characters to Unicode names.

## Declaration

```objectivec
extern NSStringTransform const NSStringTransformToUnicodeName;
```

<a id="Discussion"></a>

## Discussion

For example, the string “🐶🐮” transforms to ```"``\N{DOG FACE}\N{COW FACE}"``` .

Passing this constant to the [applyTransform:reverse:range:updatedRange:](../nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md) method is equivalent to passing [kCFStringTransformToUnicodeName](../../corefoundation/kcfstringtransformtounicodename.md) to [CFStringTransform](../../corefoundation/cfstringtransform%28________%29.md).

> **Note**

>  The result of a forward transformation delimits each Unicode name with enclosing curly braces and the leading character sequence `"\N"`. In some programming languages, `"\N{...}"` is used as an escape sequence for Unicode characters in strings and regular expressions; this isn’t supported in Swift or Objective-C. To perform the reverse transform of a string literal in Swift or Objective-C, escape the leading backslash (`"\\N{...}"`) for each Unicode name.

## See Also

### Constants

- [NSStringTransformLatinToKatakana](latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [NSStringTransformLatinToHiragana](latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [NSStringTransformLatinToHangul](latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [NSStringTransformLatinToArabic](latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [NSStringTransformLatinToHebrew](latintohebrew.md): A constant containing the transliteration of a string from Latin script to Hebrew script.
- [NSStringTransformLatinToThai](latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [NSStringTransformLatinToCyrillic](latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [NSStringTransformToLatin](tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [NSStringTransformMandarinToLatin](mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.
- [NSStringTransformHiraganaToKatakana](hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [NSStringTransformFullwidthToHalfwidth](fullwidthtohalfwidth.md): A constant containing the transformation of a string from full-width CJK characters to half-width forms.
- [NSStringTransformToXMLHex](toxmlhex.md): A constant containing the transformation of a string from characters to XML hexadecimal escape codes.
- [NSStringTransformStripCombiningMarks](stripcombiningmarks.md): A constant containing the transformation of a string by removing combining marks.
- [NSStringTransformStripDiacritics](stripdiacritics.md): A constant containing the transformation of a string by removing diacritics.
