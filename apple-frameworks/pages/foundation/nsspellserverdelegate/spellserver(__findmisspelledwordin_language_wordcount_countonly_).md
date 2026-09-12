> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:findmisspelledwordin:language:wordcount:countonly:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:findmisspelledwordin:language:wordcount:countonly:))

# spellServer(\_:findMisspelledWordIn:language:wordCount:countOnly:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, findMisspelledWordIn stringToCheck: String, language: String, wordCount: UnsafeMutablePointer<Int>, countOnly: Bool) -> NSRange
```

## Parameters

- `sender`: The `NSSpellServer` object that sent this message.
- `stringToCheck`: The string to search for the misspelled word.
- `language`: The language to use for the search.
- `wordCount`: On output, returns by reference the number of words from the beginning of the string object until the misspelled word (or the end of string).
- `countOnly`: If [true](https://developer.apple.com/documentation/swift/true), the method only counts the words in the string object and does not spell checking.

<a id="return-value"></a>

## Return Value

The range of the misspelled word within the given string.

<a id="Discussion"></a>

## Discussion

Send [isWord(inUserDictionaries:caseSensitive:)](../nsspellserver/isword%28inuserdictionaries_casesensitive_%29.md) to the spelling server to determine if the word exists in the user’s language dictionaries.

## See Also

### Check Grammar and Spelling in Strings

- [spellServer(\_:check:offset:types:options:orthography:wordCount:)](spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer(\_:suggestGuessesForWord:inLanguage:)](spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer(\_:checkGrammarIn:language:details:)](spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.

# spellServer:findMisspelledWordInString:language:wordCount:countOnly: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

## Declaration

```objectivec
- (NSRange) spellServer:(NSSpellServer *) sender findMisspelledWordInString:(NSString *) stringToCheck language:(NSString *) language wordCount:(NSInteger *) wordCount countOnly:(BOOL) countOnly;
```

## Parameters

- `sender`: The `NSSpellServer` object that sent this message.
- `stringToCheck`: The string to search for the misspelled word.
- `language`: The language to use for the search.
- `wordCount`: On output, returns by reference the number of words from the beginning of the string object until the misspelled word (or the end of string).
- `countOnly`: If [true](https://developer.apple.com/documentation/swift/true), the method only counts the words in the string object and does not spell checking.

<a id="return-value"></a>

## Return Value

The range of the misspelled word within the given string.

<a id="Discussion"></a>

## Discussion

Send [isWordInUserDictionaries:caseSensitive:](../nsspellserver/isword%28inuserdictionaries_casesensitive_%29.md) to the spelling server to determine if the word exists in the user’s language dictionaries.

## See Also

### Check Grammar and Spelling in Strings

- [spellServer:checkString:offset:types:options:orthography:wordCount:](spellserver%28__check_offset_types_options_orthography_wordcount_%29.md): Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.
- [spellServer:suggestGuessesForWord:inLanguage:](spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer:checkGrammarInString:language:details:](spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
