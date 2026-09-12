> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlscript](https://developer.apple.com/documentation/naturallanguage/nlscript)

# NLScript (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The writing scripts that the Natural Language framework supports.

## Declaration

```swift
struct NLScript
```

## Topics

### Getting standard scripts

- [arabic](nlscript/arabic.md): The unique identifier string for the Arabic script.
- [armenian](nlscript/armenian.md): The unique identifier string for the Armenian script.
- [bengali](nlscript/bengali.md): The unique identifier string for the Bengali script.
- [canadianAboriginalSyllabics](nlscript/canadianaboriginalsyllabics.md): The unique identifier string for the Canadian Aboriginal Syllabics.
- [cherokee](nlscript/cherokee.md): The unique identifier string for the Cherokee script.
- [cyrillic](nlscript/cyrillic.md): The unique identifier string for the Cyrillic script.
- [devanagari](nlscript/devanagari.md): The unique identifier string for the Devanagari script.
- [ethiopic](nlscript/ethiopic.md): The unique identifier string for the Ethiopic script.
- [georgian](nlscript/georgian.md): The unique identifier string for the Georgian script.
- [greek](nlscript/greek.md): The unique identifier string for the Greek script.
- [gujarati](nlscript/gujarati.md): The unique identifier string for the Gujarati script.
- [gurmukhi](nlscript/gurmukhi.md): The unique identifier string for the Gurmukhi script.
- [hebrew](nlscript/hebrew.md): The unique identifier string for the Hebrew script.
- [japanese](nlscript/japanese.md): The unique identifier string for the Japanese script.
- [kannada](nlscript/kannada.md): The unique identifier string for the Kannada script.
- [khmer](nlscript/khmer.md): The unique identifier string for the Khmer script.
- [korean](nlscript/korean.md): The unique identifier string for the Korean script.
- [lao](nlscript/lao.md): The unique identifier string for the Lao script.
- [latin](nlscript/latin.md): The unique identifier string for the Latin script.
- [malayalam](nlscript/malayalam.md): The unique identifier string for the Malayalam script.
- [mongolian](nlscript/mongolian.md): The unique identifier string for the Mongolian script.
- [myanmar](nlscript/myanmar.md): The unique identifier string for the Myanmar script.
- [oriya](nlscript/oriya.md): The unique identifier string for the Oriya script.
- [simplifiedChinese](nlscript/simplifiedchinese.md): The unique identifier string for the simplified Chinese script.
- [sinhala](nlscript/sinhala.md): The unique identifier string for the Sinhala script.
- [tamil](nlscript/tamil.md): The unique identifier string for the Tamil script.
- [telugu](nlscript/telugu.md): The unique identifier string for the Telugu script.
- [thai](nlscript/thai.md): The unique identifier string for the Thai script.
- [tibetan](nlscript/tibetan.md): The unique identifier string for the Tibetan script.
- [traditionalChinese](nlscript/traditionalchinese.md): The unique identifier string for the traditional Chinese script.
- [undetermined](nlscript/undetermined.md): The unique identifier string for a script the Natural Language framework doesn’t recognize.

### Creating custom script tags

- [init(\_:)](nlscript/init%28__%29.md): Creates a language script with the given string.
- [init(rawValue:)](nlscript/init%28rawvalue_%29.md): Creates a language script with the given string as its raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Contextual embedding

- [NLContextualEmbedding](nlcontextualembedding.md): A model that computes sequences of embedding vectors for natural language utterances.
- [NLContextualEmbeddingKey](nlcontextualembeddingkey.md): This class defines properties that you can filter or search for contextual embeddings.

# NLScript (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The writing scripts that the Natural Language framework supports.

## Declaration

```objectivec
typedef NSString * NLScript;
```

## Topics

### Getting standard scripts

- [NLScriptArabic](nlscript/arabic.md): The unique identifier string for the Arabic script.
- [NLScriptArmenian](nlscript/armenian.md): The unique identifier string for the Armenian script.
- [NLScriptBengali](nlscript/bengali.md): The unique identifier string for the Bengali script.
- [NLScriptCanadianAboriginalSyllabics](nlscript/canadianaboriginalsyllabics.md): The unique identifier string for the Canadian Aboriginal Syllabics.
- [NLScriptCherokee](nlscript/cherokee.md): The unique identifier string for the Cherokee script.
- [NLScriptCyrillic](nlscript/cyrillic.md): The unique identifier string for the Cyrillic script.
- [NLScriptDevanagari](nlscript/devanagari.md): The unique identifier string for the Devanagari script.
- [NLScriptEthiopic](nlscript/ethiopic.md): The unique identifier string for the Ethiopic script.
- [NLScriptGeorgian](nlscript/georgian.md): The unique identifier string for the Georgian script.
- [NLScriptGreek](nlscript/greek.md): The unique identifier string for the Greek script.
- [NLScriptGujarati](nlscript/gujarati.md): The unique identifier string for the Gujarati script.
- [NLScriptGurmukhi](nlscript/gurmukhi.md): The unique identifier string for the Gurmukhi script.
- [NLScriptHebrew](nlscript/hebrew.md): The unique identifier string for the Hebrew script.
- [NLScriptJapanese](nlscript/japanese.md): The unique identifier string for the Japanese script.
- [NLScriptKannada](nlscript/kannada.md): The unique identifier string for the Kannada script.
- [NLScriptKhmer](nlscript/khmer.md): The unique identifier string for the Khmer script.
- [NLScriptKorean](nlscript/korean.md): The unique identifier string for the Korean script.
- [NLScriptLao](nlscript/lao.md): The unique identifier string for the Lao script.
- [NLScriptLatin](nlscript/latin.md): The unique identifier string for the Latin script.
- [NLScriptMalayalam](nlscript/malayalam.md): The unique identifier string for the Malayalam script.
- [NLScriptMongolian](nlscript/mongolian.md): The unique identifier string for the Mongolian script.
- [NLScriptMyanmar](nlscript/myanmar.md): The unique identifier string for the Myanmar script.
- [NLScriptOriya](nlscript/oriya.md): The unique identifier string for the Oriya script.
- [NLScriptSimplifiedChinese](nlscript/simplifiedchinese.md): The unique identifier string for the simplified Chinese script.
- [NLScriptSinhala](nlscript/sinhala.md): The unique identifier string for the Sinhala script.
- [NLScriptTamil](nlscript/tamil.md): The unique identifier string for the Tamil script.
- [NLScriptTelugu](nlscript/telugu.md): The unique identifier string for the Telugu script.
- [NLScriptThai](nlscript/thai.md): The unique identifier string for the Thai script.
- [NLScriptTibetan](nlscript/tibetan.md): The unique identifier string for the Tibetan script.
- [NLScriptTraditionalChinese](nlscript/traditionalchinese.md): The unique identifier string for the traditional Chinese script.
- [NLScriptUndetermined](nlscript/undetermined.md): The unique identifier string for a script the Natural Language framework doesn’t recognize.

## See Also

### Contextual embedding

- [NLContextualEmbedding](nlcontextualembedding.md): A model that computes sequences of embedding vectors for natural language utterances.
- [NLContextualEmbeddingKey](nlcontextualembeddingkey.md): This class defines properties that you can filter or search for contextual embeddings.
