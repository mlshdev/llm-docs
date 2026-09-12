> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/onchanged(_:)](https://developer.apple.com/documentation/swiftui/gesture/onchanged(_:))

# onChanged(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform when the gesture’s value changes.

## Declaration

```swift
nonisolated func onChanged(_ action: @escaping (Self.Value) -> Void) -> _ChangedGesture<Self>
```

## Parameters

- `action`: The action to perform when this gesture’s value changes. The `action` closure’s parameter contains the gesture’s new value.

<a id="return-value"></a>

## Return Value

A gesture that triggers `action` when this gesture’s value changes.

## Mentioned In

- [Adding interactivity with gestures](../adding-interactivity-with-gestures.md)

## See Also

### Performing the gesture

- [updating(\_:body:)](updating%28__body_%29.md): Updates the provided gesture state property as the gesture’s value changes.
- [onEnded(\_:)](onended%28__%29.md): Adds an action to perform when the gesture ends.
- [Value](value.md): The type representing the gesture’s value.
