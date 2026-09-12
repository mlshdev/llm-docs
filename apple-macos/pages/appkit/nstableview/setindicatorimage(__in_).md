> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/setindicatorimage(_:in:)](https://developer.apple.com/documentation/appkit/nstableview/setindicatorimage(_:in:))

# setIndicatorImage(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the indicator image of the specified column.

## Declaration

```swift
func setIndicatorImage(_ image: NSImage?, in tableColumn: NSTableColumn)
```

## Parameters

- `image`: The indicator image for the column.
- `tableColumn`: The table column.

<a id="Discussion"></a>

## Discussion

The default sorting order indicators are available as named `NSImage` objects. These images are accessed using `[NSImage imageNamed:]` passing either `@"NSAscendingSortIndicator"` (the “^” icon), and `@"NSDescendingSortIndicator"` (the “v” icon).

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
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.

# setIndicatorImage:inTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the indicator image of the specified column.

## Declaration

```objectivec
- (void) setIndicatorImage:(NSImage *) image inTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `image`: The indicator image for the column.
- `tableColumn`: The table column.

<a id="Discussion"></a>

## Discussion

The default sorting order indicators are available as named `NSImage` objects. These images are accessed using `[NSImage imageNamed:]` passing either `@"NSAscendingSortIndicator"` (the “^” icon), and `@"NSDescendingSortIndicator"` (the “v” icon).

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
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
