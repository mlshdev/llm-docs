> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition/zoomoptions/interactivedismissshouldbegin](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition/zoomoptions/interactivedismissshouldbegin)

# interactiveDismissShouldBegin (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A closure that determines whether an interactive dismissal can begin.

## Declaration

```swift
var interactiveDismissShouldBegin: ((UIViewController.Transition.ZoomOptions.InteractionContext) -> Bool)? { get set }
```

## See Also

### Accessing the animation state

- [UIViewController.Transition.ZoomOptions.InteractionContext](interactioncontext.md): Data you can use to determine whether an interactive dismissal can begin.

# interactiveDismissShouldBegin (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A closure that determines whether an interactive dismissal can begin.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) BOOL (^interactiveDismissShouldBegin)(UIZoomTransitionInteractionContext *);
```

## See Also

### Accessing the animation state

- [UIZoomTransitionInteractionContext](interactioncontext.md): Data you can use to determine whether an interactive dismissal can begin.
