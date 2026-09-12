> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker](https://developer.apple.com/documentation/uikit/uitextchecker)

# UITextChecker (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object to check a string (usually the text of a document) for misspelled words.

## Declaration

```swift
@MainActor class UITextChecker
```

<a id="overview"></a>

## Overview

[UITextChecker](uitextchecker.md) spell-checks using a lexicon for a specific language. You can tell it to ignore specific words when spell-checking a particular document and you can have it learn words, which adds those words to the lexicon. You generally use one instance of [UITextChecker](uitextchecker.md) per document, although you can use a single instance to spell-check related pieces of text if you want to share ignored words and other state.

You may also use a text checker to obtain completions for partially entered words, as well as possible replacements for misspelled words, which you then can present to users.

## Topics

### Initiating a Spell Check

- [rangeOfMisspelledWord(in:range:startingAt:wrap:language:)](uitextchecker/rangeofmisspelledword%28in_range_startingat_wrap_language_%29.md): Initiates a search of a range of a string for a misspelled word.

### Obtaining Word Guesses and Completions

- [guesses(forWordRange:in:language:)](uitextchecker/guesses%28forwordrange_in_language_%29.md): Returns a list of words that are possible valid replacements for a misspelled word.
- [completions(forPartialWordRange:in:language:)](uitextchecker/completions%28forpartialwordrange_in_language_%29.md): Returns an array of strings that are possible completions for a partially entered word.

### Learning and Ignoring Words

- [ignoreWord(\_:)](uitextchecker/ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [ignoredWords](uitextchecker/ignoredwords.md): Returns the words that the text checker ignores when spell-checking.
- [learnWord(\_:)](uitextchecker/learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [unlearnWord(\_:)](uitextchecker/unlearnword%28__%29.md): Tells the text checker to unlearn the specified word.
- [hasLearnedWord(\_:)](uitextchecker/haslearnedword%28__%29.md): Returns whether the text checker has learned the specified word.

### Getting the Available Languages

- [availableLanguages](uitextchecker/availablelanguages.md): Returns the languages that the text checker’s class can perform spell-checking for.

### Instance Methods

- [ignoreGrammarRange(\_:inSentence:)](uitextchecker/ignoregrammarrange%28__insentence_%29.md)
- [requestGrammarChecking(of:range:waitForAllResults:completionHandler:)](uitextchecker/requestgrammarchecking%28of_range_waitforallresults_completionhandler_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UITextChecker (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object to check a string (usually the text of a document) for misspelled words.

## Declaration

```objectivec
@interface UITextChecker : NSObject
```

<a id="overview"></a>

## Overview

[UITextChecker](uitextchecker.md) spell-checks using a lexicon for a specific language. You can tell it to ignore specific words when spell-checking a particular document and you can have it learn words, which adds those words to the lexicon. You generally use one instance of [UITextChecker](uitextchecker.md) per document, although you can use a single instance to spell-check related pieces of text if you want to share ignored words and other state.

You may also use a text checker to obtain completions for partially entered words, as well as possible replacements for misspelled words, which you then can present to users.

## Topics

### Initiating a Spell Check

- [rangeOfMisspelledWordInString:range:startingAt:wrap:language:](uitextchecker/rangeofmisspelledword%28in_range_startingat_wrap_language_%29.md): Initiates a search of a range of a string for a misspelled word.

### Obtaining Word Guesses and Completions

- [guessesForWordRange:inString:language:](uitextchecker/guesses%28forwordrange_in_language_%29.md): Returns a list of words that are possible valid replacements for a misspelled word.
- [completionsForPartialWordRange:inString:language:](uitextchecker/completions%28forpartialwordrange_in_language_%29.md): Returns an array of strings that are possible completions for a partially entered word.

### Learning and Ignoring Words

- [ignoreWord:](uitextchecker/ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [ignoredWords](uitextchecker/ignoredwords.md): Returns the words that the text checker ignores when spell-checking.
- [learnWord:](uitextchecker/learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [unlearnWord:](uitextchecker/unlearnword%28__%29.md): Tells the text checker to unlearn the specified word.
- [hasLearnedWord:](uitextchecker/haslearnedword%28__%29.md): Returns whether the text checker has learned the specified word.

### Getting the Available Languages

- [availableLanguages](uitextchecker/availablelanguages.md): Returns the languages that the text checker’s class can perform spell-checking for.

### Instance Methods

- [ignoreGrammarRange:inSentence:](uitextchecker/ignoregrammarrange%28__insentence_%29.md)
- [requestGrammarCheckingOfString:range:waitForAllResults:completionHandler:](uitextchecker/requestgrammarchecking%28of_range_waitforallresults_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
