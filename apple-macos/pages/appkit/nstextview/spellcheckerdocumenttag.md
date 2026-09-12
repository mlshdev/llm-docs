> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/spellcheckerdocumenttag](https://developer.apple.com/documentation/appkit/nstextview/spellcheckerdocumenttag)

# spellCheckerDocumentTag (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A tag identifying the text view’s text as a document for the spell checker server.

## Declaration

```swift
var spellCheckerDocumentTag: Int { get }
```

<a id="Discussion"></a>

## Discussion

The document tag is obtained by sending a [uniqueSpellDocumentTag()](../nsspellchecker/uniquespelldocumenttag%28%29.md) message to the spell server the first time this method is invoked for a particular group of text views. See the [NSSpellChecker](../nsspellchecker.md)and [NSSpellServer](https://developer.apple.com/documentation/foundation/nsspellserver)class specifications for more information on how this tag is used.

## See Also

### Working with the spelling checker

- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [toggleContinuousSpellChecking(\_:)](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [isGrammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking(\_:)](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState(\_:range:)](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

# spellCheckerDocumentTag (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A tag identifying the text view’s text as a document for the spell checker server.

## Declaration

```objectivec
@property (readonly) NSInteger spellCheckerDocumentTag;
```

<a id="Discussion"></a>

## Discussion

The document tag is obtained by sending a [uniqueSpellDocumentTag](../nsspellchecker/uniquespelldocumenttag%28%29.md) message to the spell server the first time this method is invoked for a particular group of text views. See the [NSSpellChecker](../nsspellchecker.md)and [NSSpellServer](https://developer.apple.com/documentation/foundation/nsspellserver)class specifications for more information on how this tag is used.

## See Also

### Working with the spelling checker

- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [toggleContinuousSpellChecking:](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [grammarCheckingEnabled](isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking:](togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState:range:](setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.
