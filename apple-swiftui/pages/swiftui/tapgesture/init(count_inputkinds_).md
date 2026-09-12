> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tapgesture/init(count:inputkinds:)](https://developer.apple.com/documentation/swiftui/tapgesture/init(count:inputkinds:))

# init(count:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a tap gesture with the number of required taps and the input kinds the gesture recognizes.

## Declaration

```swift
nonisolated init(count: Int = 1, inputKinds: GestureInputKinds = .all)
```

## Parameters

- `count`: The required number of taps to complete the tap gesture.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

## See Also

### Creating a tap gesture

- [init(count:)](init%28count_%29.md): Creates a tap gesture with the number of required taps.
- [count](count.md): The required number of tap events.
