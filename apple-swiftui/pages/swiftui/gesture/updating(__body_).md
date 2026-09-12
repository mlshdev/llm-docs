> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/updating(_:body:)](https://developer.apple.com/documentation/swiftui/gesture/updating(_:body:))

# updating(\_:body:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Updates the provided gesture state property as the gesture’s value changes.

## Declaration

```swift
@MainActor @preconcurrency func updating<State>(_ state: GestureState<State>, body: @escaping (Self.Value, inout State, inout Transaction) -> Void) -> GestureStateGesture<Self, State>
```

## Parameters

- `state`: A binding to a view’s [GestureState](../gesturestate.md) property.
- `body`: The callback that SwiftUI invokes as the gesture’s value changes. Its `currentState` parameter is the updated state of the gesture. The `gestureState` parameter is the previous state of the gesture, and the `transaction` is the context of the gesture.

<a id="return-value"></a>

## Return Value

A version of the gesture that updates the provided `state` as the originating gesture’s value changes and that resets the `state` to its initial value when the user or the system ends or cancels the gesture.

## Mentioned In

- [Adding interactivity with gestures](../adding-interactivity-with-gestures.md)

<a id="discussion"></a>

## Discussion

Use this callback to update transient UI state as described in [Adding interactivity with gestures](../adding-interactivity-with-gestures.md).

## See Also

### Performing the gesture

- [onChanged(\_:)](onchanged%28__%29.md): Conforms when `Value` conforms to `Equatable`. Adds an action to perform when the gesture’s value changes.
- [onEnded(\_:)](onended%28__%29.md): Adds an action to perform when the gesture ends.
- [Value](value.md): The type representing the gesture’s value.
