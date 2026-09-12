> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/target](https://developer.apple.com/documentation/uikit/uitableviewcell/target)

# target

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The target object to receive action messages.

> Instead, use [tableView:commitEditingStyle:forRowAtIndexPath:](../uitableviewdatasource/tableview%28__commit_forrowat_%29.md) or [tableView:accessoryButtonTappedForRowWithIndexPath:](../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) for handling taps on cells.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

The target object receives action messages when the user taps a cell’s insert button, delete button, or accessory view. The default value is `nil`, which tells the application to go up the responder chain to find a target. Note that the target is a weak reference.

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
- [editAction](editaction.md): Deprecated. The selector defining the action message to invoke when users tap the insert or delete button.
- [accessoryAction](accessoryaction.md): Deprecated. The selector defining the action message to invoke when users tap the accessory view.
