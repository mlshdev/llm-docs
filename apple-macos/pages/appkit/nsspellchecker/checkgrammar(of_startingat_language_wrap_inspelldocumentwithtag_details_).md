> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/checkgrammar(of:startingat:language:wrap:inspelldocumentwithtag:details:)](https://developer.apple.com/documentation/appkit/nsspellchecker/checkgrammar(of:startingat:language:wrap:inspelldocumentwithtag:details:))

# checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initiates a grammatical analysis of a given string.

## Declaration

```swift
func checkGrammar(of stringToCheck: String, startingAt startingOffset: Int, language: String?, wrap wrapFlag: Bool, inSpellDocumentWithTag tag: Int, details: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> NSRange
```

## Parameters

- `stringToCheck`: String to analyze.
- `startingOffset`: Location within `string` at which to start the analysis.
- `language`: Language use in `string`. When `nil`, the language selected in the Spelling panel is used.
- `wrapFlag`: [true](https://developer.apple.com/documentation/swift/true) to specify that the analysis continue to the beginning of string when the end is reached.

  [false](https://developer.apple.com/documentation/swift/false) to have the analysis stop at the end of string.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.
- `details`: On output, dictionaries describing grammar-analysis details within the flagged grammatical unit. See the [NSSpellServer](https://developer.apple.com/documentation/foundation/nsspellserver) class for information about these dictionaries.

<a id="return-value"></a>

## Return Value

Location of the first flagged grammatical unit.

## See Also

### Checking Strings for Spelling and Grammar

- [countWords(in:language:)](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpelling(of:startingAt:)](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:)](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guesses(forWordRange:in:language:inSpellDocumentWithTag:)](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.

# checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initiates a grammatical analysis of a given string.

## Declaration

```objectivec
- (NSRange) checkGrammarOfString:(NSString *) stringToCheck startingAt:(NSInteger) startingOffset language:(NSString *) language wrap:(BOOL) wrapFlag inSpellDocumentWithTag:(NSInteger) tag details:(NSArray<NSDictionary<NSString *,id> *> **) details;
```

## Parameters

- `stringToCheck`: String to analyze.
- `startingOffset`: Location within `string` at which to start the analysis.
- `language`: Language use in `string`. When `nil`, the language selected in the Spelling panel is used.
- `wrapFlag`: [true](https://developer.apple.com/documentation/swift/true) to specify that the analysis continue to the beginning of string when the end is reached.

  [false](https://developer.apple.com/documentation/swift/false) to have the analysis stop at the end of string.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.
- `details`: On output, dictionaries describing grammar-analysis details within the flagged grammatical unit. See the [NSSpellServer](https://developer.apple.com/documentation/foundation/nsspellserver) class for information about these dictionaries.

<a id="return-value"></a>

## Return Value

Location of the first flagged grammatical unit.

## See Also

### Checking Strings for Spelling and Grammar

- [countWordsInString:language:](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpellingOfString:startingAt:](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [guessesForWord:](guessesforword_.md): Deprecated. Returns an array of suggested spellings for the misspelled word.
- [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guessesForWordRange:inString:language:inSpellDocumentWithTag:](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.
