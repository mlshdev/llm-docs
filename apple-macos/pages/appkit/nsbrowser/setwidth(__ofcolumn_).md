> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/setwidth(_:ofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/setwidth(_:ofcolumn:))

# setWidth(\_:ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the width of the specified column.

## Declaration

```swift
func setWidth(_ columnWidth: CGFloat, ofColumn columnIndex: Int)
```

## Parameters

- `columnWidth`: The new width of the specified column.
- `columnIndex`: The index of the column for which to set the width.

<a id="Discussion"></a>

## Discussion

This method can be used to set the initial width of browser columns unless the column sizing is automatic; [setWidth(\_:ofColumn:)](setwidth%28__ofcolumn_%29.md) does nothing if [columnResizingType](columnresizingtype-swift.property.md) is [NSBrowser.ColumnResizingType.autoColumnResizing](columnresizingtype-swift.enum/autocolumnresizing.md). To set the default width for new columns (that don’t otherwise have initial widths from defaults or via the delegate), use a `columnIndex` of –1. A value set for `columnIndex` of –1 is persistent. An [columnConfigurationDidChangeNotification](columnconfigurationdidchangenotification.md) notification is posted (not immediately), if necessary, so that the browser can autosave the new column configuration.

## See Also

### Related Documentation

- [browser(\_:shouldSizeColumn:forUserResize:toWidth:)](../nsbrowserdelegate/browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.

### Sizing

- [removeSavedColumns(withAutosaveName:)](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowser.ColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidth(forColumnWidth:)](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidth(forColumnContentWidth:)](columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [width(ofColumn:)](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [defaultColumnWidth()](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth(\_:)](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.

# setWidth:ofColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the width of the specified column.

## Declaration

```objectivec
- (void) setWidth:(CGFloat) columnWidth ofColumn:(NSInteger) columnIndex;
```

## Parameters

- `columnWidth`: The new width of the specified column.
- `columnIndex`: The index of the column for which to set the width.

<a id="Discussion"></a>

## Discussion

This method can be used to set the initial width of browser columns unless the column sizing is automatic; [setWidth:ofColumn:](setwidth%28__ofcolumn_%29.md) does nothing if [columnResizingType](columnresizingtype-swift.property.md) is [NSBrowserAutoColumnResizing](columnresizingtype-swift.enum/autocolumnresizing.md). To set the default width for new columns (that don’t otherwise have initial widths from defaults or via the delegate), use a `columnIndex` of –1. A value set for `columnIndex` of –1 is persistent. An [NSBrowserColumnConfigurationDidChangeNotification](columnconfigurationdidchangenotification.md) notification is posted (not immediately), if necessary, so that the browser can autosave the new column configuration.

## See Also

### Related Documentation

- [browser:shouldSizeColumn:forUserResize:toWidth:](../nsbrowserdelegate/browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.

### Sizing

- [removeSavedColumnsWithAutosaveName:](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowserColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidthForColumnWidth:](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidthForColumnContentWidth:](columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [widthOfColumn:](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [defaultColumnWidth](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth:](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.
