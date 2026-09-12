> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesturestategesture](https://developer.apple.com/documentation/swiftui/gesturestategesture)

# GestureStateGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A gesture that updates the state provided by a gesture’s updating callback.

## Declaration

```swift
@frozen nonisolated struct GestureStateGesture<Base, State> where Base : Gesture
```

<a id="overview"></a>

## Overview

A gesture’s [updating(\_:body:)](gesture/updating%28__body_%29.md) callback returns a `GestureStateGesture` instance for updating a transient state property that’s annotated with the [GestureState](gesturestate.md) property wrapper.

## Topics

### Creating an in-progress gesture

- [init(base:state:body:)](gesturestategesture/init%28base_state_body_%29.md): Creates a new gesture that’s the result of an ongoing gesture.
- [base](gesturestategesture/base.md): The originating gesture.
- [state](gesturestategesture/state.md): A value that changes as the user performs the gesture.

### Supporting types

- [body](gesturestategesture/body.md): The updating gesture containing the originating gesture’s value, the updated state of the gesture, and a transaction.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Managing gesture state

- [GestureState](gesturestate.md): A property wrapper type that updates a property while the user performs a gesture and resets the property back to its initial state when the gesture ends.
