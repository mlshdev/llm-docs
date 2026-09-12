> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/handgestureshortcut](https://developer.apple.com/documentation/swiftui/handgestureshortcut)

# HandGestureShortcut

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · watchOS 11.0+

Hand gesture shortcuts describe finger and wrist movements that the user can perform in order to activate a button or toggle.

## Declaration

```swift
struct HandGestureShortcut
```

## Topics

### Type Properties

- [primaryAction](handgestureshortcut/primaryaction.md): The hand gesture shortcut for the primary action.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining custom gestures

- [highPriorityGesture(\_:including:)](view/highprioritygesture%28__including_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:isEnabled:)](view/highprioritygesture%28__isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:name:isEnabled:)](view/highprioritygesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [handGestureShortcut(\_:isEnabled:)](view/handgestureshortcut%28__isenabled_%29.md): Assigns a hand gesture shortcut to the modified control.
- [defersSystemGestures(on:)](view/deferssystemgestures%28on_%29.md): Sets the screen edge from which you want your gesture to take precedence over the system gesture.
- [Gesture](gesture.md): An instance that matches a sequence of events to a gesture, and returns a stream of values for each of its states.
- [AnyGesture](anygesture.md): A type-erased gesture.
- [HandActivationBehavior](handactivationbehavior.md): An activation behavior specific to hand-driven input.
