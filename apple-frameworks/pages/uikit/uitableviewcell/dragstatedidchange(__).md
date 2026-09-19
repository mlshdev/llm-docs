> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitableviewcell/dragstatedidchange(_:)

# dragStateDidChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the cell that its drag status changed.

## Declaration

```swift
func dragStateDidChange(_ dragState: UITableViewCell.DragState)
```

## Parameters

- `dragState`: The new drag state for the cell.

## See Also

### Dragging the row

- [userInteractionEnabledWhileDragging](userinteractionenabledwhiledragging.md): A Boolean value indicating whether users can interact with a cell while it is being dragged.
- [UITableViewCell.DragState](dragstate.md): Constants indicating the current state of a row involved in a drag operation.

# dragStateDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the cell that its drag status changed.

## Declaration

```objectivec
- (void) dragStateDidChange:(UITableViewCellDragState) dragState;
```

## Parameters

- `dragState`: The new drag state for the cell.

## See Also

### Dragging the row

- [userInteractionEnabledWhileDragging](userinteractionenabledwhiledragging.md): A Boolean value indicating whether users can interact with a cell while it is being dragged.
- [UITableViewCellDragState](dragstate.md): Constants indicating the current state of a row involved in a drag operation.
