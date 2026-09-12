> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityindicatorview/startanimating()](https://developer.apple.com/documentation/uikit/uiactivityindicatorview/startanimating())

# startAnimating() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Starts the animation of the progress indicator.

## Declaration

```swift
func startAnimating()
```

<a id="Discussion"></a>

## Discussion

When the progress indicator is animated, the gear spins to indicate indeterminate progress. The indicator is animated until [stopAnimating()](stopanimating%28%29.md) is called.

## See Also

### Managing an activity indicator

- [stopAnimating()](stopanimating%28%29.md): Stops the animation of the progress indicator.
- [isAnimating](isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
- [hidesWhenStopped](hideswhenstopped.md): A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.

# startAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Starts the animation of the progress indicator.

## Declaration

```objectivec
- (void) startAnimating;
```

<a id="Discussion"></a>

## Discussion

When the progress indicator is animated, the gear spins to indicate indeterminate progress. The indicator is animated until [stopAnimating](stopanimating%28%29.md) is called.

## See Also

### Managing an activity indicator

- [stopAnimating](stopanimating%28%29.md): Stops the animation of the progress indicator.
- [animating](isanimating.md): A Boolean value indicating whether the activity indicator is currently running its animation.
- [hidesWhenStopped](hideswhenstopped.md): A Boolean value that controls whether the activity indicator is hidden when the animation is stopped.
