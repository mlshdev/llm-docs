> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/threshold/visible(_:)](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/threshold/visible(_:))

# visible(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The target view is visible by the given amount, where zero is fully hidden, and one is fully visible.

## Declaration

```swift
static func visible(_ amount: Double) -> ScrollTransitionConfiguration.Threshold
```

<a id="discussion"></a>

## Discussion

Values less than zero or greater than one are clamped.

## See Also

### Getting the threshold

- [centered](centered.md): The target view is centered within the container
- [hidden](hidden.md)
- [visible](visible.md)
