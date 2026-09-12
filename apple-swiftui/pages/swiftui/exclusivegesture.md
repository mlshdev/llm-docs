> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/exclusivegesture](https://developer.apple.com/documentation/swiftui/exclusivegesture)

# ExclusiveGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A gesture that consists of two gestures where only one of them can succeed.

## Declaration

```swift
@frozen nonisolated struct ExclusiveGesture<First, Second> where First : Gesture, Second : Gesture
```

<a id="overview"></a>

## Overview

The `ExclusiveGesture` gives precedence to its first gesture.

## Topics

### Creating the gesture

- [init(\_:\_:)](exclusivegesture/init%28____%29.md): Creates a gesture from two gestures where only one of them succeeds.
- [first](exclusivegesture/first.md): The first of two gestures.
- [second](exclusivegesture/second.md): The second of two gestures.

### Supporting types

- [ExclusiveGesture.Value](exclusivegesture/value.md): The value of an exclusive gesture that indicates which of two gestures succeeded.

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
- [SimultaneousGesture](simultaneousgesture.md): A gesture containing two gestures that can happen at the same time with neither of them preceding the other.
