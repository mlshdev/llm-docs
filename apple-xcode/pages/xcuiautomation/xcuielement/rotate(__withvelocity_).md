> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/rotate(_:withvelocity:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/rotate(_:withvelocity:))

# rotate(\_:withVelocity:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · watchOS · Xcode 16.3+

Sends a rotation gesture with two touches.

## Declaration

```swift
func rotate(_ rotation: CGFloat, withVelocity velocity: CGFloat)
```

## Parameters

- `rotation`: The rotation of the gesture in radians.
- `velocity`: The velocity of the rotation gesture in radians per second.

<a id="Discussion"></a>

## Discussion

The system makes a best effort to synthesize the requested rotation and velocity, but absolute accuracy isn’t guaranteed. Some values may not be possible based on the size of the element’s frame, and they result in test failures.

## See Also

### Performing gestures

- [swipeLeft()](swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeft(velocity:)](swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight()](swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRight(velocity:)](swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp()](swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUp(velocity:)](swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown()](swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDown(velocity:)](swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.
- [pinch(withScale:velocity:)](pinch%28withscale_velocity_%29.md): Sends a pinching gesture with two touches.
- [XCUIGestureVelocity](../xcuigesturevelocity.md): A value that describes how fast a gesture moves across the screen, in pixels per second.

# rotate:withVelocity: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · watchOS · Xcode 16.3+

Sends a rotation gesture with two touches.

## Declaration

```objectivec
- (void) rotate:(CGFloat) rotation withVelocity:(CGFloat) velocity;
```

## Parameters

- `rotation`: The rotation of the gesture in radians.
- `velocity`: The velocity of the rotation gesture in radians per second.

<a id="Discussion"></a>

## Discussion

The system makes a best effort to synthesize the requested rotation and velocity, but absolute accuracy isn’t guaranteed. Some values may not be possible based on the size of the element’s frame, and they result in test failures.

## See Also

### Performing gestures

- [swipeLeft](swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeftWithVelocity:](swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight](swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRightWithVelocity:](swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp](swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUpWithVelocity:](swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown](swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDownWithVelocity:](swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.
- [pinchWithScale:velocity:](pinch%28withscale_velocity_%29.md): Sends a pinching gesture with two touches.
- [XCUIGestureVelocity](../xcuigesturevelocity.md): A value that describes how fast a gesture moves across the screen, in pixels per second.
