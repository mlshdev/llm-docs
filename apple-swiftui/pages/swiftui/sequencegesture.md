> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sequencegesture](https://developer.apple.com/documentation/swiftui/sequencegesture)

# SequenceGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A gesture that’s a sequence of two gestures.

## Declaration

```swift
@frozen nonisolated struct SequenceGesture<First, Second> where First : Gesture, Second : Gesture
```

<a id="overview"></a>

## Overview

Read [Composing SwiftUI gestures](composing-swiftui-gestures.md) to learn how you can create a sequence of two gestures.

## Topics

### Creating the gesture

- [init(\_:\_:)](sequencegesture/init%28____%29.md): Creates a sequence gesture with two gestures.
- [first](sequencegesture/first.md): The first gesture in a sequence of two gestures.
- [second](sequencegesture/second.md): The second gesture in a sequence of two gestures.

### Getting the gesture’s values

- [SequenceGesture.Value](sequencegesture/value.md): The value of a sequence gesture that helps to detect whether the first gesture succeeded, so the second gesture can start.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Combining gestures

- [Composing SwiftUI gestures](composing-swiftui-gestures.md): Combine gestures to create complex interactions.
- [simultaneousGesture(\_:including:)](view/simultaneousgesture%28__including_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [simultaneousGesture(\_:isEnabled:)](view/simultaneousgesture%28__isenabled_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [simultaneousGesture(\_:name:isEnabled:)](view/simultaneousgesture%28__name_isenabled_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [SimultaneousGesture](simultaneousgesture.md): A gesture containing two gestures that can happen at the same time with neither of them preceding the other.
- [ExclusiveGesture](exclusivegesture.md): A gesture that consists of two gestures where only one of them can succeed.
