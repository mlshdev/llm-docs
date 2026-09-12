> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/togglegrammarchecking(_:)](https://developer.apple.com/documentation/appkit/nstextview/togglegrammarchecking(_:))

# toggleGrammarChecking(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Changes the state of grammar checking from enabled to disabled and vice versa.

## Declaration

```swift
func toggleGrammarChecking(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message; may be `nil`.

## See Also

### Working with the spelling checker

- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking(\_:)](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [isGrammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [setSpellingState(\_:range:)](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

# toggleGrammarChecking: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Changes the state of grammar checking from enabled to disabled and vice versa.

## Declaration

```objectivec
- (void) toggleGrammarChecking:(id) sender;
```

## Parameters

- `sender`: The control sending the message; may be `nil`.

## See Also

### Working with the spelling checker

- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking:](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [grammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [setSpellingState:range:](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.
