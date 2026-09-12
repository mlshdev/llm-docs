> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textanimation/translate](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textanimation/translate)

# NSWritingToolsCoordinator.TextAnimation.translate (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

The animation effect that Writing Tools performs on text situated after the insertion point.

## Declaration

```swift
case translate
```

<a id="discussion"></a>

## Discussion

When Writing Tools inserts text at a given location, it creates an animation to make room for the new text. When preparing for this animation, hide the text between the insertion point and the end of your text storage. When finishing the animation, show the text again.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinator.TextAnimation.anticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinator.TextAnimation.insert](insert.md): The animation that Writing Tools performs when inserting text into your view.
- [NSWritingToolsCoordinator.TextAnimation.remove](remove.md): The animation that Writing Tools performs when removing text from your view.
- [NSWritingToolsCoordinator.TextAnimation.anticipateInactive](anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.

# NSWritingToolsCoordinatorTextAnimationTranslate (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

The animation effect that Writing Tools performs on text situated after the insertion point.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextAnimationTranslate
```

<a id="discussion"></a>

## Discussion

When Writing Tools inserts text at a given location, it creates an animation to make room for the new text. When preparing for this animation, hide the text between the insertion point and the end of your text storage. When finishing the animation, show the text again.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinatorTextAnimationAnticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [NSWritingToolsCoordinatorTextAnimationInsert](insert.md): The animation that Writing Tools performs when inserting text into your view.
- [NSWritingToolsCoordinatorTextAnimationRemove](remove.md): The animation that Writing Tools performs when removing text from your view.
- [NSWritingToolsCoordinatorTextAnimationAnticipateInactive](anticipateinactive.md): The animation effect that Writing Tools performs when the view is waiting for results, but the system isn’t actively evaluating the text.
