> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/textanimation/anticipate](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/textanimation/anticipate)

# UIWritingToolsCoordinator.TextAnimation.anticipate (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The animation that Writing Tools performs when waiting to receive results from the large language model.

## Declaration

```swift
case anticipate
```

<a id="discussion"></a>

## Discussion

This type of animation applies a visual effect to the text that Writing Tools is evaluating. When preparing for this animation, hide the text that Writing Tools is about to evaluate. In the same space where that text appears, Writing Tools displays a preview image that you provide and animates changes to that image.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinator.TextAnimation.insert](insert.md): The animation that Writing Tools performs when inserting text into your view.
- [UIWritingToolsCoordinator.TextAnimation.remove](remove.md): The animation that Writing Tools performs when removing text from your view.

# UIWritingToolsCoordinatorTextAnimationAnticipate (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The animation that Writing Tools performs when waiting to receive results from the large language model.

## Declaration

```objectivec
UIWritingToolsCoordinatorTextAnimationAnticipate
```

<a id="discussion"></a>

## Discussion

This type of animation applies a visual effect to the text that Writing Tools is evaluating. When preparing for this animation, hide the text that Writing Tools is about to evaluate. In the same space where that text appears, Writing Tools displays a preview image that you provide and animates changes to that image.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinatorTextAnimationInsert](insert.md): The animation that Writing Tools performs when inserting text into your view.
- [UIWritingToolsCoordinatorTextAnimationRemove](remove.md): The animation that Writing Tools performs when removing text from your view.
