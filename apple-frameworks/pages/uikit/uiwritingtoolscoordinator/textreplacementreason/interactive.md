> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textreplacementreason/interactive](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textreplacementreason/interactive)

# UIWritingToolsCoordinator.TextReplacementReason.interactive (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to animate the replacement of text in your view.

## Declaration

```swift
case interactive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests an interactive change in your delegate’s `UIWritingToolsCoordinator/Delegate/writingToolsCoordinator(_:replaceRange:inContext:proposedText:reason:animationParameters:completion:)` method, it passes a valid set of animation parameters to that method. Update your view’s text storage and use the provided [UIWritingToolsCoordinator.AnimationParameters](../animationparameters.md) type to create any view-specific animations you need to support the animated replacement of the text.

## See Also

### Getting the reasons

- [UIWritingToolsCoordinator.TextReplacementReason.noninteractive](noninteractive.md): An option to replace the text in your view without animating the change.

# UIWritingToolsCoordinatorTextReplacementReasonInteractive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to animate the replacement of text in your view.

## Declaration

```objectivec
UIWritingToolsCoordinatorTextReplacementReasonInteractive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests an interactive change in your delegate’s `UIWritingToolsCoordinator/Delegate/writingToolsCoordinator(_:replaceRange:inContext:proposedText:reason:animationParameters:completion:)` method, it passes a valid set of animation parameters to that method. Update your view’s text storage and use the provided [UIWritingToolsCoordinatorAnimationParameters](../animationparameters.md) type to create any view-specific animations you need to support the animated replacement of the text.

## See Also

### Getting the reasons

- [UIWritingToolsCoordinatorTextReplacementReasonNoninteractive](noninteractive.md): An option to replace the text in your view without animating the change.
