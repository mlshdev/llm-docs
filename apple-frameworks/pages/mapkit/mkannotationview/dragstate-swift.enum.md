> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/dragstate-swift.enum](https://developer.apple.com/documentation/mapkit/mkannotationview/dragstate-swift.enum)

# MKAnnotationView.DragState (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Constants that indicate the drag state of an annotation view.

## Declaration

```swift
enum DragState
```

## Topics

### Constants

- [MKAnnotationView.DragState.none](dragstate-swift.enum/none.md): An annotation view that doesn’t have a drag operation.
- [MKAnnotationView.DragState.starting](dragstate-swift.enum/starting.md): An annotation view begins dragging.
- [MKAnnotationView.DragState.dragging](dragstate-swift.enum/dragging.md): An annotation view is actively dragging.
- [MKAnnotationView.DragState.canceling](dragstate-swift.enum/canceling.md): An annotation view cancels drag operation.
- [MKAnnotationView.DragState.ending](dragstate-swift.enum/ending.md): An annotation view ends dragging.

### Initializers

- [init(rawValue:)](dragstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MKAnnotationViewDragState (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Constants that indicate the drag state of an annotation view.

## Declaration

```objectivec
enum MKAnnotationViewDragState : NSUInteger;
```

## Topics

### Constants

- [MKAnnotationViewDragStateNone](dragstate-swift.enum/none.md): An annotation view that doesn’t have a drag operation.
- [MKAnnotationViewDragStateStarting](dragstate-swift.enum/starting.md): An annotation view begins dragging.
- [MKAnnotationViewDragStateDragging](dragstate-swift.enum/dragging.md): An annotation view is actively dragging.
- [MKAnnotationViewDragStateCanceling](dragstate-swift.enum/canceling.md): An annotation view cancels drag operation.
- [MKAnnotationViewDragStateEnding](dragstate-swift.enum/ending.md): An annotation view ends dragging.
