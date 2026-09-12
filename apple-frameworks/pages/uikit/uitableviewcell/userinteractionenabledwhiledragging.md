> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/userinteractionenabledwhiledragging](https://developer.apple.com/documentation/uikit/uitableviewcell/userinteractionenabledwhiledragging)

# userInteractionEnabledWhileDragging (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether users can interact with a cell while it is being dragged.

## Declaration

```swift
var userInteractionEnabledWhileDragging: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Dragging the row

- [dragStateDidChange(\_:)](dragstatedidchange%28__%29.md): Notifies the cell that its drag status changed.
- [UITableViewCell.DragState](dragstate.md): Constants indicating the current state of a row involved in a drag operation.

# userInteractionEnabledWhileDragging (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether users can interact with a cell while it is being dragged.

## Declaration

```objectivec
@property (nonatomic) BOOL userInteractionEnabledWhileDragging;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Dragging the row

- [dragStateDidChange:](dragstatedidchange%28__%29.md): Notifies the cell that its drag status changed.
- [UITableViewCellDragState](dragstate.md): Constants indicating the current state of a row involved in a drag operation.
