> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/threshold/inset(by:)](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/threshold/inset(by:))

# inset(by:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a threshold that is met when the target view is closer to the center of the container by `distance`. Use negative values to move the threshold away from the center.

## Declaration

```swift
func inset(by distance: Double) -> ScrollTransitionConfiguration.Threshold
```

## See Also

### Modifying the threshold

- [interpolated(towards:amount:)](interpolated%28towards_amount_%29.md): Creates a new threshold that combines this threshold value with another threshold, interpolated by the given amount.
