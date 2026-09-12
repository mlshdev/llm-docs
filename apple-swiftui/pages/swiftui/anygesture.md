> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anygesture](https://developer.apple.com/documentation/swiftui/anygesture)

# AnyGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erased gesture.

## Declaration

```swift
@frozen nonisolated struct AnyGesture<Value>
```

## Topics

### Implementing a custom gesture

- [init(\_:)](anygesture/init%28__%29.md): Creates an instance from another gesture.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Defining custom gestures

- [highPriorityGesture(\_:including:)](view/highprioritygesture%28__including_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:isEnabled:)](view/highprioritygesture%28__isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:name:isEnabled:)](view/highprioritygesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [handGestureShortcut(\_:isEnabled:)](view/handgestureshortcut%28__isenabled_%29.md): Assigns a hand gesture shortcut to the modified control.
- [defersSystemGestures(on:)](view/deferssystemgestures%28on_%29.md): Sets the screen edge from which you want your gesture to take precedence over the system gesture.
- [Gesture](gesture.md): An instance that matches a sequence of events to a gesture, and returns a stream of values for each of its states.
- [HandActivationBehavior](handactivationbehavior.md): An activation behavior specific to hand-driven input.
- [HandGestureShortcut](handgestureshortcut.md): Hand gesture shortcuts describe finger and wrist movements that the user can perform in order to activate a button or toggle.
