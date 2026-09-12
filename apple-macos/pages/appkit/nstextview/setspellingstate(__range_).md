> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/setspellingstate(_:range:)](https://developer.apple.com/documentation/appkit/nstextview/setspellingstate(_:range:))

# setSpellingState(\_:range:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

## Declaration

```swift
func setSpellingState(_ value: Int, range charRange: NSRange)
```

## Parameters

- `value`: The spelling state value to set. Possible values, for the temporary attribute on the layout manager using the key NSSpellingStateAttributeName, are:

  - [NSSpellingStateSpellingFlag](../nsspellingstate/nsspellingstatespellingflag.md) to highlight spelling issues.
  - [NSSpellingStateGrammarFlag](../nsspellingstate/nsspellingstategrammarflag.md) to highlight grammar issues.
- `charRange`: The character range over which to set the given spelling state.

<a id="Discussion"></a>

## Discussion

May be called or overridden to control setting of spelling and grammar indicators on text, used to highlight portions of the text that are flagged for spelling or grammar issues.

## See Also

### Working with the spelling checker

- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking(\_:)](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [isGrammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking(\_:)](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.

# setSpellingState:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

## Declaration

```objectivec
- (void) setSpellingState:(NSInteger) value range:(NSRange) charRange;
```

## Parameters

- `value`: The spelling state value to set. Possible values, for the temporary attribute on the layout manager using the key NSSpellingStateAttributeName, are:

  - [NSSpellingStateSpellingFlag](../nsspellingstate/nsspellingstatespellingflag.md) to highlight spelling issues.
  - [NSSpellingStateGrammarFlag](../nsspellingstate/nsspellingstategrammarflag.md) to highlight grammar issues.
- `charRange`: The character range over which to set the given spelling state.

<a id="Discussion"></a>

## Discussion

May be called or overridden to control setting of spelling and grammar indicators on text, used to highlight portions of the text that are flagged for spelling or grammar issues.

## See Also

### Working with the spelling checker

- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking:](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [grammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking:](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
