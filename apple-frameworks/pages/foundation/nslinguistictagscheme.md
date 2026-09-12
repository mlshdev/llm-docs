> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagscheme](https://developer.apple.com/documentation/foundation/nslinguistictagscheme)

# NSLinguisticTagScheme (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the tag schemes specified when initializing a linguistic tagger.

## Declaration

```swift
struct NSLinguisticTagScheme
```

<a id="Discussion"></a>

## Discussion

When initializing a linguistic tagger with [init(tagSchemes:options:)](nslinguistictagger/init%28tagschemes_options_%29.md), you specify one or more tag schemes that correspond to the kind of information you’re interested in for a selection of natural language text. To ensure optimal performance, avoid specifying tag schemes that you won’t use.

Some tag schemes are only available for certain units and languages. Use the [availableTagSchemes(for:language:)](nslinguistictagger/availabletagschemes%28for_language_%29.md) or [availableTagSchemes(forLanguage:)](nslinguistictagger/availabletagschemes%28forlanguage_%29.md) methods to determine the possible values for a specified language and linguistic unit.

When working with linguistic tags using the methods described in Getting Linguistic Tags and Enumerating Linguistic Tags, the returned tag value depends on the specified scheme. For example, given the token “Überraschung”, the returned tag is [noun](nslinguistictag/noun.md) when using the [lexicalClass](nslinguistictagscheme/lexicalclass.md) tag scheme, “de” (German language) when using the [language](nslinguistictagscheme/language.md) tag scheme, and “Latn” (Latin script) when using the [script](nslinguistictagscheme/script.md) tag scheme, as shown in the following code.

```swift
let tagger = NSLinguisticTagger(tagSchemes: [.lexicalClass, .language, .script], options: 0)
tagger.string = "Überraschung"

tagger.tag(at: 0, unit: .word, scheme: .lexicalClass, tokenRange: nil) // Noun
tagger.tag(at: 0, unit: .word, scheme: .language, tokenRange: nil) // de
tagger.tag(at: 0, unit: .word, scheme: .script, tokenRange: nil) // Latn
```

The following table lists the available tag schemes, their applicable linguistic units, and possible tag values.

| Linguistic tag scheme | Applicable linguistic units | Possible tag values |
| --- | --- | --- |
| [tokenType](nslinguistictagscheme/tokentype.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md) | See Token Types |
| [lexicalClass](nslinguistictagscheme/lexicalclass.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md) | See Lexical Classes |
| [nameType](nslinguistictagscheme/nametype.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md) | See Name Types |
| [nameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md) | See Name Types and Lexical Classes |
| [lemma](nslinguistictagscheme/lemma.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md) | A stem of the word |
| [language](nslinguistictagscheme/language.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md), [NSLinguisticTaggerUnit.sentence](nslinguistictaggerunit/sentence.md), [NSLinguisticTaggerUnit.paragraph](nslinguistictaggerunit/paragraph.md), [NSLinguisticTaggerUnit.document](nslinguistictaggerunit/document.md) | A BCP-47 language tag |
| [script](nslinguistictagscheme/script.md) | [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md), [NSLinguisticTaggerUnit.sentence](nslinguistictaggerunit/sentence.md), [NSLinguisticTaggerUnit.paragraph](nslinguistictaggerunit/paragraph.md), [NSLinguisticTaggerUnit.document](nslinguistictaggerunit/document.md) | An ISO 15924 script code |

## Topics

### Schemes

- [tokenType](nslinguistictagscheme/tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](nslinguistictagscheme/lexicalclass.md): Deprecated. Classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nslinguistictagscheme/nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [nameType](nslinguistictagscheme/nametype.md), and classifies all other tokens according to [lexicalClass](nslinguistictagscheme/lexicalclass.md).
- [lemma](nslinguistictagscheme/lemma.md): Deprecated. Supplies a stem form of a word token, if known.
- [language](nslinguistictagscheme/language.md): Deprecated. Supplies the language for a token, if one can be determined.
- [script](nslinguistictagscheme/script.md): Deprecated. Supplies the script for a token, if one can be determined.

### Initializers

- [init(\_:)](nslinguistictagscheme/init%28__%29.md)
- [init(rawValue:)](nslinguistictagscheme/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [NSLinguisticTaggerUnit](nslinguistictaggerunit.md): Constants representing linguistic units.
- [NSLinguisticTag](nslinguistictag.md): A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

# NSLinguisticTagScheme (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the tag schemes specified when initializing a linguistic tagger.

## Declaration

```objectivec
typedef NSString * NSLinguisticTagScheme;
```

<a id="Discussion"></a>

## Discussion

When initializing a linguistic tagger with [initWithTagSchemes:options:](nslinguistictagger/init%28tagschemes_options_%29.md), you specify one or more tag schemes that correspond to the kind of information you’re interested in for a selection of natural language text. To ensure optimal performance, avoid specifying tag schemes that you won’t use.

Some tag schemes are only available for certain units and languages. Use the [availableTagSchemesForUnit:language:](nslinguistictagger/availabletagschemes%28for_language_%29.md) or [availableTagSchemesForLanguage:](nslinguistictagger/availabletagschemes%28forlanguage_%29.md) methods to determine the possible values for a specified language and linguistic unit.

When working with linguistic tags using the methods described in Getting Linguistic Tags and Enumerating Linguistic Tags, the returned tag value depends on the specified scheme. For example, given the token “Überraschung”, the returned tag is [NSLinguisticTagNoun](nslinguistictag/noun.md) when using the [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md) tag scheme, “de” (German language) when using the [NSLinguisticTagSchemeLanguage](nslinguistictagscheme/language.md) tag scheme, and “Latn” (Latin script) when using the [NSLinguisticTagSchemeScript](nslinguistictagscheme/script.md) tag scheme, as shown in the following code.

```swift
let tagger = NSLinguisticTagger(tagSchemes: [.lexicalClass, .language, .script], options: 0)
tagger.string = "Überraschung"

tagger.tag(at: 0, unit: .word, scheme: .lexicalClass, tokenRange: nil) // Noun
tagger.tag(at: 0, unit: .word, scheme: .language, tokenRange: nil) // de
tagger.tag(at: 0, unit: .word, scheme: .script, tokenRange: nil) // Latn
```

The following table lists the available tag schemes, their applicable linguistic units, and possible tag values.

| Linguistic tag scheme | Applicable linguistic units | Possible tag values |
| --- | --- | --- |
| [NSLinguisticTagSchemeTokenType](nslinguistictagscheme/tokentype.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md) | See Token Types |
| [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md) | See Lexical Classes |
| [NSLinguisticTagSchemeNameType](nslinguistictagscheme/nametype.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md) | See Name Types |
| [NSLinguisticTagSchemeNameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md) | See Name Types and Lexical Classes |
| [NSLinguisticTagSchemeLemma](nslinguistictagscheme/lemma.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md) | A stem of the word |
| [NSLinguisticTagSchemeLanguage](nslinguistictagscheme/language.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md), [NSLinguisticTaggerUnitSentence](nslinguistictaggerunit/sentence.md), [NSLinguisticTaggerUnitParagraph](nslinguistictaggerunit/paragraph.md), [NSLinguisticTaggerUnitDocument](nslinguistictaggerunit/document.md) | A BCP-47 language tag |
| [NSLinguisticTagSchemeScript](nslinguistictagscheme/script.md) | [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md), [NSLinguisticTaggerUnitSentence](nslinguistictaggerunit/sentence.md), [NSLinguisticTaggerUnitParagraph](nslinguistictaggerunit/paragraph.md), [NSLinguisticTaggerUnitDocument](nslinguistictaggerunit/document.md) | An ISO 15924 script code |

## Topics

### Schemes

- [NSLinguisticTagSchemeTokenType](nslinguistictagscheme/tokentype.md): Deprecated. Classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md): Deprecated. Classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NSLinguisticTagSchemeNameType](nslinguistictagscheme/nametype.md): Deprecated. Classifies tokens according to whether they are part of a named entity.
- [NSLinguisticTagSchemeNameTypeOrLexicalClass](nslinguistictagscheme/nametypeorlexicalclass.md): Deprecated. Classifies tokens corresponding to names according to [NSLinguisticTagSchemeNameType](nslinguistictagscheme/nametype.md), and classifies all other tokens according to [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md).
- [NSLinguisticTagSchemeLemma](nslinguistictagscheme/lemma.md): Deprecated. Supplies a stem form of a word token, if known.
- [NSLinguisticTagSchemeLanguage](nslinguistictagscheme/language.md): Deprecated. Supplies the language for a token, if one can be determined.
- [NSLinguisticTagSchemeScript](nslinguistictagscheme/script.md): Deprecated. Supplies the script for a token, if one can be determined.

## See Also

### Supporting Types

- [NSLinguisticTaggerUnit](nslinguistictaggerunit.md): Constants representing linguistic units.
- [NSLinguisticTag](nslinguistictag.md): A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.
