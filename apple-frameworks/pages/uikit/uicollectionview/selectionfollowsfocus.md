> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/selectionfollowsfocus](https://developer.apple.com/documentation/uikit/uicollectionview/selectionfollowsfocus)

# selectionFollowsFocus (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that triggers an automatic selection when focus moves to a cell.

## Declaration

```swift
var selectionFollowsFocus: Bool { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

The system determines the default value of this property according to the platform and other properties of the collection view.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItem(at:animated:scrollPosition:)](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItem(at:animated:)](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.

# selectionFollowsFocus (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that triggers an automatic selection when focus moves to a cell.

## Declaration

```objectivec
@property (nonatomic) BOOL selectionFollowsFocus;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

The system determines the default value of this property according to the platform and other properties of the collection view.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItemAtIndexPath:animated:scrollPosition:](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItemAtIndexPath:animated:](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
