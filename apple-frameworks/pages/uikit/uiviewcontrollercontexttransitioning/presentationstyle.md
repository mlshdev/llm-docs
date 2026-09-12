> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/presentationstyle](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/presentationstyle)

# presentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the presentation style for the view controller transition.

## Declaration

```swift
var presentationStyle: UIModalPresentationStyle { get }
```

<a id="return-value"></a>

## Return Value

The presentation style to use when presenting the final view controller.

## See Also

### Getting the transition behaviors

- [isAnimated](isanimated.md): A Boolean value indicating whether the transition should be animated.
- [isInteractive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.

# presentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the presentation style for the view controller transition.

## Declaration

```objectivec
@property (nonatomic, readonly) UIModalPresentationStyle presentationStyle;
```

<a id="return-value"></a>

## Return Value

The presentation style to use when presenting the final view controller.

## See Also

### Getting the transition behaviors

- [animated](isanimated.md): A Boolean value indicating whether the transition should be animated.
- [interactive](isinteractive.md): A Boolean value indicating whether the transition is currently interactive.
