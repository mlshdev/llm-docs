> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/initwithframe:reuseidentifier:](https://developer.apple.com/documentation/uikit/uitableviewcell/initwithframe:reuseidentifier:)

# initWithFrame:reuseIdentifier:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a table cell object.

> Use [initWithStyle:reuseIdentifier:](init%28style_reuseidentifier_%29.md) instead.

## Declaration

```objectivec
- (id) initWithFrame:(CGRect) frame reuseIdentifier:(NSString *) reuseIdentifier;
```

## Parameters

- `frame`: The frame rectangle of the cell. Because the table view automatically positions the cell and makes it the optimal size, you can pass in `CGRectZero` in most cases. However, if you have a custom cell with multiple subviews, each with its own autoresizing mask, you must specify a non-zero frame rectangle; this allows the table view to position the subviews automatically as the cell changes size.
- `reuseIdentifier`: A string used to identify the cell object if it is to be reused for drawing multiple rows of a table view. Pass `nil` if the cell object is not to be reused.

<a id="return-value"></a>

## Return Value

An initialized [UITableViewCell](../uitableviewcell.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class. The reuse identifier is associated with those cells (rows) of a table view that have the same general configuration, minus cell content. In its implementation of [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md), the table view’s delegate calls the `UITableView` method [dequeueReusableCellWithIdentifier:](../uitableview/dequeuereusablecell%28withidentifier_%29.md), passing in a reuse identifier, to obtain the cell object to use as the basis for the current row.

## See Also

### Related Documentation

- [reuseIdentifier](reuseidentifier.md): A string for identifying a reusable cell.

### Deprecated

- [textLabel](textlabel.md): Deprecated. The label to use for the main textual content of the table cell.
- [detailTextLabel](detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](imageview.md): Deprecated. The image view of the table cell.
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
- [accessoryAction](accessoryaction.md): Deprecated. The selector defining the action message to invoke when users tap the accessory view.
