> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellconfigurationstate-swift.struct/dropstate](https://developer.apple.com/documentation/uikit/uicellconfigurationstate-swift.struct/dropstate)

# UICellConfigurationState.DropState

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Constants that describe the cell’s drop state.

## Declaration

```swift
enum DropState
```

## Topics

### Drop states

- [UICellConfigurationState.DropState.none](dropstate/none.md): The system hasn’t associated the cell with a drag session.
- [UICellConfigurationState.DropState.notTargeted](dropstate/nottargeted.md): A drag session is active and can perform a drop in the cell’s container, but the cell itself isn’t the drop target.
- [UICellConfigurationState.DropState.targeted](dropstate/targeted.md): The cell is the drop target for a drag session.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Managing cell configuration states

- [isEditing](isediting.md): A Boolean value that indicates whether the cell is in editing mode.
- [isSwiped](isswiped.md): A Boolean value that indicates whether the cell is in a swiped state.
- [isExpanded](isexpanded.md): A Boolean value that indicates whether the cell is in an expanded state, such as in an outline.
- [isReordering](isreordering.md): A Boolean value that indicates whether the cell is reordering.
- [cellDragState](celldragstate.md): The cell’s drag state.
- [cellDropState](celldropstate.md): The cell’s drop state.
- [UICellConfigurationState.DragState](dragstate.md): Constants that describe the cell’s drag state.
