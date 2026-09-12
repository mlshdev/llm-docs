> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/threshold(_:)](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/threshold(_:))

# threshold(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the threshold at which the view will be considered fully visible.

## Declaration

```swift
func threshold(_ threshold: ScrollTransitionConfiguration.Threshold) -> ScrollTransitionConfiguration
```

## Parameters

- `threshold`: The threshold specifying how much of the view must intersect with the container before it is treated as visible.

<a id="return-value"></a>

## Return Value

A copy of this configuration with the threshold set to the given value.

## See Also

### Accessing the configuration

- [animation(\_:)](animation%28__%29.md): Sets the animation with which the transition will be applied.
- [ScrollTransitionConfiguration.Threshold](threshold.md): Describes a specific point in the progression of a target view within a container from hidden (fully outside the container) to visible.
