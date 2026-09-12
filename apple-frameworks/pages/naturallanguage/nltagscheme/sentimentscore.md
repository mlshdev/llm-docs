> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagscheme/sentimentscore](https://developer.apple.com/documentation/naturallanguage/nltagscheme/sentimentscore)

# sentimentScore (Swift)

**Framework:** Natural Language  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

## Declaration

```swift
static let sentimentScore: NLTagScheme
```

<a id="Discussion"></a>

## Discussion

The range of a sentiment score is `[-1.0, 1.0]`. A score of `1.0` is the most positive, a score of `-1.0` is the most negative, and a score of `0.0` is neutral.

```swift
let text = "It's pretty good."

let tagger = NLTagger(tagSchemes: [.tokenType, .sentimentScore])
tagger.string = text

tagger.enumerateTags(in: text.startIndex..<text.endIndex, unit: .paragraph, 
                     scheme: .sentimentScore, options: []) { sentiment, _ in
    
    if let sentimentScore = sentiment {
        print(sentimentScore.rawValue)
    }
    
    return true
}
```

## See Also

### Schemes

- [tokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [lexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [nameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [nameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [nameType](nametype.md), and classifies all other tokens according to [lexicalClass](lexicalclass.md).
- [lemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [language](language.md): A scheme that supplies the language for a token, if it can determine one.
- [script](script.md): A scheme that supplies the script for a token, if it can determine one.

# NLTagSchemeSentimentScore (Objective-C)

**Framework:** Natural Language  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A scheme that scores text as positive, negative, or neutral based on its sentiment polarity.

## Declaration

```objectivec
extern NLTagScheme const NLTagSchemeSentimentScore;
```

<a id="Discussion"></a>

## Discussion

The range of a sentiment score is `[-1.0, 1.0]`. A score of `1.0` is the most positive, a score of `-1.0` is the most negative, and a score of `0.0` is neutral.

```swift
let text = "It's pretty good."

let tagger = NLTagger(tagSchemes: [.tokenType, .sentimentScore])
tagger.string = text

tagger.enumerateTags(in: text.startIndex..<text.endIndex, unit: .paragraph, 
                     scheme: .sentimentScore, options: []) { sentiment, _ in
    
    if let sentimentScore = sentiment {
        print(sentimentScore.rawValue)
    }
    
    return true
}
```

## See Also

### Schemes

- [NLTagSchemeTokenType](tokentype.md): A scheme that classifies tokens according to their broad type: word, punctuation, or whitespace.
- [NLTagSchemeLexicalClass](lexicalclass.md): A scheme that classifies tokens according to class: part of speech, type of punctuation, or whitespace.
- [NLTagSchemeNameType](nametype.md): A scheme that classifies tokens according to whether they are part of a named entity.
- [NLTagSchemeNameTypeOrLexicalClass](nametypeorlexicalclass.md): A scheme that classifies tokens corresponding to names according to [NLTagSchemeNameType](nametype.md), and classifies all other tokens according to [NLTagSchemeLexicalClass](lexicalclass.md).
- [NLTagSchemeLemma](lemma.md): A scheme that supplies a stem form of a word token, if known.
- [NLTagSchemeLanguage](language.md): A scheme that supplies the language for a token, if it can determine one.
- [NLTagSchemeScript](script.md): A scheme that supplies the script for a token, if it can determine one.
