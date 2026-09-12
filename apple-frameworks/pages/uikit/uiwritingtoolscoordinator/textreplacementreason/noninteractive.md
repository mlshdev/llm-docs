> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textreplacementreason/noninteractive](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textreplacementreason/noninteractive)

# UIWritingToolsCoordinator.TextReplacementReason.noninteractive (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to replace the text in your view without animating the change.

## Declaration

```swift
case noninteractive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests a noninteractive change in your delegate’s `UIWritingToolsCoordinator/Delegate/writingToolsCoordinator(_:replaceRange:inContext:proposedText:reason:animationParameters:completion:)` method, update your view’s text storage without animating the change.

## See Also

### Getting the reasons

- [UIWritingToolsCoordinator.TextReplacementReason.interactive](interactive.md): An option to animate the replacement of text in your view.

# UIWritingToolsCoordinatorTextReplacementReasonNoninteractive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to replace the text in your view without animating the change.

## Declaration

```objectivec
UIWritingToolsCoordinatorTextReplacementReasonNoninteractive
```

<a id="discussion"></a>

## Discussion

When Writing Tools requests a noninteractive change in your delegate’s `UIWritingToolsCoordinator/Delegate/writingToolsCoordinator(_:replaceRange:inContext:proposedText:reason:animationParameters:completion:)` method, update your view’s text storage without animating the change.

## See Also

### Getting the reasons

- [UIWritingToolsCoordinatorTextReplacementReasonInteractive](interactive.md): An option to animate the replacement of text in your view.
