> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/font](https://developer.apple.com/documentation/uikit/uitableviewcell/font)

# font

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The font of the title.

> Instead, set the fonts of the [UILabel](../uilabel.md) objects assigned to the [textLabel](textlabel.md) and [detailTextLabel](detailtextlabel.md) properties.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIFont * font;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil` (the default), [UITableViewCell](../uitableviewcell.md) uses a standard font optimized for the device.

## See Also

### Deprecated

- [textLabel](textlabel.md): Deprecated. The label to use for the main textual content of the table cell.
- [detailTextLabel](detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](imageview.md): Deprecated. The image view of the table cell.
- [initWithFrame:reuseIdentifier:](initwithframe_reuseidentifier_.md): Deprecated. Initializes and returns a table cell object.
- [text](text.md): Deprecated. The text of the cell.
- [textAlignment](textalignment.md): Deprecated. A constant that specifies the alignment of text in the cell.
- [textColor](textcolor.md): Deprecated. The color of the title text.
- [selectedTextColor](selectedtextcolor.md): Deprecated. The color of the title text when the cell is selected.
- [lineBreakMode](linebreakmode.md): Deprecated. The mode for wrapping and truncating text in the cell.
- [image](image.md): Deprecated. The image to use as content for the cell.
- [selectedImage](selectedimage.md): Deprecated. The image to use a cell content when the cell is selected.
- [hidesAccessoryWhenEditing](hidesaccessorywhenediting.md): Deprecated. A Boolean value that determines whether the accessory view is hidden when the cell is being edited.
- [target](target.md): Deprecated. The target object to receive action messages.
- [editAction](editaction.md): Deprecated. The selector defining the action message to invoke when users tap the insert or delete button.
- [accessoryAction](accessoryaction.md): Deprecated. The selector defining the action message to invoke when users tap the accessory view.
