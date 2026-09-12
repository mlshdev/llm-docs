> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/indexpathsforselecteditems](https://developer.apple.com/documentation/uikit/uicollectionview/indexpathsforselecteditems)

# indexPathsForSelectedItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index paths for the selected items.

## Declaration

```swift
var indexPathsForSelectedItems: [IndexPath]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which corresponds to a single selected item. If there are no selected items, the value of this property is `nil`.

## See Also

### Selecting cells

- [selectItem(at:animated:scrollPosition:)](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItem(at:animated:)](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.

# indexPathsForSelectedItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index paths for the selected items.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSIndexPath *> * indexPathsForSelectedItems;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which corresponds to a single selected item. If there are no selected items, the value of this property is `nil`.

## See Also

### Selecting cells

- [selectItemAtIndexPath:animated:scrollPosition:](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [deselectItemAtIndexPath:animated:](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
