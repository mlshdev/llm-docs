> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/prefersallcolumnuserresizing](https://developer.apple.com/documentation/appkit/nsbrowser/prefersallcolumnuserresizing)

# prefersAllColumnUserResizing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.

## Declaration

```swift
var prefersAllColumnUserResizing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser is set to resize all columns simultaneously. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

This setting applies only to browsers that allow the user to resize columns (see the constant [NSBrowser.ColumnResizingType.userColumnResizing](columnresizingtype-swift.enum/usercolumnresizing.md)). Holding down the Option key while resizing switches the type of resizing used. This setting is persistent.

## See Also

### Sizing

- [removeSavedColumns(withAutosaveName:)](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowser.ColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidth(forColumnWidth:)](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidth(forColumnContentWidth:)](columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [width(ofColumn:)](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth(\_:ofColumn:)](setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth()](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth(\_:)](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.

# prefersAllColumnUserResizing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.

## Declaration

```objectivec
@property BOOL prefersAllColumnUserResizing;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser is set to resize all columns simultaneously. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

This setting applies only to browsers that allow the user to resize columns (see the constant [NSBrowserUserColumnResizing](columnresizingtype-swift.enum/usercolumnresizing.md)). Holding down the Option key while resizing switches the type of resizing used. This setting is persistent.

## See Also

### Sizing

- [removeSavedColumnsWithAutosaveName:](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowserColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidthForColumnWidth:](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidthForColumnContentWidth:](columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [widthOfColumn:](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth:ofColumn:](setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth:](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.
