> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/longpressgesture/init(minimumduration:maximumdistance:inputkinds:)](https://developer.apple.com/documentation/swiftui/longpressgesture/init(minimumduration:maximumdistance:inputkinds:))

# init(minimumDuration:maximumDistance:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a long-press gesture with a minimum duration, a maximum distance, and the input kinds the gesture recognizes.

## Declaration

```swift
nonisolated init(minimumDuration: Double = 0.5, maximumDistance: CGFloat = 10, inputKinds: GestureInputKinds = .all)
```

## Parameters

- `minimumDuration`: The minimum duration of the long press that must elapse before the gesture succeeds.
- `maximumDistance`: The maximum distance that the fingers or cursor performing the long press can move before the gesture fails.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

## See Also

### Creating a long press gesture

- [init(minimumDuration:)](init%28minimumduration_%29.md): Creates a long-press gesture with a minimum duration
- [init(minimumDuration:maximumDistance:)](init%28minimumduration_maximumdistance_%29.md): Creates a long-press gesture with a minimum duration and a maximum distance that the interaction can move before the gesture fails.
- [minimumDuration](minimumduration.md): The minimum duration of the long press that must elapse before the gesture succeeds.
- [maximumDistance](maximumdistance.md): The maximum distance that the long press can move before the gesture fails.
