> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipegesturerecognizer/direction-swift.property](https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer/direction-swift.property)

# direction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The permitted direction of the swipe for this gesture recognizer.

## Declaration

```swift
var direction: UISwipeGestureRecognizer.Direction { get set }
```

## Mentioned In

- [Handling swipe gestures](../handling-swipe-gestures.md)

<a id="Discussion"></a>

## Discussion

The default direction is [right](direction-swift.struct/right.md). See descriptions of [UISwipeGestureRecognizer.Direction](direction-swift.struct.md) constants for more information.

## See Also

### Related Documentation

- [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html#//apple_ref/doc/uid/TP40009541)

### Configuring the gesture

- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches necessary for swipe recognition.
- [UISwipeGestureRecognizer.Direction](direction-swift.struct.md): The direction of the swipe.

# direction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The permitted direction of the swipe for this gesture recognizer.

## Declaration

```objectivec
@property (nonatomic) UISwipeGestureRecognizerDirection direction;
```

## Mentioned In

- [Handling swipe gestures](../handling-swipe-gestures.md)

<a id="Discussion"></a>

## Discussion

The default direction is [UISwipeGestureRecognizerDirectionRight](direction-swift.struct/right.md). See descriptions of [UISwipeGestureRecognizerDirection](direction-swift.struct.md) constants for more information.

## See Also

### Related Documentation

- [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html#//apple_ref/doc/uid/TP40009541)

### Configuring the gesture

- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches necessary for swipe recognition.
- [UISwipeGestureRecognizerDirection](direction-swift.struct.md): The direction of the swipe.
