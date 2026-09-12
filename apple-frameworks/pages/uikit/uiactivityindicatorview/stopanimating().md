> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityindicatorview/stopanimating()](https://developer.apple.com/documentation/uikit/uiactivityindicatorview/stopanimating())

# stopAnimating() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stops the animation of the progress indicator.

## Declaration

```swift
func stopAnimating()
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the animation of the progress indicator started with a call to [startAnimating()](startanimating%28%29.md). When animating is stopped, the indicator is hidden, unless [hidesWhenStopped](hideswhenstopped.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing an activity indicator

- [startAnimating()](startanimating%28%29.md): Starts the animation of the progress indicator.
- [isAnimating](isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
- [hidesWhenStopped](hideswhenstopped.md): A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.

# stopAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stops the animation of the progress indicator.

## Declaration

```objectivec
- (void) stopAnimating;
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the animation of the progress indicator started with a call to [startAnimating](startanimating%28%29.md). When animating is stopped, the indicator is hidden, unless [hidesWhenStopped](hideswhenstopped.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing an activity indicator

- [startAnimating](startanimating%28%29.md): Starts the animation of the progress indicator.
- [animating](isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
- [hidesWhenStopped](hideswhenstopped.md): A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.
