> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection](https://developer.apple.com/documentation/swiftui/spatialeventcollection)

# SpatialEventCollection

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+ · watchOS 11.0+

A collection of spatial input events that target a specific view.

## Declaration

```swift
struct SpatialEventCollection
```

<a id="overview"></a>

## Overview

You receive a structure of this type as an input to the [onChanged(\_:)](gesture/onchanged%28__%29.md) or [onEnded(\_:)](gesture/onended%28__%29.md) method of a [SpatialEventGesture](spatialeventgesture.md). The structure contains a collection of [SpatialEventCollection.Event](spatialeventcollection/event.md) values that correspond to ongoing input events. You can look up a specific event in the collection by its [id](spatialeventcollection/event/id-swift.property.md) value or iterate over all events in the collection to apply logic depending on the event’s state.

## Topics

### Accessing the collection’s events

- [SpatialEventCollection.Event](spatialeventcollection/event.md): A spatial event generated from an input like a touch or click that can drive gestures in the system.
- [subscript(\_:)](spatialeventcollection/subscript%28__%29.md): Retrieves an event using its unique identifier.

### Iterating over events in the collection

- [makeIterator()](spatialeventcollection/makeiterator%28%29.md): Makes an iterator over all events in the collection.
- [SpatialEventCollection.Iterator](spatialeventcollection/iterator.md): An iterator over all events in the collection.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Recognizing spatial events

- [SpatialEventGesture](spatialeventgesture.md): A gesture that provides information about ongoing spatial events like clicks and touches.
- [Chirality](chirality.md): The chirality, or handedness, of a pose.
