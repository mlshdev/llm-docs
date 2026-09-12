> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/isgrammarcheckingenabled](https://developer.apple.com/documentation/appkit/nstextview/isgrammarcheckingenabled)

# isGrammarCheckingEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Enables and disables grammar checking.

## Declaration

```swift
var isGrammarCheckingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), grammar checking is enabled; if [false](https://developer.apple.com/documentation/swift/false), it is disabled.

## See Also

### Working with the spelling checker

- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking(\_:)](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [toggleGrammarChecking(\_:)](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState(\_:range:)](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

# grammarCheckingEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Enables and disables grammar checking.

## Declaration

```objectivec
@property (getter=isGrammarCheckingEnabled) BOOL grammarCheckingEnabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), grammar checking is enabled; if [false](https://developer.apple.com/documentation/swift/false), it is disabled.

## See Also

### Working with the spelling checker

- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking:](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [toggleGrammarChecking:](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState:range:](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.
