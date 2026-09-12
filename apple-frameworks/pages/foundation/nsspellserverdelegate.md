> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate](https://developer.apple.com/documentation/foundation/nsspellserverdelegate)

# NSSpellServerDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The optional methods implemented by the delegate of a spell server.

## Declaration

```swift
protocol NSSpellServerDelegate : NSObjectProtocol
```

## Topics

### Check Grammar and Spelling in Strings

- [spellServer(\_:check:offset:types:options:orthography:wordCount:)](nsspellserverdelegate/spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer(\_:suggestGuessesForWord:inLanguage:)](nsspellserverdelegate/spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer(\_:checkGrammarIn:language:details:)](nsspellserverdelegate/spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
- [spellServer(\_:findMisspelledWordIn:language:wordCount:countOnly:)](nsspellserverdelegate/spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

### Managing the Spelling Dictionary

- [spellServer(\_:didForgetWord:inLanguage:)](nsspellserverdelegate/spellserver%28__didforgetword_inlanguage_%29.md): Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.
- [spellServer(\_:didLearnWord:inLanguage:)](nsspellserverdelegate/spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer(\_:suggestCompletionsForPartialWordRange:in:language:)](nsspellserverdelegate/spellserver%28__suggestcompletionsforpartialwordrange_in_language_%29.md): This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.
- [spellServer(\_:recordResponse:toCorrection:forWord:language:)](nsspellserverdelegate/spellserver%28__recordresponse_tocorrection_forword_language_%29.md): Notifies the spell checker of the users’s response to a correction.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spelling and Grammar

- [NSSpellServer](nsspellserver.md): A server that your app uses to provide a spell checker service to other apps running in the system.

# NSSpellServerDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The optional methods implemented by the delegate of a spell server.

## Declaration

```objectivec
@protocol NSSpellServerDelegate <NSObject>
```

## Topics

### Check Grammar and Spelling in Strings

- [spellServer:checkString:offset:types:options:orthography:wordCount:](nsspellserverdelegate/spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer:suggestGuessesForWord:inLanguage:](nsspellserverdelegate/spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer:checkGrammarInString:language:details:](nsspellserverdelegate/spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
- [spellServer:findMisspelledWordInString:language:wordCount:countOnly:](nsspellserverdelegate/spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

### Managing the Spelling Dictionary

- [spellServer:didForgetWord:inLanguage:](nsspellserverdelegate/spellserver%28__didforgetword_inlanguage_%29.md): Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.
- [spellServer:didLearnWord:inLanguage:](nsspellserverdelegate/spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer:suggestCompletionsForPartialWordRange:inString:language:](nsspellserverdelegate/spellserver%28__suggestcompletionsforpartialwordrange_in_language_%29.md): This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.
- [spellServer:recordResponse:toCorrection:forWord:language:](nsspellserverdelegate/spellserver%28__recordresponse_tocorrection_forword_language_%29.md): Notifies the spell checker of the users’s response to a correction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Spelling and Grammar

- [NSSpellServer](nsspellserver.md): A server that your app uses to provide a spell checker service to other apps running in the system.
