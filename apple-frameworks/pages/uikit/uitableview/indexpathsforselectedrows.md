> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/indexpathsforselectedrows](https://developer.apple.com/documentation/uikit/uitableview/indexpathsforselectedrows)

# indexPathsForSelectedRows (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index paths that represent the selected rows.

## Declaration

```swift
var indexPathsForSelectedRows: [IndexPath]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of index-path objects each identifying a row through its section and row index. The value of this property is `nil` if there are no selected rows.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [selectRow(at:animated:scrollPosition:)](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRow(at:animated:)](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [selectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.

# indexPathsForSelectedRows (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index paths that represent the selected rows.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSIndexPath *> * indexPathsForSelectedRows;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of index-path objects each identifying a row through its section and row index. The value of this property is `nil` if there are no selected rows.

## See Also

### Selecting rows

- [indexPathForSelectedRow](indexpathforselectedrow.md): An index path that identifies the row and section of the selected row.
- [selectRowAtIndexPath:animated:scrollPosition:](selectrow%28at_animated_scrollposition_%29.md): Selects a row in the table view that an index path identifies, optionally scrolling the row to a location in the table view.
- [deselectRowAtIndexPath:animated:](deselectrow%28at_animated_%29.md): Deselects a row that an index path identifies, with an option to animate the deselection.
- [allowsSelection](allowsselection.md): A Boolean value that determines whether users can select a row.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one row outside of editing mode.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the table view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [UITableViewSelectionDidChangeNotification](selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
