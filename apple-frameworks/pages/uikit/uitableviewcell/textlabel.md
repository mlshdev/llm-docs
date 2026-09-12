> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/textlabel](https://developer.apple.com/documentation/uikit/uitableviewcell/textlabel)

# textLabel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The label to use for the main textual content of the table cell.

> Use a content configuration to manage the cell’s text instead. Use [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md) to get a default list content configuration, set your primary text to the [text](../uilistcontentconfiguration-swift.struct/text.md) property of the configuration, and apply the configuration by setting it to the [contentConfiguration](contentconfiguration-9ktox.md) property of the cell.

## Declaration

```swift
var textLabel: UILabel? { get }
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Filling a table with data](../filling-a-table-with-data.md)

<a id="Discussion"></a>

## Discussion

This property holds the main label of the cell. [UITableViewCell](../uitableviewcell.md) adds an appropriate label when you create the cell in a particular cell style. See [UITableViewCell.CellStyle](cellstyle.md) for descriptions of the main label in currently defined cell styles.

This property is mutually exclusive with a content configuration. Setting a non-`nil` value for [contentConfiguration](contentconfiguration-9ktox.md) resets this property to `nil`.

## See Also

### Related Documentation

- [init(style:reuseIdentifier:)](init%28style_reuseidentifier_%29.md): Initializes a table cell with a style and a reuse identifier and returns it to the caller.

### Deprecated

- [detailTextLabel](detailtextlabel.md): Deprecated. The secondary label of the table cell, if one exists.
- [imageView](imageview.md): Deprecated. The image view of the table cell.

# textLabel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The label to use for the main textual content of the table cell.

> Use a content configuration to manage the cell’s text instead. Use [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md) to get a default list content configuration, set your primary text to the [text](../uilistcontentconfiguration-swift.struct/text.md) property of the configuration, and apply the configuration by setting it to the [contentConfiguration](contentconfiguration-9ktox.md) property of the cell.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UILabel * textLabel;
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Filling a table with data](../filling-a-table-with-data.md)

<a id="Discussion"></a>

## Discussion

This property holds the main label of the cell. [UITableViewCell](../uitableviewcell.md) adds an appropriate label when you create the cell in a particular cell style. See [UITableViewCellStyle](cellstyle.md) for descriptions of the main label in currently defined cell styles.

This property is mutually exclusive with a content configuration. Setting a non-`nil` value for [contentConfiguration](contentconfiguration-9ktox.md) resets this property to `nil`.

## See Also

### Related Documentation

- [initWithStyle:reuseIdentifier:](init%28style_reuseidentifier_%29.md): Initializes a table cell with a style and a reuse identifier and returns it to the caller.

### Deprecated

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
- [accessoryAction](accessoryaction.md): Deprecated. The selector defining the action message to invoke when users tap the accessory view.
