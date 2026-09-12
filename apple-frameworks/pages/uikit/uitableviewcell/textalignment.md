> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/textalignment](https://developer.apple.com/documentation/uikit/uitableviewcell/textalignment)

# textAlignment

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A constant that specifies the alignment of text in the cell.

> Instead, set the text alignment of the [UILabel](../uilabel.md) objects assigned to the [textLabel](textlabel.md) and [detailTextLabel](detailtextlabel.md) properties.

## Declaration

```objectivec
@property (nonatomic) NSTextAlignment textAlignment;
```

<a id="Discussion"></a>

## Discussion

If the value of the property is `nil` (the default), the title is left-aligned ([UITextAlignmentLeft](../uitextalignment/uitextalignmentleft.md)). See the descriptions of the [UITextAlignment](../uitextalignment.md) constants for alternative text alignments.

## See Also

### Deprecated

- [textLabel](textlabel.md): Deprecated. The label to use for the main textual content of the table cell.
- [detailTextLabel](detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](imageview.md): Deprecated. The image view of the table cell.
- [initWithFrame:reuseIdentifier:](initwithframe_reuseidentifier_.md): Deprecated. Initializes and returns a table cell object.
- [text](text.md): Deprecated. The text of the cell.
- [font](font.md): Deprecated. The font of the title.
- [textColor](textcolor.md): Deprecated. The color of the title text.
- [selectedTextColor](selectedtextcolor.md): Deprecated. The color of the title text when the cell is selected.
- [lineBreakMode](linebreakmode.md): Deprecated. The mode for wrapping and truncating text in the cell.
- [image](image.md): Deprecated. The image to use as content for the cell.
- [selectedImage](selectedimage.md): Deprecated. The image to use a cell content when the cell is selected.
- [hidesAccessoryWhenEditing](hidesaccessorywhenediting.md): Deprecated. A Boolean value that determines whether the accessory view is hidden when the cell is being edited.
- [target](target.md): Deprecated. The target object to receive action messages.
- [editAction](editaction.md): Deprecated. The selector defining the action message to invoke when users tap the insert or delete button.
- [accessoryAction](accessoryaction.md): Deprecated. The selector defining the action message to invoke when users tap the accessory view.
