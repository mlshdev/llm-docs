> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/allowsselectionduringediting](https://developer.apple.com/documentation/uikit/uicollectionview/allowsselectionduringediting)

# allowsSelectionDuringEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether users can select cells while the collection view is in editing mode.

## Declaration

```swift
var allowsSelectionDuringEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItem(at:animated:scrollPosition:)](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItem(at:animated:)](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.

# allowsSelectionDuringEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether users can select cells while the collection view is in editing mode.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsSelectionDuringEditing;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItemAtIndexPath:animated:scrollPosition:](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItemAtIndexPath:animated:](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
