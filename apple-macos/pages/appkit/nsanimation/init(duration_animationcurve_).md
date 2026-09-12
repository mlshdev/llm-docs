> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/init(duration:animationcurve:)](https://developer.apple.com/documentation/appkit/nsanimation/init(duration:animationcurve:))

# init(duration:animationCurve:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSAnimation` object initialized with the specified duration and animation-curve values.

## Declaration

```swift
init(duration: TimeInterval, animationCurve: NSAnimation.Curve)
```

## Parameters

- `duration`: The number of seconds over which the animation occurs. Specifying a negative number raises an exception.
- `animationCurve`: An `NSAnimationCurve` constant that describes the relative speed of the animation over its course; if it is zero, the default curve (`NSAnimationEaseInOut`) is used.

<a id="return-value"></a>

## Return Value

An initialized `NSAnimation` instance. Returns `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

You can always later change the duration of an `NSAnimation` object by changing the [duration](duration.md) property, even while the animation is running. See “Constants” for descriptions of the NSAnimationCurve constants.

## See Also

### Related Documentation

- [Drawing](../drawing.md): Draw shapes, images, and other content on the screen.
- [NSAnimation](../nsanimation.md): An object that manages the timing and progress of animations in the user interface.

# initWithDuration:animationCurve: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSAnimation` object initialized with the specified duration and animation-curve values.

## Declaration

```objectivec
- (instancetype) initWithDuration:(NSTimeInterval) duration animationCurve:(NSAnimationCurve) animationCurve;
```

## Parameters

- `duration`: The number of seconds over which the animation occurs. Specifying a negative number raises an exception.
- `animationCurve`: An `NSAnimationCurve` constant that describes the relative speed of the animation over its course; if it is zero, the default curve (`NSAnimationEaseInOut`) is used.

<a id="return-value"></a>

## Return Value

An initialized `NSAnimation` instance. Returns `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

You can always later change the duration of an `NSAnimation` object by changing the [duration](duration.md) property, even while the animation is running. See “Constants” for descriptions of the NSAnimationCurve constants.

## See Also

### Related Documentation

- [Drawing](../drawing.md): Draw shapes, images, and other content on the screen.
- [NSAnimation](../nsanimation.md): An object that manages the timing and progress of animations in the user interface.
