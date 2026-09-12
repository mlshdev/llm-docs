> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:item:willanimatecancelwith:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:item:willanimatecancelwith:))

# dragInteraction(\_:item:willAnimateCancelWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the system’s cancellation animation is about to start.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, item: UIDragItem, willAnimateCancelWith animator: any UIDragAnimating)
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The current drag item.
- `animator`: The animator that provides custom animations to run alongside the system’s animation. You can also use it to add a completion block that runs after the animations have finished.

<a id="Discussion"></a>

## Discussion

This method is called for each drag item, whether it is visible or not.

To add a custom animation block that runs during the cancellation animation, pass the block to the animator’s [addAnimations(\_:)](../uidraganimating/addanimations%28__%29.md) method.

To add a completion block that runs after the cancellation animation has finished, pass the block to the animator’s [addCompletion(\_:)](../uidraganimating/addcompletion%28__%29.md) method.

## See Also

### Animating the drag behaviors

- [dragInteraction(\_:willAnimateLiftWith:session:)](draginteraction%28__willanimateliftwith_session_%29.md): Tells the delegate the system’s lift animation is about to start.

# dragInteraction:item:willAnimateCancelWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the system’s cancellation animation is about to start.

## Declaration

```objectivec
- (void) dragInteraction:(UIDragInteraction *) interaction item:(UIDragItem *) item willAnimateCancelWithAnimator:(id<UIDragAnimating>) animator;
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The current drag item.
- `animator`: The animator that provides custom animations to run alongside the system’s animation. You can also use it to add a completion block that runs after the animations have finished.

<a id="Discussion"></a>

## Discussion

This method is called for each drag item, whether it is visible or not.

To add a custom animation block that runs during the cancellation animation, pass the block to the animator’s [addAnimations:](../uidraganimating/addanimations%28__%29.md) method.

To add a completion block that runs after the cancellation animation has finished, pass the block to the animator’s [addCompletion:](../uidraganimating/addcompletion%28__%29.md) method.

## See Also

### Animating the drag behaviors

- [dragInteraction:willAnimateLiftWithAnimator:session:](draginteraction%28__willanimateliftwith_session_%29.md): Tells the delegate the system’s lift animation is about to start.
