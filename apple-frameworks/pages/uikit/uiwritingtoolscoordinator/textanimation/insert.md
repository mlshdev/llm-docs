> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textanimation/insert](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textanimation/insert)

# UIWritingToolsCoordinator.TextAnimation.insert (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

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

- [UIWritingToolsCoordinator.TextAnimation.anticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [UIWritingToolsCoordinator.TextAnimation.remove](remove.md): The animation that Writing Tools performs when removing text from your view.

# UIWritingToolsCoordinatorTextAnimationInsert (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The animation that Writing Tools performs when inserting text into your view.

## Declaration

```objectivec
UIWritingToolsCoordinatorTextAnimationInsert
```

<a id="discussion"></a>

## Discussion

This type of animation shows the insertion of text to your view. When preparing for this animation, hide the text in the provided range if you haven’t already. If you support animating the reflow of your view’s text, you can also prepare any other animations you need. Writing Tools uses a preview object you provide to animate the insertion of the text.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinatorTextAnimationAnticipate](anticipate.md): The animation that Writing Tools performs when waiting to receive results from the large language model.
- [UIWritingToolsCoordinatorTextAnimationRemove](remove.md): The animation that Writing Tools performs when removing text from your view.
