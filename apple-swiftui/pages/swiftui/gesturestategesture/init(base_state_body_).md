> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesturestategesture/init(base:state:body:)](https://developer.apple.com/documentation/swiftui/gesturestategesture/init(base:state:body:))

# init(base:state:body:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new gesture that’s the result of an ongoing gesture.

## Declaration

```swift
nonisolated init(base: Base, state: GestureState<State>, body: @escaping (GestureStateGesture<Base, State>.Value, inout State, inout Transaction) -> Void)
```

## Parameters

- `base`: The originating gesture.
- `state`: The wrapped value of a [GestureState](../gesturestate.md) property.
- `body`: The callback that SwiftUI invokes as the gesture’s value changes.

## See Also

### Creating an in-progress gesture

- [base](base.md): The originating gesture.
- [state](state.md): A value that changes as the user performs the gesture.
