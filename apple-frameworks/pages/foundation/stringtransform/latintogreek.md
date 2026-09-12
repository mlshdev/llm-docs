> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringtransform/latintogreek](https://developer.apple.com/documentation/foundation/stringtransform/latintogreek)

# latinToGreek (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant containing the transliteration of a string from Latin script to Greek script.

## Declaration

```swift
static let latinToGreek: StringTransform
```

<a id="Discussion"></a>

## Discussion

This transformation is reversible.

For example, the string “Ellēnikó alphábēto‎” transliterates to “Ελληνικό αλφάβητο”.

This is equivalent to [kCFStringTransformLatinGreek](../../corefoundation/kcfstringtransformlatingreek.md).

## See Also

### Transliteration

- [toLatin](tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [latinToArabic](latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [latinToCyrillic](latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [latinToHangul](latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [latinToHebrew](latintohebrew.md): A constant containing the transliteration of a string from Latin script to Hebrew script.
- [latinToHiragana](latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [latinToKatakana](latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [latinToThai](latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [hiraganaToKatakana](hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [mandarinToLatin](mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.

# NSStringTransformLatinToGreek (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant containing the transliteration of a string from Latin script to Greek script.

## Declaration

```objectivec
extern NSStringTransform const NSStringTransformLatinToGreek;
```

<a id="Discussion"></a>

## Discussion

This transformation is reversible.

For example, the string “Ellēnikó alphábēto‎” transliterates to “Ελληνικό αλφάβητο”.

This is equivalent to [kCFStringTransformLatinGreek](../../corefoundation/kcfstringtransformlatingreek.md).

## See Also

### Transliteration

- [NSStringTransformToLatin](tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [NSStringTransformLatinToArabic](latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [NSStringTransformLatinToCyrillic](latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [NSStringTransformLatinToHangul](latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [NSStringTransformLatinToHebrew](latintohebrew.md): A constant containing the transliteration of a string from Latin script to Hebrew script.
- [NSStringTransformLatinToHiragana](latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [NSStringTransformLatinToKatakana](latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [NSStringTransformLatinToThai](latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [NSStringTransformHiraganaToKatakana](hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [NSStringTransformMandarinToLatin](mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.
