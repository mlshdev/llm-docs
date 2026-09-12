> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellconfigurationstate-swift.struct](https://developer.apple.com/documentation/uikit/uicellconfigurationstate-swift.struct)

# UICellConfigurationState

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A structure that encapsulates a cell’s state.

## Declaration

```swift
struct UICellConfigurationState
```

<a id="overview"></a>

## Overview

A cell configuration state encompasses a trait collection along with all of the common states that affect a cell’s appearance — view states like selected, focused, or disabled, and cell states like editing or swiped. A cell configuration state encapsulates the inputs that configure a cell for any possible state or combination of states. You use a cell configuration state with background and content configurations to obtain the default appearance for a specific state.

Typically, you don’t create a configuration state yourself. To obtain a configuration state, override the [updateConfiguration(using:)](uicollectionviewcell/updateconfiguration%28using_%29.md) method in your cell subclass and use the state parameter. Outside of this method, you can get a cell’s configuration state by using its [configurationState](uicollectionviewcell/configurationstate-4u37h.md) property.

You can create your own custom states to add to a cell configuration state by defining a custom state key using [UIConfigurationStateCustomKey](uiconfigurationstatecustomkey.md).

## Topics

### Managing view configuration states

- [isSelected](uicellconfigurationstate-swift.struct/isselected.md): A Boolean value that indicates whether the cell is in a selected state.
- [isHighlighted](uicellconfigurationstate-swift.struct/ishighlighted.md): A Boolean value that indicates whether the cell is in a highlighted state.
- [isFocused](uicellconfigurationstate-swift.struct/isfocused.md): A Boolean value that indicates whether the cell is in a focused state.
- [isDisabled](uicellconfigurationstate-swift.struct/isdisabled.md): A Boolean value that indicates whether the cell is in a disabled state.
- [isPinned](uicellconfigurationstate-swift.struct/ispinned.md): A Boolean value that indicates whether the view is in a pinned state.

### Managing cell configuration states

- [isEditing](uicellconfigurationstate-swift.struct/isediting.md): A Boolean value that indicates whether the cell is in editing mode.
- [isSwiped](uicellconfigurationstate-swift.struct/isswiped.md): A Boolean value that indicates whether the cell is in a swiped state.
- [isExpanded](uicellconfigurationstate-swift.struct/isexpanded.md): A Boolean value that indicates whether the cell is in an expanded state, such as in an outline.
- [isReordering](uicellconfigurationstate-swift.struct/isreordering.md): A Boolean value that indicates whether the cell is reordering.
- [cellDragState](uicellconfigurationstate-swift.struct/celldragstate.md): The cell’s drag state.
- [cellDropState](uicellconfigurationstate-swift.struct/celldropstate.md): The cell’s drop state.
- [UICellConfigurationState.DragState](uicellconfigurationstate-swift.struct/dragstate.md): Constants that describe the cell’s drag state.
- [UICellConfigurationState.DropState](uicellconfigurationstate-swift.struct/dropstate.md): Constants that describe the cell’s drop state.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [UIConfigurationState](uiconfigurationstate-8d7pd.md)

## See Also

### Configuration states

- [UIViewConfigurationState](uiviewconfigurationstate-swift.struct.md): A structure that encapsulates a view’s state.
- [UIConfigurationState](uiconfigurationstate-8d7pd.md): The requirements for an object that encapsulates a view’s state.
- [UIConfigurationStateCustomKey](uiconfigurationstatecustomkey.md): A key that defines a custom state for a view.
