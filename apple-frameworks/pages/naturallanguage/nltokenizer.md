> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer](https://developer.apple.com/documentation/naturallanguage/nltokenizer)

# NLTokenizer (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A tokenizer that segments natural language text into semantic units.

## Declaration

```swift
class NLTokenizer
```

## Mentioned In

- [Tokenizing natural language text](tokenizing-natural-language-text.md)

<a id="overview"></a>

## Overview

[NLTokenizer](nltokenizer.md) creates individual units from natural language text. Define the desired unit (word, sentence, paragraph, or document as declared in the [NLTokenUnit](nltokenunit.md)) for tokenization, and then assign a string to tokenize. The [enumerateTokensInRange:usingBlock:](nltokenizer/enumeratetokensinrange_usingblock_.md) method provides the ranges of the tokens in the string based on the tokenization unit.

For more information, see [Tokenizing natural language text](tokenizing-natural-language-text.md).

> **Important**

>  Use an [NLTokenizer](nltokenizer.md) instance on one thread or one dispatch queue at a time. You do this by either serializing method calls to the tokenizer, or by creating a separate tokenizer instance for each thread and dispatch queue.

## Topics

### Creating a tokenizer

- [init(unit:)](nltokenizer/init%28unit_%29.md): Creates a tokenizer with the specified unit.

### Configuring a tokenizer

- [string](nltokenizer/string.md): The text to be tokenized.
- [setLanguage(\_:)](nltokenizer/setlanguage%28__%29.md): Sets the language of the text to be tokenized.
- [unit](nltokenizer/unit.md): The linguistic unit that this tokenizer uses.
- [NLTokenizer.Attributes](nltokenizer/attributes.md): Hints about the contents of the string for the tokenizer.

### Enumerating the tokens

- [enumerateTokens(in:using:)](nltokenizer/enumeratetokens%28in_using_%29.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokens(for:)](nltokenizer/tokens%28for_%29.md): Tokenizes the string within the provided range.
- [tokenRange(at:)](nltokenizer/tokenrange%28at_%29.md): Finds the range of the token at the given index.
- [tokenRange(for:)](nltokenizer/tokenrange%28for_%29.md): Finds the entire range of all tokens contained completely or partially within the specified range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tokenization

- [Tokenizing natural language text](tokenizing-natural-language-text.md): Enumerate the words in a string.

# NLTokenizer (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A tokenizer that segments natural language text into semantic units.

## Declaration

```objectivec
@interface NLTokenizer : NSObject
```

## Mentioned In

- [Tokenizing natural language text](tokenizing-natural-language-text.md)

<a id="overview"></a>

## Overview

[NLTokenizer](nltokenizer.md) creates individual units from natural language text. Define the desired unit (word, sentence, paragraph, or document as declared in the [NLTokenUnit](nltokenunit.md)) for tokenization, and then assign a string to tokenize. The [enumerateTokensInRange:usingBlock:](nltokenizer/enumeratetokensinrange_usingblock_.md) method provides the ranges of the tokens in the string based on the tokenization unit.

For more information, see [Tokenizing natural language text](tokenizing-natural-language-text.md).

> **Important**

>  Use an [NLTokenizer](nltokenizer.md) instance on one thread or one dispatch queue at a time. You do this by either serializing method calls to the tokenizer, or by creating a separate tokenizer instance for each thread and dispatch queue.

## Topics

### Creating a tokenizer

- [initWithUnit:](nltokenizer/init%28unit_%29.md): Creates a tokenizer with the specified unit.

### Configuring a tokenizer

- [string](nltokenizer/string.md): The text to be tokenized.
- [setLanguage:](nltokenizer/setlanguage%28__%29.md): Sets the language of the text to be tokenized.
- [unit](nltokenizer/unit.md): The linguistic unit that this tokenizer uses.
- [NLTokenizerAttributes](nltokenizer/attributes.md): Hints about the contents of the string for the tokenizer.

### Enumerating the tokens

- [enumerateTokensInRange:usingBlock:](nltokenizer/enumeratetokensinrange_usingblock_.md): Enumerates over a given range of the string and calls the specified block for each token.
- [tokensForRange:](nltokenizer/tokensforrange_.md): Tokenizes the string within the provided range.
- [tokenRangeAtIndex:](nltokenizer/tokenrangeatindex_.md): Finds the range of the token at the given index.
- [tokenRangeForRange:](nltokenizer/tokenrangeforrange_.md): Finds the entire range of all tokens contained completely or partially within the specified range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Tokenization

- [Tokenizing natural language text](tokenizing-natural-language-text.md): Enumerate the words in a string.
