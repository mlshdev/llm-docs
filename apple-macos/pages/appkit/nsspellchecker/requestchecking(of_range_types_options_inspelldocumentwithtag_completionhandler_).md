> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/requestchecking(of:range:types:options:inspelldocumentwithtag:completionhandler:)](https://developer.apple.com/documentation/appkit/nsspellchecker/requestchecking(of:range:types:options:inspelldocumentwithtag:completionhandler:))

# requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Requests that the string be checked in the background.

## Declaration

```swift
func requestChecking(of stringToCheck: String, range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any]? = nil, inSpellDocumentWithTag tag: Int, completionHandler: ((Int, [NSTextCheckingResult], NSOrthography, Int) -> Void)? = nil) -> Int
```

## Parameters

- `stringToCheck`: The string to check.
- `range`: The range of the string to check.
- `checkingTypes`: The type of checking to be performed. The possible constants are listed in [NSTextCheckingResult.CheckingType](https://developer.apple.com/documentation/foundation/nstextcheckingresult/checkingtype) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: The options dictionary specifying the types of checking to perform. See [NSSpellChecker.OptionKey](optionkey.md) for the possible keys and expected values.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.
- `completionHandler`: The completion handler block object will be called (in an arbitrary context) when results are available, with the sequence number and results.

  The block takes four arguments:

  - **sequenceNumber**: A monotonically increasing sequence number.
  - **results**: An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects describing particular items found during checking and their individual ranges, sorted by range origin, then range end, then result type.
  - **orthography**: The orthography of the string.
  - **wordCount**: The number of words in the range of the string.

<a id="return-value"></a>

## Return Value

The return value is a monotonically increasing sequence number that can be used to keep track of requests in flight.

## See Also

### Checking Strings for Spelling and Grammar

- [countWords(in:language:)](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpelling(of:startingAt:)](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:)](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [guesses(forWordRange:in:language:inSpellDocumentWithTag:)](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.

# requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Requests that the string be checked in the background.

## Declaration

```objectivec
- (NSInteger) requestCheckingOfString:(NSString *) stringToCheck range:(NSRange) range types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options inSpellDocumentWithTag:(NSInteger) tag completionHandler:(void (^)(NSInteger sequenceNumber, NSArray<NSTextCheckingResult *> *results, NSOrthography *orthography, NSInteger wordCount)) completionHandler;
```

## Parameters

- `stringToCheck`: The string to check.
- `range`: The range of the string to check.
- `checkingTypes`: The type of checking to be performed. The possible constants are listed in [NSTextCheckingType](https://developer.apple.com/documentation/foundation/nstextcheckingresult/checkingtype) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: The options dictionary specifying the types of checking to perform. See [NSTextCheckingOptionKey](optionkey.md) for the possible keys and expected values.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.
- `completionHandler`: The completion handler block object will be called (in an arbitrary context) when results are available, with the sequence number and results.

  The block takes four arguments:

  - **sequenceNumber**: A monotonically increasing sequence number.
  - **results**: An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects describing particular items found during checking and their individual ranges, sorted by range origin, then range end, then result type.
  - **orthography**: The orthography of the string.
  - **wordCount**: The number of words in the range of the string.

<a id="return-value"></a>

## Return Value

The return value is a monotonically increasing sequence number that can be used to keep track of requests in flight.

## See Also

### Checking Strings for Spelling and Grammar

- [countWordsInString:language:](countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpellingOfString:startingAt:](checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [guessesForWord:](guessesforword_.md): Deprecated. Returns an array of suggested spellings for the misspelled word.
- [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [guessesForWordRange:inString:language:inSpellDocumentWithTag:](guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.
