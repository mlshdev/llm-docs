> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/simultaneousgesture](https://developer.apple.com/documentation/swiftui/simultaneousgesture)

# SimultaneousGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A gesture containing two gestures that can happen at the same time with neither of them preceding the other.

## Declaration

```swift
@frozen nonisolated struct SimultaneousGesture<First, Second> where First : Gesture, Second : Gesture
```

<a id="overview"></a>

## Overview

A simultaneous gesture is a container-event handler that evaluates its two child gestures at the same time. Its value is a struct with two optional values, each representing the phases of one of the two gestures.

## Topics

### Creating the gesture

- [init(\_:\_:)](simultaneousgesture/init%28____%29.md): Creates a gesture with two gestures that can receive updates or succeed independently of each other.
- [first](simultaneousgesture/first.md): The first of two gestures that can happen simultaneously.
- [second](simultaneousgesture/second.md): The second of two gestures that can happen simultaneously.

### Getting the gesture’s values

- [SimultaneousGesture.Value](simultaneousgesture/value.md): The value of a simultaneous gesture that indicates which of its two gestures receives events.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Combining gestures

- [Composing SwiftUI gestures](composing-swiftui-gestures.md): Combine gestures to create complex interactions.
- [simultaneousGesture(\_:including:)](view/simultaneousgesture%28__including_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [simultaneousGesture(\_:isEnabled:)](view/simultaneousgesture%28__isenabled_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [simultaneousGesture(\_:name:isEnabled:)](view/simultaneousgesture%28__name_isenabled_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [SequenceGesture](sequencegesture.md): A gesture that’s a sequence of two gestures.
- [ExclusiveGesture](exclusivegesture.md): A gesture that consists of two gestures where only one of them can succeed.
