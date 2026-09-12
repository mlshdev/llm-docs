> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/indicatorimage(in:)](https://developer.apple.com/documentation/appkit/nstableview/indicatorimage(in:))

# indicatorImage(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the indicator image of the specified table column.

## Declaration

```swift
func indicatorImage(in tableColumn: NSTableColumn) -> NSImage?
```

## Parameters

- `tableColumn`: A table column in the table view.

<a id="Discussion"></a>

## Discussion

An indicator image is an arbitrary (small) image that is rendered on the right side of the column header. An example of its use is in Mail to indicate the sorting direction of the currently sorted column in a mailbox.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableView.Style](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# indicatorImageInTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the indicator image of the specified table column.

## Declaration

```objectivec
- (NSImage *) indicatorImageInTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `tableColumn`: A table column in the table view.

<a id="Discussion"></a>

## Discussion

An indicator image is an arbitrary (small) image that is rendered on the right side of the column header. An example of its use is in Mail to indicate the sorting direction of the currently sorted column in a mailbox.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [NSTableViewStyle](style-swift.enum.md): Contains the possible style values for a table view.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
