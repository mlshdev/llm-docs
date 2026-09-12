> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/togglecontinuousspellchecking(_:)](https://developer.apple.com/documentation/appkit/nstextview/togglecontinuousspellchecking(_:))

# toggleContinuousSpellChecking(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Toggles whether continuous spell checking is enabled for the receiver.

## Declaration

```swift
func toggleContinuousSpellChecking(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message; may be `nil`.

## See Also

### Working with the spelling checker

- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [isGrammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking(\_:)](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState(\_:range:)](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

# toggleContinuousSpellChecking: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Toggles whether continuous spell checking is enabled for the receiver.

## Declaration

```objectivec
- (void) toggleContinuousSpellChecking:(id) sender;
```

## Parameters

- `sender`: The control sending the message; may be `nil`.

## See Also

### Working with the spelling checker

- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [grammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking:](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState:range:](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.
