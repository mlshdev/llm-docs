> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/removesavedcolumns(withautosavename:)](https://developer.apple.com/documentation/appkit/nsbrowser/removesavedcolumns(withautosavename:))

# removeSavedColumns(withAutosaveName:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Removes the column configuration data stored under the given name from the application’s user defaults.

## Declaration

```swift
class func removeSavedColumns(withAutosaveName name: NSBrowser.ColumnsAutosaveName)
```

## Parameters

- `name`: The name of the column configuration data to remove.

## See Also

### Sizing

- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowser.ColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidth(forColumnWidth:)](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidth(forColumnContentWidth:)](columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [width(ofColumn:)](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth(\_:ofColumn:)](setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth()](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth(\_:)](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.

# removeSavedColumnsWithAutosaveName: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Removes the column configuration data stored under the given name from the application’s user defaults.

## Declaration

```objectivec
+ (void) removeSavedColumnsWithAutosaveName:(NSBrowserColumnsAutosaveName) name;
```

## Parameters

- `name`: The name of the column configuration data to remove.

## See Also

### Sizing

- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowserColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidthForColumnWidth:](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidthForColumnContentWidth:](columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [widthOfColumn:](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth:ofColumn:](setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth:](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.
