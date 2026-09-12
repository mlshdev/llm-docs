> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/allowsselection](https://developer.apple.com/documentation/uikit/uicollectionview/allowsselection)

# allowsSelection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether users can select items in the collection view.

## Declaration

```swift
var allowsSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), users can select items. If you want more fine-grained control over the selection of items, you must provide a delegate object and implement the appropriate methods of the [UICollectionViewDelegate](../uicollectionviewdelegate.md) protocol.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItem(at:animated:scrollPosition:)](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItem(at:animated:)](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.

# allowsSelection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether users can select items in the collection view.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsSelection;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), users can select items. If you want more fine-grained control over the selection of items, you must provide a delegate object and implement the appropriate methods of the [UICollectionViewDelegate](../uicollectionviewdelegate.md) protocol.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItemAtIndexPath:animated:scrollPosition:](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItemAtIndexPath:animated:](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
