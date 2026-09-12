> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/dragstate](https://developer.apple.com/documentation/uikit/uitableviewcell/dragstate)

# UITableViewCell.DragState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the current state of a row involved in a drag operation.

## Declaration

```swift
enum DragState
```

## Topics

### Constants

- [UITableViewCell.DragState.none](dragstate/none.md): The cell isn’t involved in a drag operation.
- [UITableViewCell.DragState.lifting](dragstate/lifting.md): The cell is being animated off of the table’s surface.
- [UITableViewCell.DragState.dragging](dragstate/dragging.md): The cell is currently being dragged.

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

### Dragging the row

- [userInteractionEnabledWhileDragging](userinteractionenabledwhiledragging.md): A Boolean value indicating whether users can interact with a cell while it is being dragged.
- [dragStateDidChange(\_:)](dragstatedidchange%28__%29.md): Notifies the cell that its drag status changed.

# UITableViewCellDragState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the current state of a row involved in a drag operation.

## Declaration

```objectivec
enum UITableViewCellDragState : NSInteger;
```

## Topics

### Constants

- [UITableViewCellDragStateNone](dragstate/none.md): The cell isn’t involved in a drag operation.
- [UITableViewCellDragStateLifting](dragstate/lifting.md): The cell is being animated off of the table’s surface.
- [UITableViewCellDragStateDragging](dragstate/dragging.md): The cell is currently being dragged.

## See Also

### Dragging the row

- [userInteractionEnabledWhileDragging](userinteractionenabledwhiledragging.md): A Boolean value indicating whether users can interact with a cell while it is being dragged.
- [dragStateDidChange:](dragstatedidchange%28__%29.md): Notifies the cell that its drag status changed.
