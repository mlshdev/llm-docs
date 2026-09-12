> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/isinteractive](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/isinteractive)

# isInteractive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition is currently interactive.

## Declaration

```swift
var isInteractive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A transition is interactive only if the view controller’s delegate provides a corresponding interactive animator object.

Interactive transitions are drive by user-generated events. One common scenario is to use a gesture recognizer to report on the current progress of the animation. The gesture recognizer calls methods of this context object that indicate the completion percentage of the transition or indicate that the transition was canceled or completed by the user.

## See Also

### Getting the transition behaviors

- [isAnimated](isanimated.md): A Boolean value indicating whether the transition should be animated.
- [presentationStyle](presentationstyle.md): Returns the presentation style for the view controller transition.

# interactive (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the transition is currently interactive.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInteractive) BOOL interactive;
```

<a id="Discussion"></a>

## Discussion

A transition is interactive only if the view controller’s delegate provides a corresponding interactive animator object.

Interactive transitions are drive by user-generated events. One common scenario is to use a gesture recognizer to report on the current progress of the animation. The gesture recognizer calls methods of this context object that indicate the completion percentage of the transition or indicate that the transition was canceled or completed by the user.

## See Also

### Getting the transition behaviors

- [animated](isanimated.md): A Boolean value indicating whether the transition should be animated.
- [presentationStyle](presentationstyle.md): Returns the presentation style for the view controller transition.
