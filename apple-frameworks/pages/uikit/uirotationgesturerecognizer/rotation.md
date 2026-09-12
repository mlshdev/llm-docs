> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirotationgesturerecognizer/rotation](https://developer.apple.com/documentation/uikit/uirotationgesturerecognizer/rotation)

# rotation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The rotation of the gesture in radians.

## Declaration

```swift
var rotation: CGFloat { get set }
```

## Mentioned In

- [Handling rotation gestures](../handling-rotation-gestures.md)

<a id="Discussion"></a>

## Discussion

You may set the rotation value to an arbitrary value; however, setting the rotation resets the velocity.

The rotation value is a single value that varies over time. It isn’t the delta value from the last time that the rotation was reported. Apply the rotation value to the state of the view when the gesture is first recognized — don’t concatenate the value each time the handler is called.

## See Also

### Interpreting the gesture

- [velocity](velocity.md): The velocity of the rotation gesture in radians per second.

# rotation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The rotation of the gesture in radians.

## Declaration

```objectivec
@property (nonatomic) CGFloat rotation;
```

## Mentioned In

- [Handling rotation gestures](../handling-rotation-gestures.md)

<a id="Discussion"></a>

## Discussion

You may set the rotation value to an arbitrary value; however, setting the rotation resets the velocity.

The rotation value is a single value that varies over time. It isn’t the delta value from the last time that the rotation was reported. Apply the rotation value to the state of the view when the gesture is first recognized — don’t concatenate the value each time the handler is called.

## See Also

### Interpreting the gesture

- [velocity](velocity.md): The velocity of the rotation gesture in radians per second.
