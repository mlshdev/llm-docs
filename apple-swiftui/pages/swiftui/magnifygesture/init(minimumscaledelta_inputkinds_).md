> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/magnifygesture/init(minimumscaledelta:inputkinds:)](https://developer.apple.com/documentation/swiftui/magnifygesture/init(minimumscaledelta:inputkinds:))

# init(minimumScaleDelta:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a magnify gesture with a given minimum delta for the gesture to start, and the input kinds the gesture recognizes.

## Declaration

```swift
nonisolated init(minimumScaleDelta: CGFloat = 0.01, inputKinds: GestureInputKinds = .all)
```

## Parameters

- `minimumScaleDelta`: The minimum scale delta required before the gesture starts.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

## See Also

### Creating the gesture

- [init(minimumScaleDelta:)](init%28minimumscaledelta_%29.md): Creates a magnify gesture with a given minimum delta for the gesture to start.
- [minimumScaleDelta](minimumscaledelta.md): The minimum required delta before the gesture starts.
