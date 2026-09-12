> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagscheme](https://developer.apple.com/documentation/naturallanguage/nltagscheme)

# NLTagScheme (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants for the tag schemes specified when initializing a linguistic tagger.

## Declaration

```swift
struct NLTagScheme
```

<a id="Overview"></a>

## Overview

When initializing a linguistic tagger with [init(\_:)](nltagscheme/init%28__%29.md), you specify one or more tag schemes that correspond to the kind of information you’re interested in for a selection of natural language text. To ensure optimal performance, avoid specifying tag schemes that you won’t use.

Some tag schemes are only available for certain units and languages. Use [availableTagSchemes(for:language:)](nltagger/availabletagschemes%28for_language_%29.md) to determine the possible values for a specified language and linguistic unit.

When working with linguistic tags using the methods described in Getting linguistic tags and Enumerating linguistic tags in [NLTagger](nltagger.md), the returned tag value depends on the specified scheme. For example, given the token “Überraschung”, the returned tag is [noun](nltag/noun.md) when using the [lexicalClass](nltagscheme/lexicalclass.md) tag scheme, [german](nllanguage/german.md) (German language) when using the [language](nltagscheme/language.md) tag scheme, and “Latn” (Latin script) when using the [script](nltagscheme/script.md) tag scheme, as shown in the following code.

```swift
let tagger = NLTagger(tagSchemes: [.lexicalClass, .language, .script], options: 0)
tagger.string = "Überraschung"

tagger.tag(at: 0, unit: .word, scheme: .lexicalClass, tokenRange: nil) // Noun
tagger.tag(at: 0, unit: .word, scheme: .language, tokenRange: nil) // german
tagger.tag(at: 0, unit: .word, scheme: .script, tokenRange: nil) // Latn
```

## Topics

### Schemes

- [tokenType](nltagscheme/tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](nltagscheme/lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nltagscheme/nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nltagscheme/nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [nameType](nltagscheme/nametype.md), and classifies all other tokens according to [lexicalClass](nltagscheme/lexicalclass.md).
- [lemma](nltagscheme/lemma.md): A scheme that supplies a stem form of a word token, if known.
- [language](nltagscheme/language.md): A scheme that supplies the language for a token, if it can determine one.
- [script](nltagscheme/script.md): A scheme that supplies the script for a token, if it can determine one.
- [sentimentScore](nltagscheme/sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

### Initializers

- [init(\_:)](nltagscheme/init%28__%29.md): Creates a tag scheme.
- [init(rawValue:)](nltagscheme/init%28rawvalue_%29.md): Creates a tag scheme with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the tag schemes

- [availableTagSchemes(for:language:)](nltagger/availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [requestAssets(for:tagScheme:completionHandler:)](nltagger/requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [NLTagger.AssetsResult](nltagger/assetsresult.md): The response to an asset request.
- [tagSchemes](nltagger/tagschemes.md): The tag schemes configured for this linguistic tagger.

# NLTagScheme (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants for the tag schemes specified when initializing a linguistic tagger.

## Declaration

```objectivec
typedef NSString * NLTagScheme;
```

<a id="Overview"></a>

## Overview

When initializing a linguistic tagger with [init(\_:)](nltagscheme/init%28__%29.md), you specify one or more tag schemes that correspond to the kind of information you’re interested in for a selection of natural language text. To ensure optimal performance, avoid specifying tag schemes that you won’t use.

Some tag schemes are only available for certain units and languages. Use [availableTagSchemesForUnit:language:](nltagger/availabletagschemes%28for_language_%29.md) to determine the possible values for a specified language and linguistic unit.

When working with linguistic tags using the methods described in Getting linguistic tags and Enumerating linguistic tags in [NLTagger](nltagger.md), the returned tag value depends on the specified scheme. For example, given the token “Überraschung”, the returned tag is [NLTagNoun](nltag/noun.md) when using the [NLTagSchemeLexicalClass](nltagscheme/lexicalclass.md) tag scheme, [NLLanguageGerman](nllanguage/german.md) (German language) when using the [NLTagSchemeLanguage](nltagscheme/language.md) tag scheme, and “Latn” (Latin script) when using the [NLTagSchemeScript](nltagscheme/script.md) tag scheme, as shown in the following code.

```swift
let tagger = NLTagger(tagSchemes: [.lexicalClass, .language, .script], options: 0)
tagger.string = "Überraschung"

tagger.tag(at: 0, unit: .word, scheme: .lexicalClass, tokenRange: nil) // Noun
tagger.tag(at: 0, unit: .word, scheme: .language, tokenRange: nil) // german
tagger.tag(at: 0, unit: .word, scheme: .script, tokenRange: nil) // Latn
```

## Topics

### Schemes

- [NLTagSchemeTokenType](nltagscheme/tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NLTagSchemeLexicalClass](nltagscheme/lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NLTagSchemeNameType](nltagscheme/nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [NLTagSchemeNameTypeOrLexicalClass](nltagscheme/nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [NLTagSchemeNameType](nltagscheme/nametype.md), and classifies all other tokens according to [NLTagSchemeLexicalClass](nltagscheme/lexicalclass.md).
- [NLTagSchemeLemma](nltagscheme/lemma.md): A scheme that supplies a stem form of a word token, if known.
- [NLTagSchemeLanguage](nltagscheme/language.md): A scheme that supplies the language for a token, if it can determine one.
- [NLTagSchemeScript](nltagscheme/script.md): A scheme that supplies the script for a token, if it can determine one.
- [NLTagSchemeSentimentScore](nltagscheme/sentimentscore.md): A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

## See Also

### Getting the tag schemes

- [availableTagSchemesForUnit:language:](nltagger/availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [requestAssetsForLanguage:tagScheme:completionHandler:](nltagger/requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [NLTaggerAssetsResult](nltagger/assetsresult.md): The response to an asset request.
- [tagSchemes](nltagger/tagschemes.md): The tag schemes configured for this linguistic tagger.
