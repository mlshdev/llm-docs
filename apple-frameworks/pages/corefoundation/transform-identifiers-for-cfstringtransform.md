> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/transform-identifiers-for-cfstringtransform](https://developer.apple.com/documentation/corefoundation/transform-identifiers-for-cfstringtransform)

# Transform Identifiers for CFStringTransform (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Constants that identify transforms used with [CFStringTransform(\_:\_:\_:\_:)](cfstringtransform%28________%29.md).

<a id="overview"></a>

## Overview

In macOS 10.4 and later, with [CFStringTransform(\_:\_:\_:\_:)](cfstringtransform%28________%29.md) you can also use any valid ICU transform ID defined in the [ICU User Guide for Transforms](https://unicode-org.github.io/icu/userguide/transforms/general/).

## Topics

### Constants

- [kCFStringTransformStripCombiningMarks](kcfstringtransformstripcombiningmarks.md): The identifier of a transform to strip combining marks (accents or diacritics).
- [kCFStringTransformToLatin](kcfstringtransformtolatin.md): The identifier of a transform to transliterate all text possible to Latin script. Ideographs are transliterated as Mandarin Chinese.
- [kCFStringTransformFullwidthHalfwidth](kcfstringtransformfullwidthhalfwidth.md): The identifier of a reversible transform to convert full-width characters to their half-width equivalents.
- [kCFStringTransformLatinKatakana](kcfstringtransformlatinkatakana.md): The identifier of a reversible transform to transliterate text to Katakana from Latin.
- [kCFStringTransformLatinHiragana](kcfstringtransformlatinhiragana.md): The identifier of a reversible transform to transliterate text to Hiragana from Latin.
- [kCFStringTransformHiraganaKatakana](kcfstringtransformhiraganakatakana.md): The identifier of a reversible transform to transliterate text to Katakana from Hiragana.
- [kCFStringTransformMandarinLatin](kcfstringtransformmandarinlatin.md): The identifier of a transform to transliterate text to Latin from ideographs interpreted as Mandarin Chinese. This transform is not reversible.
- [kCFStringTransformLatinHangul](kcfstringtransformlatinhangul.md): The identifier of a reversible transform to transliterate text to Hangul from Latin.
- [kCFStringTransformLatinArabic](kcfstringtransformlatinarabic.md): The identifier of a reversible transform to transliterate text to Arabic from Latin.
- [kCFStringTransformLatinHebrew](kcfstringtransformlatinhebrew.md): The identifier of a reversible transform to transliterate text to Hebrew from Latin.
- [kCFStringTransformLatinThai](kcfstringtransformlatinthai.md): The identifier of a reversible transform to transliterate text to Thai from Latin.
- [kCFStringTransformLatinCyrillic](kcfstringtransformlatincyrillic.md): The identifier of a reversible transform to transliterate text to Cyrillic from Latin.
- [kCFStringTransformLatinGreek](kcfstringtransformlatingreek.md): The identifier of a reversible transform to transliterate text to Greek from Latin.
- [kCFStringTransformToXMLHex](kcfstringtransformtoxmlhex.md): The identifier of a reversible transform to transliterate characters other than printable ASCII to XML/HTML numeric entities.
- [kCFStringTransformToUnicodeName](kcfstringtransformtounicodename.md): The identifier of a reversible transform to transliterate characters other than printable ASCII to their Unicode character name in braces.
- [kCFStringTransformStripDiacritics](kcfstringtransformstripdiacritics.md): The identifier of a transform to remove diacritic markings.

## See Also

### Constants

- [CFStringNormalizationForm](cfstringnormalizationform.md): Unicode normalization forms as described in Unicode Technical Report #15.

# Transform Identifiers for CFStringTransform (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Constants that identify transforms used with [CFStringTransform](cfstringtransform%28________%29.md).

<a id="overview"></a>

## Overview

In macOS 10.4 and later, with [CFStringTransform](cfstringtransform%28________%29.md) you can also use any valid ICU transform ID defined in the [ICU User Guide for Transforms](https://unicode-org.github.io/icu/userguide/transforms/general/).

## Topics

### Constants

- [kCFStringTransformStripCombiningMarks](kcfstringtransformstripcombiningmarks.md): The identifier of a transform to strip combining marks (accents or diacritics).
- [kCFStringTransformToLatin](kcfstringtransformtolatin.md): The identifier of a transform to transliterate all text possible to Latin script. Ideographs are transliterated as Mandarin Chinese.
- [kCFStringTransformFullwidthHalfwidth](kcfstringtransformfullwidthhalfwidth.md): The identifier of a reversible transform to convert full-width characters to their half-width equivalents.
- [kCFStringTransformLatinKatakana](kcfstringtransformlatinkatakana.md): The identifier of a reversible transform to transliterate text to Katakana from Latin.
- [kCFStringTransformLatinHiragana](kcfstringtransformlatinhiragana.md): The identifier of a reversible transform to transliterate text to Hiragana from Latin.
- [kCFStringTransformHiraganaKatakana](kcfstringtransformhiraganakatakana.md): The identifier of a reversible transform to transliterate text to Katakana from Hiragana.
- [kCFStringTransformMandarinLatin](kcfstringtransformmandarinlatin.md): The identifier of a transform to transliterate text to Latin from ideographs interpreted as Mandarin Chinese. This transform is not reversible.
- [kCFStringTransformLatinHangul](kcfstringtransformlatinhangul.md): The identifier of a reversible transform to transliterate text to Hangul from Latin.
- [kCFStringTransformLatinArabic](kcfstringtransformlatinarabic.md): The identifier of a reversible transform to transliterate text to Arabic from Latin.
- [kCFStringTransformLatinHebrew](kcfstringtransformlatinhebrew.md): The identifier of a reversible transform to transliterate text to Hebrew from Latin.
- [kCFStringTransformLatinThai](kcfstringtransformlatinthai.md): The identifier of a reversible transform to transliterate text to Thai from Latin.
- [kCFStringTransformLatinCyrillic](kcfstringtransformlatincyrillic.md): The identifier of a reversible transform to transliterate text to Cyrillic from Latin.
- [kCFStringTransformLatinGreek](kcfstringtransformlatingreek.md): The identifier of a reversible transform to transliterate text to Greek from Latin.
- [kCFStringTransformToXMLHex](kcfstringtransformtoxmlhex.md): The identifier of a reversible transform to transliterate characters other than printable ASCII to XML/HTML numeric entities.
- [kCFStringTransformToUnicodeName](kcfstringtransformtounicodename.md): The identifier of a reversible transform to transliterate characters other than printable ASCII to their Unicode character name in braces.
- [kCFStringTransformStripDiacritics](kcfstringtransformstripdiacritics.md): The identifier of a transform to remove diacritic markings.

## See Also

### Constants

- [CFStringNormalizationForm](cfstringnormalizationform.md): Unicode normalization forms as described in Unicode Technical Report #15.
