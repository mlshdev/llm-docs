> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textreplacementreason/interactive](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textreplacementreason/interactive)

# NSWritingToolsCoordinator.TextReplacementReason.interactive (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

An option to animate the replacement of text in your view.

## Declaration

```swift
case interactive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests an interactive change in your delegate’s [writingToolsCoordinator(\_:replace:in:proposedText:reason:animationParameters:completion:)](../delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md) method, it passes a valid set of animation parameters to that method. Update your view’s text storage and use the provided [NSWritingToolsCoordinator.AnimationParameters](../animationparameters.md) type to create any view-specific animations you need to support the animated replacement of the text.

## See Also

### Getting the reasons

- [NSWritingToolsCoordinator.TextReplacementReason.noninteractive](noninteractive.md): An option to replace the text in your view without animating the change.

# NSWritingToolsCoordinatorTextReplacementReasonInteractive (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

An option to animate the replacement of text in your view.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextReplacementReasonInteractive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests an interactive change in your delegate’s [writingToolsCoordinator:replaceRange:inContext:proposedText:reason:animationParameters:completion:](../delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md) method, it passes a valid set of animation parameters to that method. Update your view’s text storage and use the provided [NSWritingToolsCoordinatorAnimationParameters](../animationparameters.md) type to create any view-specific animations you need to support the animated replacement of the text.

## See Also

### Getting the reasons

- [NSWritingToolsCoordinatorTextReplacementReasonNoninteractive](noninteractive.md): An option to replace the text in your view without animating the change.
