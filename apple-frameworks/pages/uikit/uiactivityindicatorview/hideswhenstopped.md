> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityindicatorview/hideswhenstopped](https://developer.apple.com/documentation/uikit/uiactivityindicatorview/hideswhenstopped)

# hidesWhenStopped (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.

## Declaration

```swift
var hidesWhenStopped: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), the receiver sets its [isHidden](../uiview/ishidden.md) property (`UIView`) to [true](https://developer.apple.com/documentation/swift/true) when receiver is not animating. If the [hidesWhenStopped](hideswhenstopped.md) property is [false](https://developer.apple.com/documentation/swift/false), the receiver is not hidden when animation stops. You stop an animating progress indicator with the [stopAnimating()](stopanimating%28%29.md) method.

## See Also

### Managing an activity indicator

- [startAnimating()](startanimating%28%29.md): Starts the animation of the progress indicator.
- [stopAnimating()](stopanimating%28%29.md): Stops the animation of the progress indicator.
- [isAnimating](isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.

# hidesWhenStopped (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.

## Declaration

```objectivec
@property (nonatomic) BOOL hidesWhenStopped;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), the receiver sets its [hidden](../uiview/ishidden.md) property (`UIView`) to [true](https://developer.apple.com/documentation/swift/true) when receiver is not animating. If the [hidesWhenStopped](hideswhenstopped.md) property is [false](https://developer.apple.com/documentation/swift/false), the receiver is not hidden when animation stops. You stop an animating progress indicator with the [stopAnimating](stopanimating%28%29.md) method.

## See Also

### Managing an activity indicator

- [startAnimating](startanimating%28%29.md): Starts the animation of the progress indicator.
- [stopAnimating](stopanimating%28%29.md): Stops the animation of the progress indicator.
- [animating](isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
