> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserverdelegate/spellserver(_:recordresponse:tocorrection:forword:language:)](https://developer.apple.com/documentation/foundation/nsspellserverdelegate/spellserver(_:recordresponse:tocorrection:forword:language:))

# spellServer(\_:recordResponse:toCorrection:forWord:language:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies the spell checker of the users’s response to a correction.

## Declaration

```swift
optional func spellServer(_ sender: NSSpellServer, recordResponse response: Int, toCorrection correction: String, forWord word: String, language: String)
```

## Parameters

- `sender`: The spell server.
- `response`: The user’s response.
- `correction`: The corrected word. This should match the original correction.
- `word`: The original word. This should match the original correction.
- `language`: The language being edited. This should match the original correction.

<a id="Discussion"></a>

## Discussion

When the user accepts, rejects, or edits an autocorrection, the view notifies the [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) class of what happened in the client application, and `NSSpellChecker` then invokes this method, so that it can record that and modify future autocorrection behavior based on what it has learned from the user’s actions.

## See Also

### Managing the Spelling Dictionary

- [spellServer(\_:didForgetWord:inLanguage:)](spellserver%28__didforgetword_inlanguage_%29.md): Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.
- [spellServer(\_:didLearnWord:inLanguage:)](spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer(\_:suggestCompletionsForPartialWordRange:in:language:)](spellserver%28__suggestcompletionsforpartialwordrange_in_language_%29.md): This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.

# spellServer:recordResponse:toCorrection:forWord:language: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies the spell checker of the users’s response to a correction.

## Declaration

```objectivec
- (void) spellServer:(NSSpellServer *) sender recordResponse:(NSUInteger) response toCorrection:(NSString *) correction forWord:(NSString *) word language:(NSString *) language;
```

## Parameters

- `sender`: The spell server.
- `response`: The user’s response.
- `correction`: The corrected word. This should match the original correction.
- `word`: The original word. This should match the original correction.
- `language`: The language being edited. This should match the original correction.

<a id="Discussion"></a>

## Discussion

When the user accepts, rejects, or edits an autocorrection, the view notifies the [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) class of what happened in the client application, and `NSSpellChecker` then invokes this method, so that it can record that and modify future autocorrection behavior based on what it has learned from the user’s actions.

## See Also

### Managing the Spelling Dictionary

- [spellServer:didForgetWord:inLanguage:](spellserver%28__didforgetword_inlanguage_%29.md): Notifies the delegate that the sender has removed the specified word from the user’s list of acceptable words in the specified language.
- [spellServer:didLearnWord:inLanguage:](spellserver%28__didlearnword_inlanguage_%29.md): Notifies the delegate that the sender has added the specified word to the user’s list of acceptable words in the specified language.
- [spellServer:suggestCompletionsForPartialWordRange:inString:language:](spellserver%28__suggestcompletionsforpartialwordrange_in_language_%29.md): This delegate method returns an array of possible word completions from the spell checker, based on a partially completed string and a given range.
