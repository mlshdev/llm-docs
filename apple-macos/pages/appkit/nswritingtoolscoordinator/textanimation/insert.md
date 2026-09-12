> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textanimation/insert](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textanimation/insert)

# NSWritingToolsCoordinator.TextAnimation.insert (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

The animation that Writing Tools performs when inserting text into your view.

## Declaration

```swift
case insert
```

<a id="discussion"></a>

## Discussion

This type of animation shows the insertion of text to your view. When preparing for this animation, hide the text in the provided range if you haven’t already. If you support animating the reflow of your view’s text, you can also prepare any other animations you need. Writing Tools uses a preview object you provide to animate the insertion of the text.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinator.TextAnimation.anticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinator.TextAnimation.remove](remove.md): The animation that Writing Tools performs when removing text from your view.
- [NSWritingToolsCoordinator.TextAnimation.anticipateInactive](anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
- [NSWritingToolsCoordinator.TextAnimation.translate](translate.md): The animation effect that Writing Tools performs on text situated after the insertion point.

# NSWritingToolsCoordinatorTextAnimationInsert (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

The animation that Writing Tools performs when inserting text into your view.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextAnimationInsert
```

<a id="discussion"></a>

## Discussion

This type of animation shows the insertion of text to your view. When preparing for this animation, hide the text in the provided range if you haven’t already. If you support animating the reflow of your view’s text, you can also prepare any other animations you need. Writing Tools uses a preview object you provide to animate the insertion of the text.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinatorTextAnimationAnticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinatorTextAnimationRemove](remove.md): The animation that Writing Tools performs when removing text from your view.
- [NSWritingToolsCoordinatorTextAnimationAnticipateInactive](anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
- [NSWritingToolsCoordinatorTextAnimationTranslate](translate.md): The animation effect that Writing Tools performs on text situated after the insertion point.
