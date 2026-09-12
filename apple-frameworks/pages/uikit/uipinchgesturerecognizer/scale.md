> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipinchgesturerecognizer/scale](https://developer.apple.com/documentation/uikit/uipinchgesturerecognizer/scale)

# scale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The scale factor relative to the points of the two touches in screen coordinates.

## Declaration

```swift
var scale: CGFloat { get set }
```

## Mentioned In

- [Handling pinch gestures](../handling-pinch-gestures.md)

<a id="Discussion"></a>

## Discussion

You may set the scale factor, but doing so resets the velocity.

The scale value is an absolute value that varies over time. It isn’t the delta value from the last time that the scale was reported. Apply the scale value to the state of the view when the gesture is first recognized — don’t concatenate the value each time the handler is called.

## See Also

### Interpreting the pinching gesture

- [velocity](velocity.md): The velocity of the pinch in scale factor per second.

# scale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The scale factor relative to the points of the two touches in screen coordinates.

## Declaration

```objectivec
@property (nonatomic) CGFloat scale;
```

## Mentioned In

- [Handling pinch gestures](../handling-pinch-gestures.md)

<a id="Discussion"></a>

## Discussion

You may set the scale factor, but doing so resets the velocity.

The scale value is an absolute value that varies over time. It isn’t the delta value from the last time that the scale was reported. Apply the scale value to the state of the view when the gesture is first recognized — don’t concatenate the value each time the handler is called.

## See Also

### Interpreting the pinching gesture

- [velocity](velocity.md): The velocity of the pinch in scale factor per second.
