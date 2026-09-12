> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textreplacementreason/rejected](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textreplacementreason/rejected)

# NSWritingToolsCoordinator.TextReplacementReason.rejected (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An option to replace the text in your view when a grammar suggestion is rejected.

## Declaration

```swift
case rejected
```

<a id="discussion"></a>

## Discussion

When the user interacts with a grammar issue and the UI is shown, and the option to ignore a suggestion is chosen, this reason will be used. Update your view’s text storage without animating the change. In addition, use `ignoreGrammarRange` on [NSSpellChecker](../../nsspellchecker.md) to make sure that the suggestion will continue to be ignored.

# NSWritingToolsCoordinatorTextReplacementReasonRejected (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

An option to replace the text in your view when a grammar suggestion is rejected.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextReplacementReasonRejected
```

<a id="discussion"></a>

## Discussion

When the user interacts with a grammar issue and the UI is shown, and the option to ignore a suggestion is chosen, this reason will be used. Update your view’s text storage without animating the change. In addition, use `ignoreGrammarRange` on [NSSpellChecker](../../nsspellchecker.md) to make sure that the suggestion will continue to be ignored.
