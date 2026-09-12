> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessoryaction](https://developer.apple.com/documentation/uikit/uitableviewcell/accessoryaction)

# accessoryAction

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The selector defining the action message to invoke when users tap the accessory view.

> Instead, use [tableView:commitEditingStyle:forRowAtIndexPath:](../uitableviewdatasource/tableview%28__commit_forrowat_%29.md) or [tableView:accessoryButtonTappedForRowWithIndexPath:](../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) for handling taps on cells.

## Declaration

```objectivec
@property (nonatomic, nullable) SEL accessoryAction;
```

<a id="Discussion"></a>

## Discussion

If you specify a selector for the accessory action, a message is sent only if the accessory view is a detail disclosure button—that is, the cell’s [accessoryType](accessorytype-swift.property.md) property is assigned a value of[UITableViewCellAccessoryDetailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md). If the value of this property is `NULL`, no action message is sent.

The accessory view is a `UITableViewCell`-defined control, framework control, or custom control on the right side of the cell. It is often used to display a new view related to the selected cell. If the accessory view inherits from [UIControl](../uicontrol.md), you may set a target and action through the [addTarget:action:forControlEvents:](../uicontrol/addtarget%28__action_for_%29.md) method. See [accessoryView](accessoryview.md) for more information.

## See Also

### Deprecated

- [textLabel](textlabel.md): Deprecated. The label to use for the main textual content of the table cell.
- [detailTextLabel](detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](imageview.md): Deprecated. The image view of the table cell.
- [initWithFrame:reuseIdentifier:](initwithframe_reuseidentifier_.md): Deprecated. Initializes and returns a table cell object.
- [text](text.md): Deprecated. The text of the cell.
- [font](font.md): Deprecated. The font of the title.
- [textAlignment](textalignment.md): Deprecated. A constant that specifies the alignment of text in the cell.
- [textColor](textcolor.md): Deprecated. The color of the title text.
- [selectedTextColor](selectedtextcolor.md): Deprecated. The color of the title text when the cell is selected.
- [lineBreakMode](linebreakmode.md): Deprecated. The mode for wrapping and truncating text in the cell.
- [image](image.md): Deprecated. The image to use as content for the cell.
- [selectedImage](selectedimage.md): Deprecated. The image to use a cell content when the cell is selected.
- [hidesAccessoryWhenEditing](hidesaccessorywhenediting.md): Deprecated. A Boolean value that determines whether the accessory view is hidden when the cell is being edited.
- [target](target.md): Deprecated. The target object to receive action messages.
- [editAction](editaction.md): Deprecated. The selector defining the action message to invoke when users tap the insert or delete button.
