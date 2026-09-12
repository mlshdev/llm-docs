> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/isuserinteractionenabled](https://developer.apple.com/documentation/uikit/uiview/isuserinteractionenabled)

# isUserInteractionEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether user events are ignored and removed from the event queue.

## Declaration

```swift
var isUserInteractionEnabled: Bool { get set }
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)
- [Handling pan gestures](../handling-pan-gestures.md)
- [Handling pinch gestures](../handling-pinch-gestures.md)
- [Handling rotation gestures](../handling-rotation-gestures.md)
- [Handling swipe gestures](../handling-swipe-gestures.md)
- [Handling tap gestures](../handling-tap-gestures.md)

<a id="Discussion"></a>

## Discussion

When set to [false](https://developer.apple.com/documentation/swift/false), touch, press, keyboard, and focus events intended for the view are ignored and removed from the event queue. When set to [true](https://developer.apple.com/documentation/swift/true), events are delivered to the view normally. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

During an animation, user interactions are temporarily disabled for all views involved in the animation, regardless of the value in this property. You can disable this behavior by specifying the [allowUserInteraction](animationoptions/allowuserinteraction.md) option when configuring the animation.

> **Note**

>  Some UIKit subclasses override this property and return a different default value. See the documentation for that class to determine if it returns a different value.

## See Also

### Configuring the event-related behavior

- [isMultipleTouchEnabled](ismultipletouchenabled.md): A Boolean value that indicates whether the view receives more than one touch at a time.
- [isExclusiveTouch](isexclusivetouch.md): A Boolean value that indicates whether the receiver handles touch events exclusively.

# userInteractionEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether user events are ignored and removed from the event queue.

## Declaration

```objectivec
@property (nonatomic, getter=isUserInteractionEnabled) BOOL userInteractionEnabled;
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)
- [Handling pan gestures](../handling-pan-gestures.md)
- [Handling pinch gestures](../handling-pinch-gestures.md)
- [Handling rotation gestures](../handling-rotation-gestures.md)
- [Handling swipe gestures](../handling-swipe-gestures.md)
- [Handling tap gestures](../handling-tap-gestures.md)

<a id="Discussion"></a>

## Discussion

When set to [false](https://developer.apple.com/documentation/swift/false), touch, press, keyboard, and focus events intended for the view are ignored and removed from the event queue. When set to [true](https://developer.apple.com/documentation/swift/true), events are delivered to the view normally. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

During an animation, user interactions are temporarily disabled for all views involved in the animation, regardless of the value in this property. You can disable this behavior by specifying the [UIViewAnimationOptionAllowUserInteraction](animationoptions/allowuserinteraction.md) option when configuring the animation.

> **Note**

>  Some UIKit subclasses override this property and return a different default value. See the documentation for that class to determine if it returns a different value.

## See Also

### Configuring the event-related behavior

- [multipleTouchEnabled](ismultipletouchenabled.md): A Boolean value that indicates whether the view receives more than one touch at a time.
- [exclusiveTouch](isexclusivetouch.md): A Boolean value that indicates whether the receiver handles touch events exclusively.
