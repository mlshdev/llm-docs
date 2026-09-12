> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/guesses(forwordrange:in:language:inspelldocumentwithtag:)](https://developer.apple.com/documentation/appkit/nsspellchecker/guesses(forwordrange:in:language:inspelldocumentwithtag:))

# guesses(forWordRange:in:language:inSpellDocumentWithTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns an array of possible substitutions for the specified string.

## Declaration

```swift
func guesses(forWordRange range: NSRange, in string: String, language: String?, inSpellDocumentWithTag tag: Int) -> [String]?
```

## Parameters

- `range`: The range of the string to check.
- `string`: The string to guess.
- `language`: The language of the string.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.

<a id="return-value"></a>

## Return Value

An array of strings containing possible replacement words.

## See Also

### Checking Strings for Spelling and Grammar

- [countWords(in:language:)](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpelling(of:startingAt:)](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:)](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.

# guessesForWordRange:inString:language:inSpellDocumentWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns an array of possible substitutions for the specified string.

## Declaration

```objectivec
- (NSArray<NSString *> *) guessesForWordRange:(NSRange) range inString:(NSString *) string language:(NSString *) language inSpellDocumentWithTag:(NSInteger) tag;
```

## Parameters

- `range`: The range of the string to check.
- `string`: The string to guess.
- `language`: The language of the string.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.

<a id="return-value"></a>

## Return Value

An array of strings containing possible replacement words.

## See Also

### Checking Strings for Spelling and Grammar

- [countWordsInString:language:](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpellingOfString:startingAt:](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [guessesForWord:](guessesforword_.md): Deprecated. Returns an array of suggested spellings for the misspelled word.
- [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
