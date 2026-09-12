> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/onended(_:)](https://developer.apple.com/documentation/swiftui/gesture/onended(_:))

# onEnded(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform when the gesture ends.

## Declaration

```swift
nonisolated func onEnded(_ action: @escaping (Self.Value) -> Void) -> _EndedGesture<Self>
```

## Parameters

- `action`: The action to perform when this gesture ends. The `action` closure’s parameter contains the final value of the gesture.

<a id="return-value"></a>

## Return Value

A gesture that triggers `action` when the gesture ends.

## Mentioned In

- [Adding interactivity with gestures](../adding-interactivity-with-gestures.md)

<a id="discussion"></a>

## Discussion

> **Important**

> The action is only performed if the gesture ends successfully. Use a `@GestureState` property to track state that is reset regardless of how the gesture ends.

## See Also

### Performing the gesture

- [updating(\_:body:)](updating%28__body_%29.md): Updates the provided gesture state property as the gesture’s value changes.
- [onChanged(\_:)](onchanged%28__%29.md): Conforms when `Value` conforms to `Equatable`. Adds an action to perform when the gesture’s value changes.
- [Value](value.md): The type representing the gesture’s value.
