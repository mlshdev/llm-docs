> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:willanimateliftwith:session:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:willanimateliftwith:session:))

# dragInteraction(\_:willAnimateLiftWith:session:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the system’s lift animation is about to start.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, willAnimateLiftWith animator: any UIDragAnimating, session: any UIDragSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `animator`: The animator that provides custom animations to run alongside the system’s lift animation. You can also use it to add a completion block that runs after the animations have finished.
- `session`: The current drag session.

<a id="Discussion"></a>

## Discussion

To add a custom animation block that runs during the lift animation, pass the block to the animator’s [addAnimations(\_:)](../uidraganimating/addanimations%28__%29.md) method.

To add a completion block that runs after the lift animation has finished, pass the block to the animator’s [addCompletion(\_:)](../uidraganimating/addcompletion%28__%29.md) method.

## See Also

### Animating the drag behaviors

- [dragInteraction(\_:item:willAnimateCancelWith:)](draginteraction%28__item_willanimatecancelwith_%29.md): Tells the delegate the system’s cancellation animation is about to start.

# dragInteraction:willAnimateLiftWithAnimator:session: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the system’s lift animation is about to start.

## Declaration

```objectivec
- (void) dragInteraction:(UIDragInteraction *) interaction willAnimateLiftWithAnimator:(id<UIDragAnimating>) animator session:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `animator`: The animator that provides custom animations to run alongside the system’s lift animation. You can also use it to add a completion block that runs after the animations have finished.
- `session`: The current drag session.

<a id="Discussion"></a>

## Discussion

To add a custom animation block that runs during the lift animation, pass the block to the animator’s [addAnimations:](../uidraganimating/addanimations%28__%29.md) method.

To add a completion block that runs after the lift animation has finished, pass the block to the animator’s [addCompletion:](../uidraganimating/addcompletion%28__%29.md) method.

## See Also

### Animating the drag behaviors

- [dragInteraction:item:willAnimateCancelWithAnimator:](draginteraction%28__item_willanimatecancelwith_%29.md): Tells the delegate the system’s cancellation animation is about to start.
