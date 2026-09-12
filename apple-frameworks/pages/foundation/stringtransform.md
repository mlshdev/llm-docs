> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringtransform](https://developer.apple.com/documentation/foundation/stringtransform)

# StringTransform (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants representing an ICU string transform.

## Declaration

```swift
struct StringTransform
```

<a id="Discussion"></a>

## Discussion

These constants are used by the [NSString](nsstring.md) method [applyingTransform(\_:reverse:)](nsstring/applyingtransform%28__reverse_%29.md).

## Topics

### Transliteration

- [toLatin](stringtransform/tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [latinToArabic](stringtransform/latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [latinToCyrillic](stringtransform/latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [latinToGreek](stringtransform/latintogreek.md): A constant containing the transliteration of a string from Latin script to Greek script.
- [latinToHangul](stringtransform/latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [latinToHebrew](stringtransform/latintohebrew.md): A constant containing the transliteration of a string from Latin script to Hebrew script.
- [latinToHiragana](stringtransform/latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [latinToKatakana](stringtransform/latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [latinToThai](stringtransform/latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [hiraganaToKatakana](stringtransform/hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [mandarinToLatin](stringtransform/mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.

### Diacritic and Combining Mark Removal

- [stripDiacritics](stringtransform/stripdiacritics.md): A constant containing the transformation of a string by removing diacritics.
- [stripCombiningMarks](stringtransform/stripcombiningmarks.md): A constant containing the transformation of a string by removing combining marks.

### Halfwidth and Fullwidth Form Conversion

- [fullwidthToHalfwidth](stringtransform/fullwidthtohalfwidth.md): A constant containing the transformation of a string from full-width CJK characters to half-width forms.

### Character Representation

- [toUnicodeName](stringtransform/tounicodename.md): An identifier for a transform that converts characters to Unicode names.
- [toXMLHex](stringtransform/toxmlhex.md): A constant containing the transformation of a string from characters to XML hexadecimal escape codes.

### Initializers

- [init(\_:)](stringtransform/init%28__%29.md)
- [init(rawValue:)](stringtransform/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transforming Strings

- [applyingTransform(\_:reverse:)](nsstring/applyingtransform%28__reverse_%29.md): Returns a new string by applying a specified transform to the string.

# NSStringTransform (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants representing an ICU string transform.

## Declaration

```objectivec
typedef NSString * NSStringTransform;
```

<a id="Discussion"></a>

## Discussion

These constants are used by the [NSString](nsstring.md) method [stringByApplyingTransform:reverse:](nsstring/applyingtransform%28__reverse_%29.md).

## Topics

### Transliteration

- [NSStringTransformToLatin](stringtransform/tolatin.md): A constant containing the transliteration of a string from any script to Latin script.
- [NSStringTransformLatinToArabic](stringtransform/latintoarabic.md): A constant containing the transliteration of a string from Latin script to Arabic script.
- [NSStringTransformLatinToCyrillic](stringtransform/latintocyrillic.md): A constant containing the transliteration of a string from Latin script to Cyrillic script.
- [NSStringTransformLatinToGreek](stringtransform/latintogreek.md): A constant containing the transliteration of a string from Latin script to Greek script.
- [NSStringTransformLatinToHangul](stringtransform/latintohangul.md): A constant containing the transliteration of a string from Latin script to Hangul script.
- [NSStringTransformLatinToHebrew](stringtransform/latintohebrew.md): A constant containing the transliteration of a string from Latin script to Hebrew script.
- [NSStringTransformLatinToHiragana](stringtransform/latintohiragana.md): A constant containing the transliteration of a string from Latin script to Hiragana script.
- [NSStringTransformLatinToKatakana](stringtransform/latintokatakana.md): A constant containing the transliteration of a string from Latin script to Katakana script.
- [NSStringTransformLatinToThai](stringtransform/latintothai.md): A constant containing the transliteration of a string from Latin script to Thai script.
- [NSStringTransformHiraganaToKatakana](stringtransform/hiraganatokatakana.md): A constant containing the transliteration of a string from Hiragana script to Katakana script.
- [NSStringTransformMandarinToLatin](stringtransform/mandarintolatin.md): A constant containing the transliteration of a string from Han script to Latin.

### Diacritic and Combining Mark Removal

- [NSStringTransformStripDiacritics](stringtransform/stripdiacritics.md): A constant containing the transformation of a string by removing diacritics.
- [NSStringTransformStripCombiningMarks](stringtransform/stripcombiningmarks.md): A constant containing the transformation of a string by removing combining marks.

### Halfwidth and Fullwidth Form Conversion

- [NSStringTransformFullwidthToHalfwidth](stringtransform/fullwidthtohalfwidth.md): A constant containing the transformation of a string from full-width CJK characters to half-width forms.

### Character Representation

- [NSStringTransformToUnicodeName](stringtransform/tounicodename.md): An identifier for a transform that converts characters to Unicode names.
- [NSStringTransformToXMLHex](stringtransform/toxmlhex.md): A constant containing the transformation of a string from characters to XML hexadecimal escape codes.

## See Also

### Transforming Strings

- [stringByApplyingTransform:reverse:](nsstring/applyingtransform%28__reverse_%29.md): Returns a new string by applying a specified transform to the string.
