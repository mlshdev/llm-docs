> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/checkspelling(of:startingat:)](https://developer.apple.com/documentation/appkit/nsspellchecker/checkspelling(of:startingat:))

# checkSpelling(of:startingAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.

## Declaration

```swift
func checkSpelling(of stringToCheck: String, startingAt startingOffset: Int) -> NSRange
```

## Parameters

- `stringToCheck`: The string to spell check.
- `startingOffset`: The offset at which to start checking.

<a id="return-value"></a>

## Return Value

Returns the range of the first misspelled word.

<a id="Discussion"></a>

## Discussion

Wrapping occurs, but no ignored-words dictionary is used.

## See Also

### Checking Strings for Spelling and Grammar

- [countWords(in:language:)](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:)](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guesses(forWordRange:in:language:inSpellDocumentWithTag:)](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.

# checkSpellingOfString:startingAt: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.

## Declaration

```objectivec
- (NSRange) checkSpellingOfString:(NSString *) stringToCheck startingAt:(NSInteger) startingOffset;
```

## Parameters

- `stringToCheck`: The string to spell check.
- `startingOffset`: The offset at which to start checking.

<a id="return-value"></a>

## Return Value

Returns the range of the first misspelled word.

<a id="Discussion"></a>

## Discussion

Wrapping occurs, but no ignored-words dictionary is used.

## See Also

### Checking Strings for Spelling and Grammar

- [countWordsInString:language:](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [guessesForWord:](guessesforword_.md): Deprecated. Returns an array of suggested spellings for the misspelled word.
- [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guessesForWordRange:inString:language:inSpellDocumentWithTag:](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.
