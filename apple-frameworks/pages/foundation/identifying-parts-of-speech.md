> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/identifying-parts-of-speech](https://developer.apple.com/documentation/foundation/identifying-parts-of-speech)

# Identifying Parts of Speech (Swift)

**Framework:** Foundation  
**Kind:** Article

Classify nouns, verbs, adjectives, and other parts of speech in a string.

<a id="overview"></a>

## Overview

Identifying the parts of speech for words in natural language text can help your program understand the meaning of sentences. For example, given the transcription of a request spoken by the user, you might determine general intent by looking at only the nouns and verbs.

The example below shows how to use [NSLinguisticTagger](nslinguistictagger.md) to enumerate over natural language text and identify the part of speech for each word.

```swift
let text = "The ripe taste of cheese improves with age."
let tagger = NSLinguisticTagger(tagSchemes: [.lexicalClass], options: 0)
tagger.string = text
let range = NSRange(location: 0, length: text.utf16.count)
let options: NSLinguisticTagger.Options = [.omitPunctuation, .omitWhitespace]
tagger.enumerateTags(in: range, unit: .word, scheme: .lexicalClass, options: options) { tag, tokenRange, _ in
    if let tag = tag {
        let word = (text as NSString).substring(with: tokenRange)
        print("\(word): \(tag)")
    }
}
```

First, an instance of [NSLinguisticTagger](nslinguistictagger.md) is created, specifying [lexicalClass](nslinguistictagscheme/lexicalclass.md) as the tag scheme to be used. Next, the [string](nslinguistictagger/string.md) property of the linguistic tagger is set to the natural language text. Finally, the linguistic tagger enumerates over the entire range of the string, specifying [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md) as the tag unit and [lexicalClass](nslinguistictagscheme/lexicalclass.md) as the tag scheme, and omitting any punctuation or whitespace. In the enumeration block, the part of speech is provided by `tag`, and each word is obtained by taking a substring of the original text at `tokenRange`.

When run, this code prints out each word and its part of speech on a new line, as shown below:

| Word | Part of speech |
| --- | --- |
| The | [determiner](nslinguistictag/determiner.md) |
| ripe | [adjective](nslinguistictag/adjective.md) |
| taste | [noun](nslinguistictag/noun.md) |
| of | [preposition](nslinguistictag/preposition.md) |
| cheese | [noun](nslinguistictag/noun.md) |
| improves | [verb](nslinguistictag/verb.md) |
| with | [preposition](nslinguistictag/preposition.md) |
| age | [noun](nslinguistictag/noun.md) |

## See Also

### Related Documentation

- [Tokenizing Natural Language Text](tokenizing-natural-language-text.md): Enumerate the words in a string.

### Enumerating Linguistic Tags

- [Identifying People, Places, and Organizations](identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTags(in:unit:scheme:options:using:)](nslinguistictagger/enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTags(in:scheme:options:using:)](nslinguistictagger/enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [enumerateTags(for:range:unit:scheme:options:orthography:using:)](nslinguistictagger/enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
- [NSLinguisticTagger.Options](nslinguistictagger/options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

# Identifying Parts of Speech (Objective-C)

**Framework:** Foundation  
**Kind:** Article

Classify nouns, verbs, adjectives, and other parts of speech in a string.

<a id="overview"></a>

## Overview

Identifying the parts of speech for words in natural language text can help your program understand the meaning of sentences. For example, given the transcription of a request spoken by the user, you might determine general intent by looking at only the nouns and verbs.

The example below shows how to use [NSLinguisticTagger](nslinguistictagger.md) to enumerate over natural language text and identify the part of speech for each word.

```swift
let text = "The ripe taste of cheese improves with age."
let tagger = NSLinguisticTagger(tagSchemes: [.lexicalClass], options: 0)
tagger.string = text
let range = NSRange(location: 0, length: text.utf16.count)
let options: NSLinguisticTagger.Options = [.omitPunctuation, .omitWhitespace]
tagger.enumerateTags(in: range, unit: .word, scheme: .lexicalClass, options: options) { tag, tokenRange, _ in
    if let tag = tag {
        let word = (text as NSString).substring(with: tokenRange)
        print("\(word): \(tag)")
    }
}
```

First, an instance of [NSLinguisticTagger](nslinguistictagger.md) is created, specifying [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md) as the tag scheme to be used. Next, the [string](nslinguistictagger/string.md) property of the linguistic tagger is set to the natural language text. Finally, the linguistic tagger enumerates over the entire range of the string, specifying [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md) as the tag unit and [NSLinguisticTagSchemeLexicalClass](nslinguistictagscheme/lexicalclass.md) as the tag scheme, and omitting any punctuation or whitespace. In the enumeration block, the part of speech is provided by `tag`, and each word is obtained by taking a substring of the original text at `tokenRange`.

When run, this code prints out each word and its part of speech on a new line, as shown below:

| Word | Part of speech |
| --- | --- |
| The | [NSLinguisticTagDeterminer](nslinguistictag/determiner.md) |
| ripe | [NSLinguisticTagAdjective](nslinguistictag/adjective.md) |
| taste | [NSLinguisticTagNoun](nslinguistictag/noun.md) |
| of | [NSLinguisticTagPreposition](nslinguistictag/preposition.md) |
| cheese | [NSLinguisticTagNoun](nslinguistictag/noun.md) |
| improves | [NSLinguisticTagVerb](nslinguistictag/verb.md) |
| with | [NSLinguisticTagPreposition](nslinguistictag/preposition.md) |
| age | [NSLinguisticTagNoun](nslinguistictag/noun.md) |

## See Also

### Related Documentation

- [Tokenizing Natural Language Text](tokenizing-natural-language-text.md): Enumerate the words in a string.

### Enumerating Linguistic Tags

- [Identifying People, Places, and Organizations](identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](nslinguistictagger/enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTagsInRange:scheme:options:usingBlock:](nslinguistictagger/enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [enumerateTagsForString:range:unit:scheme:options:orthography:usingBlock:](nslinguistictagger/enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
- [NSLinguisticTaggerOptions](nslinguistictagger/options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.
