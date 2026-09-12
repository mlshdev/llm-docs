> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture/init(minimumangledelta:)](https://developer.apple.com/documentation/swiftui/rotategesture/init(minimumangledelta:))

# init(minimumAngleDelta:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a rotation gesture with a minimum delta for the gesture to start.

## Declaration

```swift
nonisolated init(minimumAngleDelta: Angle = .degrees(1))
```

## Parameters

- `minimumAngleDelta`: The minimum delta required before the gesture starts. The default value is a one-degree angle.

## See Also

### Creating the gesture

- [init(minimumAngleDelta:inputKinds:)](init%28minimumangledelta_inputkinds_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start, and the input kinds the gesture recognizes.
- [minimumAngleDelta](minimumangledelta.md): The minimum delta required before the gesture succeeds.
