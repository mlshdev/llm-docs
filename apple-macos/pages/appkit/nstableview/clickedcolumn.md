> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/clickedcolumn](https://developer.apple.com/documentation/appkit/nstableview/clickedcolumn)

# clickedColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column the user clicked.

## Declaration

```swift
var clickedColumn: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the index in the [tableColumns](tablecolumns.md) array of the column that the user clicked. The value is `-1` when the user clicks in an area of the table view that is not occupied by columns or when the user clicks a row that is a group separator.

The value of this property is meaningful in the target object’s implementation of the action and double-action methods. You can also use the value to determine which contextual menu to display when the user Control-clicks in a table. Note that the `clickedColumn` value remains valid when the menu item sends the action message. To see an example of using `clickedColumn` in the implementation of a contextual menu, download the [DragNDropOutlineView: implementing drag and drop in an NSOutlineView](https://developer.apple.com/library/archive/samplecode/DragNDropOutlineView/Introduction/Intro.html#//apple_ref/doc/uid/DTS40008831) sample project.

## See Also

### Related Documentation

- [action](../nscontrol/action.md): The default action-message selector associated with the control.

### Target-action Behavior

- [doubleAction](doubleaction.md): The message sent to the table view’s target when the user double-clicks a cell or column header.
- [clickedRow](clickedrow.md): The index of the row the user clicked.

# clickedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column the user clicked.

## Declaration

```objectivec
@property (readonly) NSInteger clickedColumn;
```

<a id="Discussion"></a>

## Discussion

This property contains the index in the [tableColumns](tablecolumns.md) array of the column that the user clicked. The value is `-1` when the user clicks in an area of the table view that is not occupied by columns or when the user clicks a row that is a group separator.

The value of this property is meaningful in the target object’s implementation of the action and double-action methods. You can also use the value to determine which contextual menu to display when the user Control-clicks in a table. Note that the `clickedColumn` value remains valid when the menu item sends the action message. To see an example of using `clickedColumn` in the implementation of a contextual menu, download the [DragNDropOutlineView: implementing drag and drop in an NSOutlineView](https://developer.apple.com/library/archive/samplecode/DragNDropOutlineView/Introduction/Intro.html#//apple_ref/doc/uid/DTS40008831) sample project.

## See Also

### Related Documentation

- [action](../nscontrol/action.md): The default action-message selector associated with the control.

### Target-action Behavior

- [doubleAction](doubleaction.md): The message sent to the table view’s target when the user double-clicks a cell or column header.
- [clickedRow](clickedrow.md): The index of the row the user clicked.
