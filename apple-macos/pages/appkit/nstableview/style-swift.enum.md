> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/style-swift.enum](https://developer.apple.com/documentation/appkit/nstableview/style-swift.enum)

# NSTableView.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Contains the possible style values for a table view.

## Declaration

```swift
enum Style
```

## Topics

### Table Styles

- [NSTableView.Style.automatic](style-swift.enum/automatic.md): The system resolves the table view style based on the table view hierarchy.
- [NSTableView.Style.fullWidth](style-swift.enum/fullwidth.md): The table view style resolves to a full-width style.
- [NSTableView.Style.inset](style-swift.enum/inset.md): The table view style resolves to an inset style.
- [NSTableView.Style.sourceList](style-swift.enum/sourcelist.md): The table view style resolves to a source-list style.
- [NSTableView.Style.plain](style-swift.enum/plain.md): The table view style resolves to a plain style.

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImage(in:)](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage(\_:in:)](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.

# NSTableViewStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Contains the possible style values for a table view.

## Declaration

```objectivec
enum NSTableViewStyle : NSInteger;
```

## Topics

### Table Styles

- [NSTableViewStyleAutomatic](style-swift.enum/automatic.md): The system resolves the table view style based on the table view hierarchy.
- [NSTableViewStyleFullWidth](style-swift.enum/fullwidth.md): The table view style resolves to a full-width style.
- [NSTableViewStyleInset](style-swift.enum/inset.md): The table view style resolves to an inset style.
- [NSTableViewStyleSourceList](style-swift.enum/sourcelist.md): The table view style resolves to a source-list style.
- [NSTableViewStylePlain](style-swift.enum/plain.md): The table view style resolves to a plain style.

## See Also

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells.
- [rowHeight](rowheight.md): The height of each row in the table.
- [backgroundColor](backgroundcolor.md): The color used to draw the background of the table.
- [usesAlternatingRowBackgroundColors](usesalternatingrowbackgroundcolors.md): A Boolean value indicating whether the table view uses alternating row colors for its background.
- [style](style-swift.property.md): The style that the table view uses.
- [effectiveStyle](effectivestyle.md): The effective style that the table uses.
- [selectionHighlightStyle](selectionhighlightstyle-swift.property.md): The selection highlight style used by the table view to indicate row and column selection.
- [gridColor](gridcolor.md): The color used to draw grid lines.
- [gridStyleMask](gridstylemask.md): The grid lines drawn by the table view.
- [indicatorImageInTableColumn:](indicatorimage%28in_%29.md): Returns the indicator image of the specified table column.
- [setIndicatorImage:inTableColumn:](setindicatorimage%28__in_%29.md): Sets the indicator image of the specified column.
