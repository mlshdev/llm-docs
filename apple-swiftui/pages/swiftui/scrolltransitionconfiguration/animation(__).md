> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/animation(_:)](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/animation(_:))

# animation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the animation with which the transition will be applied.

## Declaration

```swift
func animation(_ animation: Animation) -> ScrollTransitionConfiguration
```

## Parameters

- `animation`: An animation that will be used to apply the transition to the view.

<a id="return-value"></a>

## Return Value

A copy of this configuration with the animation set to the given value.

<a id="discussion"></a>

## Discussion

If the transition is interactive, the given animation will be used to animate the effect toward the current interpolated value, causing the effect to lag behind the current scroll position.

## See Also

### Accessing the configuration

- [threshold(\_:)](threshold%28__%29.md): Sets the threshold at which the view will be considered fully visible.
- [ScrollTransitionConfiguration.Threshold](threshold.md): Describes a specific point in the progression of a target view within a container from hidden (fully outside the container) to visible.
