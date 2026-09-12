> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguage](https://developer.apple.com/documentation/naturallanguage/nllanguage)

# NLLanguage (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The languages that the Natural Language framework supports.

## Declaration

```swift
struct NLLanguage
```

## Mentioned In

- [Identifying the language in text](identifying-the-language-in-text.md)

## Topics

### Getting standard languages

- [amharic](nllanguage/amharic.md): The unique identifier string for the Amharic language.
- [arabic](nllanguage/arabic.md): The unique identifier string for the Arabic language.
- [armenian](nllanguage/armenian.md): The unique identifier string for the Armenian language.
- [bengali](nllanguage/bengali.md): The unique identifier string for the Bengali language.
- [bulgarian](nllanguage/bulgarian.md): The unique identifier string for the Bulgarian language.
- [burmese](nllanguage/burmese.md): The unique identifier string for the Burmese language.
- [catalan](nllanguage/catalan.md): The unique identifier string for the Catalan language.
- [cherokee](nllanguage/cherokee.md): The unique identifier string for the Cherokee language.
- [croatian](nllanguage/croatian.md): The unique identifier string for the Croatian language.
- [czech](nllanguage/czech.md): The unique identifier string for the Czech language.
- [danish](nllanguage/danish.md): The unique identifier string for the Danish language.
- [dutch](nllanguage/dutch.md): The unique identifier string for the Dutch language.
- [english](nllanguage/english.md): The unique identifier string for the English language.
- [finnish](nllanguage/finnish.md): The unique identifier string for the Finnish language.
- [french](nllanguage/french.md): The unique identifier string for the French language.
- [georgian](nllanguage/georgian.md): The unique identifier string for the Georgian language.
- [german](nllanguage/german.md): The unique identifier string for the German language.
- [greek](nllanguage/greek.md): The unique identifier string for the Greek language.
- [gujarati](nllanguage/gujarati.md): The unique identifier string for the Gujarati language.
- [hebrew](nllanguage/hebrew.md): The unique identifier string for the Hebrew language.
- [hindi](nllanguage/hindi.md): The unique identifier string for the Hindi language.
- [hungarian](nllanguage/hungarian.md): The unique identifier string for the Hungarian language.
- [icelandic](nllanguage/icelandic.md): The unique identifier string for the Icelandic language.
- [indonesian](nllanguage/indonesian.md): The unique identifier string for the Indonesian language.
- [italian](nllanguage/italian.md): The unique identifier string for the Italian language.
- [japanese](nllanguage/japanese.md): The unique identifier string for the Japanese language.
- [kannada](nllanguage/kannada.md): The unique identifier string for the Kannada language.
- [kazakh](nllanguage/kazakh.md): The unique identifier string for the Kazakh language.
- [khmer](nllanguage/khmer.md): The unique identifier string for the Khmer language.
- [korean](nllanguage/korean.md): The unique identifier string for the Korean language.
- [lao](nllanguage/lao.md): The unique identifier string for the Lao language.
- [malay](nllanguage/malay.md): The unique identifier string for the Malay language.
- [malayalam](nllanguage/malayalam.md): The unique identifier string for the Malayalam language.
- [marathi](nllanguage/marathi.md): The unique identifier string for the Marathi language.
- [mongolian](nllanguage/mongolian.md): The unique identifier string for the Mongolian language.
- [norwegian](nllanguage/norwegian.md): The unique identifier string for the Norwegian language.
- [oriya](nllanguage/oriya.md): The unique identifier string for the Oriya language.
- [persian](nllanguage/persian.md): The unique identifier string for the Persian language.
- [polish](nllanguage/polish.md): The unique identifier string for the Polish language.
- [portuguese](nllanguage/portuguese.md): The unique identifier string for the Portuguese language.
- [punjabi](nllanguage/punjabi.md): The unique identifier string for the Punjabi language.
- [romanian](nllanguage/romanian.md): The unique identifier string for the Romanian language.
- [russian](nllanguage/russian.md): The unique identifier string for the Russian language.
- [simplifiedChinese](nllanguage/simplifiedchinese.md): The unique identifier string for the Simplified Chinese language.
- [sinhalese](nllanguage/sinhalese.md): The unique identifier string for the Sinhalese language.
- [slovak](nllanguage/slovak.md): The unique identifier string for the Slovak language.
- [spanish](nllanguage/spanish.md): The unique identifier string for the Spanish language.
- [swedish](nllanguage/swedish.md): The unique identifier string for the Swedish language.
- [tamil](nllanguage/tamil.md): The unique identifier string for the Tamil language.
- [telugu](nllanguage/telugu.md): The unique identifier string for the Telugu language.
- [thai](nllanguage/thai.md): The unique identifier string for the Thai language.
- [tibetan](nllanguage/tibetan.md): The unique identifier string for the Tibetan language.
- [traditionalChinese](nllanguage/traditionalchinese.md): The unique identifier string for the Traditional Chinese language.
- [turkish](nllanguage/turkish.md): The unique identifier string for the Turkish language.
- [ukrainian](nllanguage/ukrainian.md): The unique identifier string for the Ukrainian language.
- [urdu](nllanguage/urdu.md): The unique identifier string for the Urdu language.
- [vietnamese](nllanguage/vietnamese.md): The unique identifier string for the Vietnamese language.
- [undetermined](nllanguage/undetermined.md): The unique identifier string for a language the Natural Language framework doesn’t recognize.

### Creating custom language tags

- [init(\_:)](nllanguage/init%28__%29.md): Creates a language tag with the given string.
- [init(rawValue:)](nllanguage/init%28rawvalue_%29.md): Creates a language tag with the given string as its raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Language identification

- [Identifying the language in text](identifying-the-language-in-text.md): Detect the language in a piece of text by using a language recognizer.
- [NLLanguageRecognizer](nllanguagerecognizer.md): The language of a body of text.

# NLLanguage (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The languages that the Natural Language framework supports.

## Declaration

```objectivec
typedef NSString * NLLanguage;
```

## Mentioned In

- [Identifying the language in text](identifying-the-language-in-text.md)

## Topics

### Getting standard languages

- [NLLanguageAmharic](nllanguage/amharic.md): The unique identifier string for the Amharic language.
- [NLLanguageArabic](nllanguage/arabic.md): The unique identifier string for the Arabic language.
- [NLLanguageArmenian](nllanguage/armenian.md): The unique identifier string for the Armenian language.
- [NLLanguageBengali](nllanguage/bengali.md): The unique identifier string for the Bengali language.
- [NLLanguageBulgarian](nllanguage/bulgarian.md): The unique identifier string for the Bulgarian language.
- [NLLanguageBurmese](nllanguage/burmese.md): The unique identifier string for the Burmese language.
- [NLLanguageCatalan](nllanguage/catalan.md): The unique identifier string for the Catalan language.
- [NLLanguageCherokee](nllanguage/cherokee.md): The unique identifier string for the Cherokee language.
- [NLLanguageCroatian](nllanguage/croatian.md): The unique identifier string for the Croatian language.
- [NLLanguageCzech](nllanguage/czech.md): The unique identifier string for the Czech language.
- [NLLanguageDanish](nllanguage/danish.md): The unique identifier string for the Danish language.
- [NLLanguageDutch](nllanguage/dutch.md): The unique identifier string for the Dutch language.
- [NLLanguageEnglish](nllanguage/english.md): The unique identifier string for the English language.
- [NLLanguageFinnish](nllanguage/finnish.md): The unique identifier string for the Finnish language.
- [NLLanguageFrench](nllanguage/french.md): The unique identifier string for the French language.
- [NLLanguageGeorgian](nllanguage/georgian.md): The unique identifier string for the Georgian language.
- [NLLanguageGerman](nllanguage/german.md): The unique identifier string for the German language.
- [NLLanguageGreek](nllanguage/greek.md): The unique identifier string for the Greek language.
- [NLLanguageGujarati](nllanguage/gujarati.md): The unique identifier string for the Gujarati language.
- [NLLanguageHebrew](nllanguage/hebrew.md): The unique identifier string for the Hebrew language.
- [NLLanguageHindi](nllanguage/hindi.md): The unique identifier string for the Hindi language.
- [NLLanguageHungarian](nllanguage/hungarian.md): The unique identifier string for the Hungarian language.
- [NLLanguageIcelandic](nllanguage/icelandic.md): The unique identifier string for the Icelandic language.
- [NLLanguageIndonesian](nllanguage/indonesian.md): The unique identifier string for the Indonesian language.
- [NLLanguageItalian](nllanguage/italian.md): The unique identifier string for the Italian language.
- [NLLanguageJapanese](nllanguage/japanese.md): The unique identifier string for the Japanese language.
- [NLLanguageKannada](nllanguage/kannada.md): The unique identifier string for the Kannada language.
- [NLLanguageKazakh](nllanguage/kazakh.md): The unique identifier string for the Kazakh language.
- [NLLanguageKhmer](nllanguage/khmer.md): The unique identifier string for the Khmer language.
- [NLLanguageKorean](nllanguage/korean.md): The unique identifier string for the Korean language.
- [NLLanguageLao](nllanguage/lao.md): The unique identifier string for the Lao language.
- [NLLanguageMalay](nllanguage/malay.md): The unique identifier string for the Malay language.
- [NLLanguageMalayalam](nllanguage/malayalam.md): The unique identifier string for the Malayalam language.
- [NLLanguageMarathi](nllanguage/marathi.md): The unique identifier string for the Marathi language.
- [NLLanguageMongolian](nllanguage/mongolian.md): The unique identifier string for the Mongolian language.
- [NLLanguageNorwegian](nllanguage/norwegian.md): The unique identifier string for the Norwegian language.
- [NLLanguageOriya](nllanguage/oriya.md): The unique identifier string for the Oriya language.
- [NLLanguagePersian](nllanguage/persian.md): The unique identifier string for the Persian language.
- [NLLanguagePolish](nllanguage/polish.md): The unique identifier string for the Polish language.
- [NLLanguagePortuguese](nllanguage/portuguese.md): The unique identifier string for the Portuguese language.
- [NLLanguagePunjabi](nllanguage/punjabi.md): The unique identifier string for the Punjabi language.
- [NLLanguageRomanian](nllanguage/romanian.md): The unique identifier string for the Romanian language.
- [NLLanguageRussian](nllanguage/russian.md): The unique identifier string for the Russian language.
- [NLLanguageSimplifiedChinese](nllanguage/simplifiedchinese.md): The unique identifier string for the Simplified Chinese language.
- [NLLanguageSinhalese](nllanguage/sinhalese.md): The unique identifier string for the Sinhalese language.
- [NLLanguageSlovak](nllanguage/slovak.md): The unique identifier string for the Slovak language.
- [NLLanguageSpanish](nllanguage/spanish.md): The unique identifier string for the Spanish language.
- [NLLanguageSwedish](nllanguage/swedish.md): The unique identifier string for the Swedish language.
- [NLLanguageTamil](nllanguage/tamil.md): The unique identifier string for the Tamil language.
- [NLLanguageTelugu](nllanguage/telugu.md): The unique identifier string for the Telugu language.
- [NLLanguageThai](nllanguage/thai.md): The unique identifier string for the Thai language.
- [NLLanguageTibetan](nllanguage/tibetan.md): The unique identifier string for the Tibetan language.
- [NLLanguageTraditionalChinese](nllanguage/traditionalchinese.md): The unique identifier string for the Traditional Chinese language.
- [NLLanguageTurkish](nllanguage/turkish.md): The unique identifier string for the Turkish language.
- [NLLanguageUkrainian](nllanguage/ukrainian.md): The unique identifier string for the Ukrainian language.
- [NLLanguageUrdu](nllanguage/urdu.md): The unique identifier string for the Urdu language.
- [NLLanguageVietnamese](nllanguage/vietnamese.md): The unique identifier string for the Vietnamese language.
- [NLLanguageUndetermined](nllanguage/undetermined.md): The unique identifier string for a language the Natural Language framework doesn’t recognize.

## See Also

### Language identification

- [Identifying the language in text](identifying-the-language-in-text.md): Detect the language in a piece of text by using a language recognizer.
- [NLLanguageRecognizer](nllanguagerecognizer.md): The language of a body of text.
