> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textreplacementreason/noninteractive](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textreplacementreason/noninteractive)

# NSWritingToolsCoordinator.TextReplacementReason.noninteractive (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

An option to replace the text in your view without animating the change.

## Declaration

```swift
case noninteractive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests a noninteractive change in your delegate’s [writingToolsCoordinator(\_:replace:in:proposedText:reason:animationParameters:completion:)](../delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md) method, update your view’s text storage without animating the change.

## See Also

### Getting the reasons

- [NSWritingToolsCoordinator.TextReplacementReason.interactive](interactive.md): An option to animate the replacement of text in your view.

# NSWritingToolsCoordinatorTextReplacementReasonNoninteractive (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

An option to replace the text in your view without animating the change.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextReplacementReasonNoninteractive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests a noninteractive change in your delegate’s [writingToolsCoordinator:replaceRange:inContext:proposedText:reason:animationParameters:completion:](../delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md) method, update your view’s text storage without animating the change.

## See Also

### Getting the reasons

- [NSWritingToolsCoordinatorTextReplacementReasonInteractive](interactive.md): An option to animate the replacement of text in your view.
