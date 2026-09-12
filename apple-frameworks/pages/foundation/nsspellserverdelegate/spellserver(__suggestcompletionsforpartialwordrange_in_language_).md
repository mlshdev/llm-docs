> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:suggestcompletionsforpartialwordrange:in:language:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:suggestcompletionsforpartialwordrange:in:language:))

# spellServer(\_:suggestCompletionsForPartialWordRange:in:language:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, suggestCompletionsForPartialWordRange range: NSRange, in string: String, language: String) -> [String]?
```

## Parameters

- `sender`: The `NSSpellServer` object that sent this message.
- `range`: The range of the partially completed word.
- `string`: The string containing the partial word range.
- `language`: The language to use for the completion.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects indicating possible completions.

## See Also

### Related Documentation

- [completions(forPartialWordRange:in:language:inSpellDocumentWithTag:)](https://developer.apple.com/documentation/appkit/nsspellchecker/completions%28forpartialwordrange:in:language:inspelldocumentwithtag:%29): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.

### Managing the Spelling Dictionary

- [spellServer(\_:didForgetWord:inLanguage:)](spellserver%28__didforgetword_inlanguage_%29.md): Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.
- [spellServer(\_:didLearnWord:inLanguage:)](spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer(\_:recordResponse:toCorrection:forWord:language:)](spellserver%28__recordresponse_tocorrection_forword_language_%29.md): Notifies the spell checker of the users’s response to a correction.

# spellServer:suggestCompletionsForPartialWordRange:inString:language: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.

## Declaration

```objectivec
- (NSArray<NSString *> *) spellServer:(NSSpellServer *) sender suggestCompletionsForPartialWordRange:(NSRange) range inString:(NSString *) string language:(NSString *) language;
```

## Parameters

- `sender`: The `NSSpellServer` object that sent this message.
- `range`: The range of the partially completed word.
- `string`: The string containing the partial word range.
- `language`: The language to use for the completion.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects indicating possible completions.

## See Also

### Related Documentation

- [completionsForPartialWordRange:inString:language:inSpellDocumentWithTag:](https://developer.apple.com/documentation/appkit/nsspellchecker/completions%28forpartialwordrange:in:language:inspelldocumentwithtag:%29): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.

### Managing the Spelling Dictionary

- [spellServer:didForgetWord:inLanguage:](spellserver%28__didforgetword_inlanguage_%29.md): Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.
- [spellServer:didLearnWord:inLanguage:](spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer:recordResponse:toCorrection:forWord:language:](spellserver%28__recordresponse_tocorrection_forword_language_%29.md): Notifies the spell checker of the users’s response to a correction.
