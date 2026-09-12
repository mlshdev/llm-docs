> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/longpressgesture/init(minimumduration:maximumdistance:)](https://developer.apple.com/documentation/swiftui/longpressgesture/init(minimumduration:maximumdistance:))

# init(minimumDuration:maximumDistance:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Creates a long-press gesture with a minimum duration and a maximum distance that the interaction can move before the gesture fails.

## Declaration

```swift
nonisolated init(minimumDuration: Double = 0.5, maximumDistance: CGFloat = 10)
```

## Parameters

- `minimumDuration`: The minimum duration of the long press that must elapse before the gesture succeeds.
- `maximumDistance`: The maximum distance that the fingers or cursor performing the long press can move before the gesture fails.

## See Also

### Creating a long press gesture

- [init(minimumDuration:)](init%28minimumduration_%29.md): Creates a long-press gesture with a minimum duration
- [init(minimumDuration:maximumDistance:inputKinds:)](init%28minimumduration_maximumdistance_inputkinds_%29.md): Creates a long-press gesture with a minimum duration, a maximum distance, and the input kinds the gesture recognizes.
- [minimumDuration](minimumduration.md): The minimum duration of the long press that must elapse before the gesture succeeds.
- [maximumDistance](maximumdistance.md): The maximum distance that the long press can move before the gesture fails.
