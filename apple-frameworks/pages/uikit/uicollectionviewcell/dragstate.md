> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/dragstate](https://developer.apple.com/documentation/uikit/uicollectionviewcell/dragstate)

# UICollectionViewCell.DragState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the current state of the drag operation.

## Declaration

```swift
enum DragState
```

## Topics

### Constants

- [UICollectionViewCell.DragState.none](dragstate/none.md): The cell isn’t involved in a drag.
- [UICollectionViewCell.DragState.lifting](dragstate/lifting.md): The cell is being animated off of the surface of the collection view.
- [UICollectionViewCell.DragState.dragging](dragstate/dragging.md): The cell is being dragged.

### Initializers

- [init(rawValue:)](dragstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing drag state changes

- [dragStateDidChange(\_:)](dragstatedidchange%28__%29.md): Called when the drag state of the cell changes.

# UICollectionViewCellDragState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the current state of the drag operation.

## Declaration

```objectivec
enum UICollectionViewCellDragState : NSInteger;
```

## Topics

### Constants

- [UICollectionViewCellDragStateNone](dragstate/none.md): The cell isn’t involved in a drag.
- [UICollectionViewCellDragStateLifting](dragstate/lifting.md): The cell is being animated off of the surface of the collection view.
- [UICollectionViewCellDragStateDragging](dragstate/dragging.md): The cell is being dragged.

## See Also

### Managing drag state changes

- [dragStateDidChange:](dragstatedidchange%28__%29.md): Called when the drag state of the cell changes.
