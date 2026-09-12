> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragdelegate/textdraggableview(_:willanimateliftwith:session:)](https://developer.apple.com/documentation/uikit/uitextdragdelegate/textdraggableview(_:willanimateliftwith:session:))

# textDraggableView(\_:willAnimateLiftWith:session:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the lift animation is about to begin, and gives you a chance to animate additional changes alongside the system animation.

## Declaration

```swift
optional func textDraggableView(_ textDraggableView: any UIView & UITextDraggable, willAnimateLiftWith animator: any UIDragAnimating, session: any UIDragSession)
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `animator`: The animator that you use when adding animations.
- `session`: The drag session of the current drag activity.

<a id="Discussion"></a>

## Discussion

You implement this delegate method when you want to add animations that happen alongside the system animation during the lift activity. To add such an animation, use the animator’s [addAnimations(\_:)](../uidraganimating/addanimations%28__%29.md) method. To add an animation that happens after the system animation has ended, use the animator’s [addCompletion(\_:)](../uidraganimating/addcompletion%28__%29.md) method.

# textDraggableView:willAnimateLiftWithAnimator:session: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the lift animation is about to begin, and gives you a chance to animate additional changes alongside the system animation.

## Declaration

```objectivec
- (void) textDraggableView:(UIView<UITextDraggable> *) textDraggableView willAnimateLiftWithAnimator:(id<UIDragAnimating>) animator session:(id<UIDragSession>) session;
```

## Parameters

- `textDraggableView`: The text view where the drag activity was started.
- `animator`: The animator that you use when adding animations.
- `session`: The drag session of the current drag activity.

<a id="Discussion"></a>

## Discussion

You implement this delegate method when you want to add animations that happen alongside the system animation during the lift activity. To add such an animation, use the animator’s [addAnimations:](../uidraganimating/addanimations%28__%29.md) method. To add an animation that happens after the system animation has ended, use the animator’s [addCompletion:](../uidraganimating/addcompletion%28__%29.md) method.
