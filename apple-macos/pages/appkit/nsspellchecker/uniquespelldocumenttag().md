> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/uniquespelldocumenttag()](https://developer.apple.com/documentation/appkit/nsspellchecker/uniquespelldocumenttag())

# uniqueSpellDocumentTag() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a guaranteed unique tag to use as the spell-document tag for a document.

## Declaration

```swift
class func uniqueSpellDocumentTag() -> Int
```

<a id="return-value"></a>

## Return Value

Returns a unique tag to identified this spell checked object.

<a id="Discussion"></a>

## Discussion

Use this method to generate tags to avoid collisions with other objects that can be spell checked.

## See Also

### Managing the Spell-Checking Process

- [closeSpellDocument(withTag:)](closespelldocument%28withtag_%29.md): Notifies the receiver that the user has finished with the tagged document.
- [ignoreWord(\_:inSpellDocumentWithTag:)](ignoreword%28__inspelldocumentwithtag_%29.md): Instructs the spell checker to ignore all future occurrences of `wordToIgnore` in the document identified by `tag`.
- [ignoredWords(inSpellDocumentWithTag:)](ignoredwords%28inspelldocumentwithtag_%29.md): Returns the array of ignored words for a document identified by `tag`.
- [setIgnoredWords(\_:inSpellDocumentWithTag:)](setignoredwords%28__inspelldocumentwithtag_%29.md): Initializes the ignored-words document (a dictionary identified by `tag` with `someWords`), an array of words to ignore.
- [setWordFieldStringValue(\_:)](setwordfieldstringvalue%28__%29.md): Sets the string that appears in the misspelled word field, using the string object `aString`.
- [updateSpellingPanel(withMisspelledWord:)](updatespellingpanel%28withmisspelledword_%29.md): Causes the spell checker to update the Spelling panel’s misspelled-word field to reflect `word`.
- [completions(forPartialWordRange:in:language:inSpellDocumentWithTag:)](completions%28forpartialwordrange_in_language_inspelldocumentwithtag_%29.md): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.
- [hasLearnedWord(\_:)](haslearnedword%28__%29.md): Indicates whether the spell checker has learned a given word.
- [unlearnWord(\_:)](unlearnword%28__%29.md): Tells the spell checker to unlearn a given word.
- [learnWord(\_:)](learnword%28__%29.md): Adds the word to the spell checker dictionary.
- [userQuotesArray(forLanguage:)](userquotesarray%28forlanguage_%29.md): Returns the default values for quote replacement.
- [userReplacementsDictionary](userreplacementsdictionary.md): Returns the dictionary used when replacing words.

# uniqueSpellDocumentTag (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a guaranteed unique tag to use as the spell-document tag for a document.

## Declaration

```objectivec
+ (NSInteger) uniqueSpellDocumentTag;
```

<a id="return-value"></a>

## Return Value

Returns a unique tag to identified this spell checked object.

<a id="Discussion"></a>

## Discussion

Use this method to generate tags to avoid collisions with other objects that can be spell checked.

## See Also

### Managing the Spell-Checking Process

- [closeSpellDocumentWithTag:](closespelldocument%28withtag_%29.md): Notifies the receiver that the user has finished with the tagged document.
- [ignoreWord:inSpellDocumentWithTag:](ignoreword%28__inspelldocumentwithtag_%29.md): Instructs the spell checker to ignore all future occurrences of `wordToIgnore` in the document identified by `tag`.
- [ignoredWordsInSpellDocumentWithTag:](ignoredwords%28inspelldocumentwithtag_%29.md): Returns the array of ignored words for a document identified by `tag`.
- [setIgnoredWords:inSpellDocumentWithTag:](setignoredwords%28__inspelldocumentwithtag_%29.md): Initializes the ignored-words document (a dictionary identified by `tag` with `someWords`), an array of words to ignore.
- [setWordFieldStringValue:](setwordfieldstringvalue%28__%29.md): Sets the string that appears in the misspelled word field, using the string object `aString`.
- [updateSpellingPanelWithMisspelledWord:](updatespellingpanel%28withmisspelledword_%29.md): Causes the spell checker to update the Spelling panel’s misspelled-word field to reflect `word`.
- [completionsForPartialWordRange:inString:language:inSpellDocumentWithTag:](completions%28forpartialwordrange_in_language_inspelldocumentwithtag_%29.md): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.
- [hasLearnedWord:](haslearnedword%28__%29.md): Indicates whether the spell checker has learned a given word.
- [unlearnWord:](unlearnword%28__%29.md): Tells the spell checker to unlearn a given word.
- [forgetWord:](forgetword_.md): Deprecated. Remove this word from the spelling dictionary.
- [learnWord:](learnword%28__%29.md): Adds the word to the spell checker dictionary.
- [userQuotesArrayForLanguage:](userquotesarray%28forlanguage_%29.md): Returns the default values for quote replacement.
- [userReplacementsDictionary](userreplacementsdictionary.md): Returns the dictionary used when replacing words.
