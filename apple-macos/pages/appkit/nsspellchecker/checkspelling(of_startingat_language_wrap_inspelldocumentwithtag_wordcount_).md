> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/checkspelling(of:startingat:language:wrap:inspelldocumentwithtag:wordcount:)](https://developer.apple.com/documentation/appkit/nsspellchecker/checkspelling(of:startingat:language:wrap:inspelldocumentwithtag:wordcount:))

# checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the search for a misspelled word in a string starting at specified offset within the string.

## Declaration

```swift
func checkSpelling(of stringToCheck: String, startingAt startingOffset: Int, language: String?, wrap wrapFlag: Bool, inSpellDocumentWithTag tag: Int, wordCount: UnsafeMutablePointer<Int>?) -> NSRange
```

## Parameters

- `stringToCheck`: The string object containing the words to spellcheck.
- `startingOffset`: The offset within `stringToCheck` at which to begin spellchecking.
- `language`: The language of the words in the string. If `language` is `nil`, or if you obtain the value by sending [language()](language%28%29.md) to `self`, the current selection in the Spelling panel’s pop-up menu is used. Do not pass in an empty string for `language`.
- `wrapFlag`: [true](https://developer.apple.com/documentation/swift/true) to indicate that spell checking should continue at the beginning of the string when the end of the string is reached; [false](https://developer.apple.com/documentation/swift/false) to indicate that spellchecking should stop at the end of the document.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.
- `wordCount`: Returns by indirection a count of the words spell-checked up to and including the first error (if any), or -1 if the spell checker fails or does not support word counting. Specify `NULL` if you do not want this word count.

<a id="return-value"></a>

## Return Value

The range of the first misspelled word and optionally (and by reference) the count of words spellchecked in the string in `wordCount`.

## See Also

### Checking Strings for Spelling and Grammar

- [countWords(in:language:)](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpelling(of:startingAt:)](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guesses(forWordRange:in:language:inSpellDocumentWithTag:)](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.

# checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the search for a misspelled word in a string starting at specified offset within the string.

## Declaration

```objectivec
- (NSRange) checkSpellingOfString:(NSString *) stringToCheck startingAt:(NSInteger) startingOffset language:(NSString *) language wrap:(BOOL) wrapFlag inSpellDocumentWithTag:(NSInteger) tag wordCount:(NSInteger *) wordCount;
```

## Parameters

- `stringToCheck`: The string object containing the words to spellcheck.
- `startingOffset`: The offset within `stringToCheck` at which to begin spellchecking.
- `language`: The language of the words in the string. If `language` is `nil`, or if you obtain the value by sending [language](language%28%29.md) to `self`, the current selection in the Spelling panel’s pop-up menu is used. Do not pass in an empty string for `language`.
- `wrapFlag`: [true](https://developer.apple.com/documentation/swift/true) to indicate that spell checking should continue at the beginning of the string when the end of the string is reached; [false](https://developer.apple.com/documentation/swift/false) to indicate that spellchecking should stop at the end of the document.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.
- `wordCount`: Returns by indirection a count of the words spell-checked up to and including the first error (if any), or -1 if the spell checker fails or does not support word counting. Specify `NULL` if you do not want this word count.

<a id="return-value"></a>

## Return Value

The range of the first misspelled word and optionally (and by reference) the count of words spellchecked in the string in `wordCount`.

## See Also

### Checking Strings for Spelling and Grammar

- [countWordsInString:language:](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpellingOfString:startingAt:](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [guessesForWord:](guessesforword_.md): Deprecated. Returns an array of suggested spellings for the misspelled word.
- [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guessesForWordRange:inString:language:inSpellDocumentWithTag:](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.
