> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesturestate](https://developer.apple.com/documentation/swiftui/gesturestate)

# GestureState

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A property wrapper type that updates a property while the user performs a gesture and resets the property back to its initial state when the gesture ends.

## Declaration

```swift
@propertyWrapper @frozen struct GestureState<Value>
```

## Mentioned In

- [Adding interactivity with gestures](adding-interactivity-with-gestures.md)

<a id="overview"></a>

## Overview

Declare a property as `@GestureState`, pass as a binding to it as a parameter to a gesture’s [updating(\_:body:)](gesture/updating%28__body_%29.md) callback, and receive updates to it. A property that’s declared as `@GestureState` implicitly resets when the gesture becomes inactive, making it suitable for tracking transient state.

Add a long-press gesture to a [Circle](circle.md), and update the interface during the gesture by declaring a property as `@GestureState`:

```swift
struct SimpleLongPressGestureView: View {
    @GestureState private var isDetectingLongPress = false

    var longPress: some Gesture {
        LongPressGesture(minimumDuration: 3)
            .updating($isDetectingLongPress) { currentState, gestureState, transaction in
                gestureState = currentState
            }
    }

    var body: some View {
        Circle()
            .fill(self.isDetectingLongPress ? Color.red : Color.green)
            .frame(width: 100, height: 100, alignment: .center)
            .gesture(longPress)
    }
}
```

## Topics

### Creating a gesture state

- [init(initialValue:)](gesturestate/init%28initialvalue_%29.md): Creates a view state that’s derived from a gesture with an initial value.
- [init(initialValue:reset:)](gesturestate/init%28initialvalue_reset_%29.md): Creates a view state that’s derived from a gesture with an initial state value and a closure that provides a transaction to reset it.
- [init(initialValue:resetTransaction:)](gesturestate/init%28initialvalue_resettransaction_%29.md): Creates a view state that’s derived from a gesture with an initial state value and a transaction to reset it.
- [init(reset:)](gesturestate/init%28reset_%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a view state that’s derived from a gesture with a closure that provides a transaction to reset it.
- [init(resetTransaction:)](gesturestate/init%28resettransaction_%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a view state that’s derived from a gesture with a transaction to reset it.
- [init(wrappedValue:)](gesturestate/init%28wrappedvalue_%29.md): Creates a view state that’s derived from a gesture.
- [init(wrappedValue:reset:)](gesturestate/init%28wrappedvalue_reset_%29.md): Creates a view state that’s derived from a gesture with a wrapped state value and a closure that provides a transaction to reset it.
- [init(wrappedValue:resetTransaction:)](gesturestate/init%28wrappedvalue_resettransaction_%29.md): Creates a view state that’s derived from a gesture with a wrapped state value and a transaction to reset it.

### Getting the state

- [wrappedValue](gesturestate/wrappedvalue.md): The wrapped value referenced by the gesture state property.
- [projectedValue](gesturestate/projectedvalue.md): A binding to the gesture state property.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing gesture state

- [GestureStateGesture](gesturestategesture.md): A gesture that updates the state provided by a gesture’s updating callback.
