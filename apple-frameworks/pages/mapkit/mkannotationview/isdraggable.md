> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/isdraggable](https://developer.apple.com/documentation/mapkit/mkannotationview/isdraggable)

# isDraggable (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

A Boolean value that indicates whether the annotation view is draggable.

## Declaration

```swift
var isDraggable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) makes an annotation draggable by the user. If [true](https://developer.apple.com/documentation/swift/true), the associated annotation object needs to also implement the [setCoordinate:](../mkannotation/setcoordinate_.md) method. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Setting this property to [true](https://developer.apple.com/documentation/swift/true) lets the map view know that the annotation is draggable. You can’t conditionalize drag operations by attempting to stop an operation the user initiates. Doing so can lead to undefined behavior. After it begins, the drag operation needs to continue to completion.

## See Also

### Supporting drag operations

- [setDragState(\_:animated:)](setdragstate%28__animated_%29.md): Sets the drag state for the annotation view.
- [dragState](dragstate-swift.property.md): The drag state of the annotation view.

# draggable (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

A Boolean value that indicates whether the annotation view is draggable.

## Declaration

```objectivec
@property (nonatomic, getter=isDraggable) BOOL draggable;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) makes an annotation draggable by the user. If [true](https://developer.apple.com/documentation/swift/true), the associated annotation object needs to also implement the [setCoordinate:](../mkannotation/setcoordinate_.md) method. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Setting this property to [true](https://developer.apple.com/documentation/swift/true) lets the map view know that the annotation is draggable. You can’t conditionalize drag operations by attempting to stop an operation the user initiates. Doing so can lead to undefined behavior. After it begins, the drag operation needs to continue to completion.

## See Also

### Supporting drag operations

- [setDragState:animated:](setdragstate%28__animated_%29.md): Sets the drag state for the annotation view.
- [dragState](dragstate-swift.property.md): The drag state of the annotation view.
