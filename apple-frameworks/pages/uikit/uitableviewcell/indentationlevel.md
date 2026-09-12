> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/indentationlevel](https://developer.apple.com/documentation/uikit/uitableviewcell/indentationlevel)

# indentationLevel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The indentation level of the cell’s content.

## Declaration

```swift
var indentationLevel: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of the property is zero (no indentation). Assigning a positive value to this property indents the cell’s content from the left edge of the cell separator. The amount of indentation is equal to the indentation level multiplied by the value in the [indentationWidth](indentationwidth.md) property.

## See Also

### Managing content indentation

- [indentationWidth](indentationwidth.md): The width for each level of indentation of a cell’s content.
- [shouldIndentWhileEditing](shouldindentwhileediting.md): A Boolean value that controls whether the cell background is indented when the table view is in editing mode.
- [separatorInset](separatorinset.md): The inset values for the separator line drawn beneath the cell.
- [UITableViewCell.SeparatorStyle](separatorstyle.md): The style for cells to use as separators.

# indentationLevel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The indentation level of the cell’s content.

## Declaration

```objectivec
@property (nonatomic) NSInteger indentationLevel;
```

<a id="Discussion"></a>

## Discussion

The default value of the property is zero (no indentation). Assigning a positive value to this property indents the cell’s content from the left edge of the cell separator. The amount of indentation is equal to the indentation level multiplied by the value in the [indentationWidth](indentationwidth.md) property.

## See Also

### Managing content indentation

- [indentationWidth](indentationwidth.md): The width for each level of indentation of a cell’s content.
- [shouldIndentWhileEditing](shouldindentwhileediting.md): A Boolean value that controls whether the cell background is indented when the table view is in editing mode.
- [separatorInset](separatorinset.md): The inset values for the separator line drawn beneath the cell.
- [UITableViewCellSeparatorStyle](separatorstyle.md): The style for cells to use as separators.
