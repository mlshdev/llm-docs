> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture/init(minimumangledelta:inputkinds:)](https://developer.apple.com/documentation/swiftui/rotategesture/init(minimumangledelta:inputkinds:))

# init(minimumAngleDelta:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a rotation gesture with a minimum delta for the gesture to start, and the input kinds the gesture recognizes.

## Declaration

```swift
nonisolated init(minimumAngleDelta: Angle = .degrees(1), inputKinds: GestureInputKinds = .all)
```

## Parameters

- `minimumAngleDelta`: The minimum delta required before the gesture starts. The default value is a one-degree angle.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

## See Also

### Creating the gesture

- [init(minimumAngleDelta:)](init%28minimumangledelta_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start.
- [minimumAngleDelta](minimumangledelta.md): The minimum delta required before the gesture succeeds.
