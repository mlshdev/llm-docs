> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/forgetword:](https://developer.apple.com/documentation/appkit/nsspellchecker/forgetword:)

# forgetWord:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Remove this word from the spelling dictionary.

> Use [unlearnWord:](unlearnword%28__%29.md) instead.

## Declaration

```objectivec
- (void) forgetWord:(NSString *) word;
```

## Parameters

- `word`: The word to remove.

## See Also

### Managing the Spell-Checking Process

- [uniqueSpellDocumentTag](uniquespelldocumenttag%28%29.md): Returns a guaranteed unique tag to use as the spell-document tag for a document.
- [closeSpellDocumentWithTag:](closespelldocument%28withtag_%29.md): Notifies the receiver that the user has finished with the tagged document.
- [ignoreWord:inSpellDocumentWithTag:](ignoreword%28__inspelldocumentwithtag_%29.md): Instructs the spell checker to ignore all future occurrences of `wordToIgnore` in the document identified by `tag`.
- [ignoredWordsInSpellDocumentWithTag:](ignoredwords%28inspelldocumentwithtag_%29.md): Returns the array of ignored words for a document identified by `tag`.
- [setIgnoredWords:inSpellDocumentWithTag:](setignoredwords%28__inspelldocumentwithtag_%29.md): Initializes the ignored-words document (a dictionary identified by `tag` with `someWords`), an array of words to ignore.
- [setWordFieldStringValue:](setwordfieldstringvalue%28__%29.md): Sets the string that appears in the misspelled word field, using the string object `aString`.
- [updateSpellingPanelWithMisspelledWord:](updatespellingpanel%28withmisspelledword_%29.md): Causes the spell checker to update the Spelling panel’s misspelled-word field to reflect `word`.
- [completionsForPartialWordRange:inString:language:inSpellDocumentWithTag:](completions%28forpartialwordrange_in_language_inspelldocumentwithtag_%29.md): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.
- [hasLearnedWord:](haslearnedword%28__%29.md): Indicates whether the spell checker has learned a given word.
- [unlearnWord:](unlearnword%28__%29.md): Tells the spell checker to unlearn a given word.
- [learnWord:](learnword%28__%29.md): Adds the word to the spell checker dictionary.
- [userQuotesArrayForLanguage:](userquotesarray%28forlanguage_%29.md): Returns the default values for quote replacement.
- [userReplacementsDictionary](userreplacementsdictionary.md): Returns the dictionary used when replacing words.
