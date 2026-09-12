> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:checkgrammarin:language:details:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:checkgrammarin:language:details:))

# spellServer(\_:checkGrammarIn:language:details:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Gives the delegate the opportunity to customize the grammatical analysis of a given string.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, checkGrammarIn stringToCheck: String, language: String?, details: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> NSRange
```

## Parameters

- `sender`: Spell server satisfying a grammatical analysis request.
- `stringToCheck`: String to analyze.
- `language`: Language use in `string`. When `nil`, the language selected in the Spelling panel is used.
- `details`: On output, dictionaries describing grammar-analysis details within the flagged grammatical unit. See the [NSSpellServer](../nsspellserver.md) class for information about these dictionaries.

<a id="return-value"></a>

## Return Value

Location of the first flagged grammatical unit within `string`.

## See Also

### Check Grammar and Spelling in Strings

- [spellServer(\_:check:offset:types:options:orthography:wordCount:)](spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer(\_:suggestGuessesForWord:inLanguage:)](spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer(\_:findMisspelledWordIn:language:wordCount:countOnly:)](spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

# spellServer:checkGrammarInString:language:details: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Gives the delegate the opportunity to customize the grammatical analysis of a given string.

## Declaration

```objectivec
- (NSRange) spellServer:(NSSpellServer *) sender checkGrammarInString:(NSString *) stringToCheck language:(NSString *) language details:(NSArray<NSDictionary<NSString *,id> *> **) details;
```

## Parameters

- `sender`: Spell server satisfying a grammatical analysis request.
- `stringToCheck`: String to analyze.
- `language`: Language use in `string`. When `nil`, the language selected in the Spelling panel is used.
- `details`: On output, dictionaries describing grammar-analysis details within the flagged grammatical unit. See the [NSSpellServer](../nsspellserver.md) class for information about these dictionaries.

<a id="return-value"></a>

## Return Value

Location of the first flagged grammatical unit within `string`.

## See Also

### Check Grammar and Spelling in Strings

- [spellServer:checkString:offset:types:options:orthography:wordCount:](spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer:suggestGuessesForWord:inLanguage:](spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer:findMisspelledWordInString:language:wordCount:countOnly:](spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.
