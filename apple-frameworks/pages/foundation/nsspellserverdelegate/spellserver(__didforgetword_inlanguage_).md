> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:didforgetword:inlanguage:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:didforgetword:inlanguage:))

# spellServer(\_:didForgetWord:inLanguage:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, didForgetWord word: String, inLanguage language: String)
```

## Parameters

- `sender`: The `NSSpellServer` object that removed the word.
- `word`: The word that was removed.
- `language`: The language of the removed word.

<a id="Discussion"></a>

## Discussion

If your delegate maintains a similar auxiliary word list, you may wish to edit the list accordingly.

## See Also

### Managing the Spelling Dictionary

- [spellServer(\_:didLearnWord:inLanguage:)](spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer(\_:suggestCompletionsForPartialWordRange:in:language:)](spellserver%28__suggestcompletionsforpartialwordrange_in_language_%29.md): This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.
- [spellServer(\_:recordResponse:toCorrection:forWord:language:)](spellserver%28__recordresponse_tocorrection_forword_language_%29.md): Notifies the spell checker of the users’s response to a correction.

# spellServer:didForgetWord:inLanguage: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.

## Declaration

```objectivec
- (void) spellServer:(NSSpellServer *) sender didForgetWord:(NSString *) word inLanguage:(NSString *) language;
```

## Parameters

- `sender`: The `NSSpellServer` object that removed the word.
- `word`: The word that was removed.
- `language`: The language of the removed word.

<a id="Discussion"></a>

## Discussion

If your delegate maintains a similar auxiliary word list, you may wish to edit the list accordingly.

## See Also

### Managing the Spelling Dictionary

- [spellServer:didLearnWord:inLanguage:](spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer:suggestCompletionsForPartialWordRange:inString:language:](spellserver%28__suggestcompletionsforpartialwordrange_in_language_%29.md): This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.
- [spellServer:recordResponse:toCorrection:forWord:language:](spellserver%28__recordresponse_tocorrection_forword_language_%29.md): Notifies the spell checker of the users’s response to a correction.
