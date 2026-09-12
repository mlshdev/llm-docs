> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textanimation/remove](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textanimation/remove)

# NSWritingToolsCoordinator.TextAnimation.remove (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

The animation that Writing Tools performs when removing text from your view.

## Declaration

```swift
case remove
```

<a id="discussion"></a>

## Discussion

This type of animation shows the removal of text from your view. When preparing for this animation, hide the text in the provided range if you haven’t already. If you support animating the reflow of your view’s text, you can also prepare any other animations you need. Writing Tools uses a preview object you provide to animate the removal of the text.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinator.TextAnimation.anticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinator.TextAnimation.insert](insert.md): The animation that Writing Tools performs when inserting text into your view.
- [NSWritingToolsCoordinator.TextAnimation.anticipateInactive](anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
- [NSWritingToolsCoordinator.TextAnimation.translate](translate.md): The animation effect that Writing Tools performs on text situated after the insertion point.

# NSWritingToolsCoordinatorTextAnimationRemove (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

The animation that Writing Tools performs when removing text from your view.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextAnimationRemove
```

<a id="discussion"></a>

## Discussion

This type of animation shows the removal of text from your view. When preparing for this animation, hide the text in the provided range if you haven’t already. If you support animating the reflow of your view’s text, you can also prepare any other animations you need. Writing Tools uses a preview object you provide to animate the removal of the text.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinatorTextAnimationAnticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinatorTextAnimationInsert](insert.md): The animation that Writing Tools performs when inserting text into your view.
- [NSWritingToolsCoordinatorTextAnimationAnticipateInactive](anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
- [NSWritingToolsCoordinatorTextAnimationTranslate](translate.md): The animation effect that Writing Tools performs on text situated after the insertion point.
