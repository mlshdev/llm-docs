> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/threshold](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/threshold)

# ScrollTransitionConfiguration.Threshold

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Describes a specific point in the progression of a target view within a container from hidden (fully outside the container) to visible.

## Declaration

```swift
struct Threshold
```

## Topics

### Getting the threshold

- [centered](threshold/centered.md): The target view is centered within the container
- [hidden](threshold/hidden.md)
- [visible](threshold/visible.md)
- [visible(\_:)](threshold/visible%28__%29.md): The target view is visible by the given amount, where zero is fully hidden, and one is fully visible.

### Modifying the threshold

- [inset(by:)](threshold/inset%28by_%29.md): Returns a threshold that is met when the target view is closer to the center of the container by `distance`. Use negative values to move the threshold away from the center.
- [interpolated(towards:amount:)](threshold/interpolated%28towards_amount_%29.md): Creates a new threshold that combines this threshold value with another threshold, interpolated by the given amount.

## See Also

### Accessing the configuration

- [animation(\_:)](animation%28__%29.md): Sets the animation with which the transition will be applied.
- [threshold(\_:)](threshold%28__%29.md): Sets the threshold at which the view will be considered fully visible.
