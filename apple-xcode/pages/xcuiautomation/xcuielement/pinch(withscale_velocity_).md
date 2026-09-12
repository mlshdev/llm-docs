> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/pinch(withscale:velocity:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/pinch(withscale:velocity:))

# pinch(withScale:velocity:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · watchOS · Xcode 16.3+

Sends a pinching gesture with two touches.

## Declaration

```swift
func pinch(withScale scale: CGFloat, velocity: CGFloat)
```

## Parameters

- `scale`: The scale of the pinch gesture.  Use a scale between 0 and 1 to “pinch close” or zoom out and a scale greater than 1 to “pinch open” or zoom in.
- `velocity`: The velocity of the pinch in scale factor per second.

<a id="Discussion"></a>

## Discussion

The system makes a best effort to synthesize the requested scale and velocity, but absolute accuracy isn’t guaranteed. Some values may not be possible based on the size of the element’s frame, and they result in test failures.

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
- [rotate(\_:withVelocity:)](rotate%28__withvelocity_%29.md): Sends a rotation gesture with two touches.
- [XCUIGestureVelocity](../xcuigesturevelocity.md): A value that describes how fast a gesture moves across the screen, in pixels per second.

# pinchWithScale:velocity: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · watchOS · Xcode 16.3+

Sends a pinching gesture with two touches.

## Declaration

```objectivec
- (void) pinchWithScale:(CGFloat) scale velocity:(CGFloat) velocity;
```

## Parameters

- `scale`: The scale of the pinch gesture.  Use a scale between 0 and 1 to “pinch close” or zoom out and a scale greater than 1 to “pinch open” or zoom in.
- `velocity`: The velocity of the pinch in scale factor per second.

<a id="Discussion"></a>

## Discussion

The system makes a best effort to synthesize the requested scale and velocity, but absolute accuracy isn’t guaranteed. Some values may not be possible based on the size of the element’s frame, and they result in test failures.

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
- [rotate:withVelocity:](rotate%28__withvelocity_%29.md): Sends a rotation gesture with two touches.
- [XCUIGestureVelocity](../xcuigesturevelocity.md): A value that describes how fast a gesture moves across the screen, in pixels per second.
