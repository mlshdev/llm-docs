> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:check:offset:types:options:orthography:wordcount:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:check:offset:types:options:orthography:wordcount:))

# spellServer(\_:check:offset:types:options:orthography:wordCount:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, check stringToCheck: String, offset: Int, types checkingTypes: NSTextCheckingTypes, options: [String : Any]? = nil, orthography: NSOrthography?, wordCount: UnsafeMutablePointer<Int>) -> [NSTextCheckingResult]?
```

## Parameters

- `sender`: Spell server making the analysis request.
- `stringToCheck`: String to analyze.
- `offset`: The offset in the string.
- `checkingTypes`: The text checking types to perform.
- `options`: A dictionary defining the actions to be taken while checking this string. See Constants in [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) for the possible keys.
- `orthography`: The identified orthography of `stringToCheck`. See [NSOrthography](../nsorthography.md) for more information.
- `wordCount`: On output, returns by-reference the number of words from the beginning of the string object until the misspelled word (or the end of string).

<a id="return-value"></a>

## Return Value

An array of NSTextCheckingResult instances of the spelling, grammar, or correction types, depending on the `checkingTypes` requested.

<a id="Discussion"></a>

## Discussion

This method is optional, but if implemented it will be called during the course of unified text checking via the `NSSpellChecker` [checkSpelling(of:startingAt:)](https://developer.apple.com/documentation/appkit/nsspellchecker/checkspelling%28of:startingat:%29) and [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](https://developer.apple.com/documentation/appkit/nsspellchecker/requestchecking%28of:range:types:options:inspelldocumentwithtag:completionhandler:%29) methods.  This allows spelling and grammar checking to be performed simultaneously, which can be significantly more efficient, and allows the delegate to return autocorrection results as well.

If this method is not implemented, then unified text checking will call the separate spelling and grammar checking methods instead.

This method may be called repeatedly with strings representing different subranges of the string that was originally requested to be checked; the offset argument represents the offset of the portion passed in to this method within that original string, and should be added to the origin of the range in any [NSTextCheckingResult](../nstextcheckingresult.md) returned.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)

### Check Grammar and Spelling in Strings

- [spellServer(\_:suggestGuessesForWord:inLanguage:)](spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer(\_:checkGrammarIn:language:details:)](spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
- [spellServer(\_:findMisspelledWordIn:language:wordCount:countOnly:)](spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.

# spellServer:checkString:offset:types:options:orthography:wordCount: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Gives the delegate the opportunity to analyze both the spelling and grammar simultaneously, which is more efficient.

## Declaration

```objectivec
- (NSArray<NSTextCheckingResult *> *) spellServer:(NSSpellServer *) sender checkString:(NSString *) stringToCheck offset:(NSUInteger) offset types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options orthography:(NSOrthography *) orthography wordCount:(NSInteger *) wordCount;
```

## Parameters

- `sender`: Spell server making the analysis request.
- `stringToCheck`: String to analyze.
- `offset`: The offset in the string.
- `checkingTypes`: The text checking types to perform.
- `options`: A dictionary defining the actions to be taken while checking this string. See Constants in [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) for the possible keys.
- `orthography`: The identified orthography of `stringToCheck`. See [NSOrthography](../nsorthography.md) for more information.
- `wordCount`: On output, returns by-reference the number of words from the beginning of the string object until the misspelled word (or the end of string).

<a id="return-value"></a>

## Return Value

An array of NSTextCheckingResult instances of the spelling, grammar, or correction types, depending on the `checkingTypes` requested.

<a id="Discussion"></a>

## Discussion

This method is optional, but if implemented it will be called during the course of unified text checking via the `NSSpellChecker` [checkSpellingOfString:startingAt:](https://developer.apple.com/documentation/appkit/nsspellchecker/checkspelling%28of:startingat:%29) and [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](https://developer.apple.com/documentation/appkit/nsspellchecker/requestchecking%28of:range:types:options:inspelldocumentwithtag:completionhandler:%29) methods.  This allows spelling and grammar checking to be performed simultaneously, which can be significantly more efficient, and allows the delegate to return autocorrection results as well.

If this method is not implemented, then unified text checking will call the separate spelling and grammar checking methods instead.

This method may be called repeatedly with strings representing different subranges of the string that was originally requested to be checked; the offset argument represents the offset of the portion passed in to this method within that original string, and should be added to the origin of the range in any [NSTextCheckingResult](../nstextcheckingresult.md) returned.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)

### Check Grammar and Spelling in Strings

- [spellServer:suggestGuessesForWord:inLanguage:](spellserver%28__suggestguessesforword_inlanguage_%29.md): Gives the delegate the opportunity to suggest guesses to the sender for the correct spelling of the given misspelled word in the specified language.
- [spellServer:checkGrammarInString:language:details:](spellserver%28__checkgrammarin_language_details_%29.md): Gives the delegate the opportunity to customize the grammatical analysis of a given string.
- [spellServer:findMisspelledWordInString:language:wordCount:countOnly:](spellserver%28__findmisspelledwordin_language_wordcount_countonly_%29.md): Asks the delegate to search for a misspelled word in a given string, using the specified language, and marking the first misspelled word found by returning its range within the string.
