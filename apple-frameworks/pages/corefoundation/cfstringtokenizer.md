> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtokenizer](https://developer.apple.com/documentation/corefoundation/cfstringtokenizer)

# CFStringTokenizer (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFStringTokenizer
```

<a id="Overview"></a>

## Overview

CFStringTokenizer allows you to tokenize strings into words, sentences or paragraphs in a language-neutral way. It supports languages such as Japanese and Chinese that do not delimit words by spaces, as well as de-compounding German compounds. You can obtain Latin transcription for tokens. It also provides language identification API.

You can use a CFStringTokenizer to break a string into tokens (sub-strings) on the basis of words, sentences, or paragraphs. When you create a tokenizer, you can supply options to further modify the tokenization—see [Tokenization Modifiers](1588024-tokenization-modifiers.md).

In addition, with CFStringTokenizer:

- You can de-compound German compounds
- You can identify the language used in a string (using [CFStringTokenizerCopyBestStringLanguage(\_:\_:)](cfstringtokenizercopybeststringlanguage%28____%29.md))
- You can obtain Latin transcription for tokens

To find a token that includes the character specified by character index and set it as the current token, you call [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md). To advance to the next token and set it as the current token, you call [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md). To get the range of current token, you call [CFStringTokenizerGetCurrentTokenRange(\_:)](cfstringtokenizergetcurrenttokenrange%28__%29.md). You can use         [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md) to get the attribute of the current token. If the current token is a compound, you can call [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](cfstringtokenizergetcurrentsubtokens%28________%29.md) to retrieve the subtokens or derived subtokens contained in the compound token. To guess the language of a string, you call [CFStringTokenizerCopyBestStringLanguage(\_:\_:)](cfstringtokenizercopybeststringlanguage%28____%29.md).

## Topics

### Creating a Tokenizer

- [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md): Returns a tokenizer for a given string.

### Setting the String

- [CFStringTokenizerSetString(\_:\_:\_:)](cfstringtokenizersetstring%28______%29.md): Sets the string for a tokenizer.

### Changing the Location

- [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md): Advances the tokenizer to the next token and sets that as the current token.
- [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md): Finds a token that includes the character at a given index, and set it as the current token.

### Getting Information About the Current Token

- [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md): Returns a given attribute of the current token.
- [CFStringTokenizerGetCurrentTokenRange(\_:)](cfstringtokenizergetcurrenttokenrange%28__%29.md): Returns the range of the current token.
- [CFStringTokenizerGetCurrentSubTokens(\_:\_:\_:\_:)](cfstringtokenizergetcurrentsubtokens%28________%29.md): Retrieves the subtokens or derived subtokens contained in the compound token.

### Identifying a Language

- [CFStringTokenizerCopyBestStringLanguage(\_:\_:)](cfstringtokenizercopybeststringlanguage%28____%29.md): Guesses a language of a given string and returns the guess as a BCP 47 string.

### Getting the CFStringTokenizer Type ID

- [CFStringTokenizerGetTypeID()](cfstringtokenizergettypeid%28%29.md): Returns the type ID for CFStringTokenizer.

### Constants

- [Tokenization Modifiers](1588024-tokenization-modifiers.md): Tokenization options are used with [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) to specify how the string should be tokenized
- [CFStringTokenizerTokenType](cfstringtokenizertokentype.md): Token types returned by [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md) and [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFStringTokenizerRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFStringTokenizer * CFStringTokenizerRef;
```

<a id="Overview"></a>

## Overview

CFStringTokenizer allows you to tokenize strings into words, sentences or paragraphs in a language-neutral way. It supports languages such as Japanese and Chinese that do not delimit words by spaces, as well as de-compounding German compounds. You can obtain Latin transcription for tokens. It also provides language identification API.

You can use a CFStringTokenizer to break a string into tokens (sub-strings) on the basis of words, sentences, or paragraphs. When you create a tokenizer, you can supply options to further modify the tokenization—see [Tokenization Modifiers](1588024-tokenization-modifiers.md).

In addition, with CFStringTokenizer:

- You can de-compound German compounds
- You can identify the language used in a string (using [CFStringTokenizerCopyBestStringLanguage](cfstringtokenizercopybeststringlanguage%28____%29.md))
- You can obtain Latin transcription for tokens

To find a token that includes the character specified by character index and set it as the current token, you call [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md). To advance to the next token and set it as the current token, you call [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md). To get the range of current token, you call [CFStringTokenizerGetCurrentTokenRange](cfstringtokenizergetcurrenttokenrange%28__%29.md). You can use         [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md) to get the attribute of the current token. If the current token is a compound, you can call [CFStringTokenizerGetCurrentSubTokens](cfstringtokenizergetcurrentsubtokens%28________%29.md) to retrieve the subtokens or derived subtokens contained in the compound token. To guess the language of a string, you call [CFStringTokenizerCopyBestStringLanguage](cfstringtokenizercopybeststringlanguage%28____%29.md).

## Topics

### Creating a Tokenizer

- [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md): Returns a tokenizer for a given string.

### Setting the String

- [CFStringTokenizerSetString](cfstringtokenizersetstring%28______%29.md): Sets the string for a tokenizer.

### Changing the Location

- [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md): Advances the tokenizer to the next token and sets that as the current token.
- [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md): Finds a token that includes the character at a given index, and set it as the current token.

### Getting Information About the Current Token

- [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md): Returns a given attribute of the current token.
- [CFStringTokenizerGetCurrentTokenRange](cfstringtokenizergetcurrenttokenrange%28__%29.md): Returns the range of the current token.
- [CFStringTokenizerGetCurrentSubTokens](cfstringtokenizergetcurrentsubtokens%28________%29.md): Retrieves the subtokens or derived subtokens contained in the compound token.

### Identifying a Language

- [CFStringTokenizerCopyBestStringLanguage](cfstringtokenizercopybeststringlanguage%28____%29.md): Guesses a language of a given string and returns the guess as a BCP 47 string.

### Getting the CFStringTokenizer Type ID

- [CFStringTokenizerGetTypeID](cfstringtokenizergettypeid%28%29.md): Returns the type ID for CFStringTokenizer.

### Constants

- [Tokenization Modifiers](1588024-tokenization-modifiers.md): Tokenization options are used with [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) to specify how the string should be tokenized
- [CFStringTokenizerTokenType](cfstringtokenizertokentype.md): Token types returned by [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md) and [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md).

## See Also

### Related Documentation

- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
