> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:suggestguessesforword:inlanguage:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:suggestguessesforword:inlanguage:))

# spellServer(\_:suggestGuessesForWord:inLanguage:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, suggestGuessesForWord word: String, inLanguage language: String) -> [String]?
```

## Parameters

- `sender`: The `NSSpellServer` object that sent this message.
- `word`: The misspelled word.
- `language`: The language to use for the guesses.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects indicating possible correct spellings.

## See Also

### Check Grammar and Spelling in Strings

- [spellServer(\_:check:offset:types:options:orthography:wordCount:)](spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer(\_:checkGrammarIn:language:details:)](spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
- [spellServer(\_:findMisspelledWordIn:language:wordCount:countOnly:)](spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

# spellServer:suggestGuessesForWord:inLanguage: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.

## Declaration

```objectivec
- (NSArray<NSString *> *) spellServer:(NSSpellServer *) sender suggestGuessesForWord:(NSString *) word inLanguage:(NSString *) language;
```

## Parameters

- `sender`: The `NSSpellServer` object that sent this message.
- `word`: The misspelled word.
- `language`: The language to use for the guesses.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects indicating possible correct spellings.

## See Also

### Check Grammar and Spelling in Strings

- [spellServer:checkString:offset:types:options:orthography:wordCount:](spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer:checkGrammarInString:language:details:](spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
- [spellServer:findMisspelledWordInString:language:wordCount:countOnly:](spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.
