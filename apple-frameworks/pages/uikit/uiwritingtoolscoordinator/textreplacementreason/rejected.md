> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textreplacementreason/rejected](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textreplacementreason/rejected)

# UIWritingToolsCoordinator.TextReplacementReason.rejected (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An option to replace the text in your view when a grammar suggestion is rejected.

## Declaration

```swift
case rejected
```

<a id="discussion"></a>

## Discussion

When the user interacts with a grammar issue and the UI is shown, and the option to ignore a suggestion is chosen, this reason will be used. Update your view’s text storage without animating the change. In addition, use `ignoreGrammarRange` on [UITextChecker](../../uitextchecker.md) to make sure that the suggestion will continue to be ignored.

# UIWritingToolsCoordinatorTextReplacementReasonRejected (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An option to replace the text in your view when a grammar suggestion is rejected.

## Declaration

```objectivec
UIWritingToolsCoordinatorTextReplacementReasonRejected
```

<a id="discussion"></a>

## Discussion

When the user interacts with a grammar issue and the UI is shown, and the option to ignore a suggestion is chosen, this reason will be used. Update your view’s text storage without animating the change. In addition, use `ignoreGrammarRange` on [UITextChecker](../../uitextchecker.md) to make sure that the suggestion will continue to be ignored.
