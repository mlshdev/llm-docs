> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenunit/sentence](https://developer.apple.com/documentation/naturallanguage/nltokenunit/sentence)

# NLTokenUnit.sentence (Swift)

**Framework:** Natural Language  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An individual sentence.

## Declaration

```swift
case sentence
```

<a id="Discussion"></a>

## Discussion

Use this linguistic unit to tokenize text into sentences, like in the following example:

```swift
let text = "This is a sentence. This is another sentence."
    
let tokenizer = NLTokenizer(unit: .sentence)
tokenizer.string = text
    
let range = text.startIndex..<text.endIndex
    
let tokenArray = tokenizer.tokens(for: range)
print("Number of tokens: \(tokenArray.count)")
    
tokenizer.enumerateTokens(in: range) { tokenRange, _ in
    print(text[tokenRange])
    return true
}
```

For more information, see [Tokenizing natural language text](../tokenizing-natural-language-text.md).

## See Also

### Constants

- [NLTokenUnit.word](word.md): An individual word.
- [NLTokenUnit.paragraph](paragraph.md): An individual paragraph.
- [NLTokenUnit.document](document.md): The document in its entirety.

# NLTokenUnitSentence (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An individual sentence.

## Declaration

```objectivec
NLTokenUnitSentence
```

<a id="Discussion"></a>

## Discussion

Use this linguistic unit to tokenize text into sentences, like in the following example:

```swift
let text = "This is a sentence. This is another sentence."
    
let tokenizer = NLTokenizer(unit: .sentence)
tokenizer.string = text
    
let range = text.startIndex..<text.endIndex
    
let tokenArray = tokenizer.tokens(for: range)
print("Number of tokens: \(tokenArray.count)")
    
tokenizer.enumerateTokens(in: range) { tokenRange, _ in
    print(text[tokenRange])
    return true
}
```

For more information, see [Tokenizing natural language text](../tokenizing-natural-language-text.md).

## See Also

### Constants

- [NLTokenUnitWord](word.md): An individual word.
- [NLTokenUnitParagraph](paragraph.md): An individual paragraph.
- [NLTokenUnitDocument](document.md): The document in its entirety.
