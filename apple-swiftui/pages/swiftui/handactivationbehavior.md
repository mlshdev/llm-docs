> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/handactivationbehavior](https://developer.apple.com/documentation/swiftui/handactivationbehavior)

# HandActivationBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An activation behavior specific to hand-driven input.

## Declaration

```swift
struct HandActivationBehavior
```

<a id="overview"></a>

## Overview

Hand activation behavior determines what hand input modes activate a gesture.

## Topics

### Getting the behaviors

- [automatic](handactivationbehavior/automatic.md): The default activation behavior, including direct touch, direct pinch, and indirect pinch.
- [pinch](handactivationbehavior/pinch.md): Activation that requires a pinched hand.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Defining custom gestures

- [highPriorityGesture(\_:including:)](view/highprioritygesture%28__including_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:isEnabled:)](view/highprioritygesture%28__isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [highPriorityGesture(\_:name:isEnabled:)](view/highprioritygesture%28__name_isenabled_%29.md): Attaches a gesture to the view with a higher precedence than gestures defined by the view.
- [handGestureShortcut(\_:isEnabled:)](view/handgestureshortcut%28__isenabled_%29.md): Assigns a hand gesture shortcut to the modified control.
- [defersSystemGestures(on:)](view/deferssystemgestures%28on_%29.md): Sets the screen edge from which you want your gesture to take precedence over the system gesture.
- [Gesture](gesture.md): An instance that matches a sequence of events to a gesture, and returns a stream of values for each of its states.
- [AnyGesture](anygesture.md): A type-erased gesture.
- [HandGestureShortcut](handgestureshortcut.md): Hand gesture shortcuts describe finger and wrist movements that the user can perform in order to activate a button or toggle.
