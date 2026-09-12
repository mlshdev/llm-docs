> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/columnsautosavename-swift.property](https://developer.apple.com/documentation/appkit/nsbrowser/columnsautosavename-swift.property)

# columnsAutosaveName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name used to automatically save the browser’s column configuration.

## Declaration

```swift
var columnsAutosaveName: NSBrowser.ColumnsAutosaveName { get set }
```

<a id="Discussion"></a>

## Discussion

Column configuration is defined as an array of column content widths. One width is saved for each level the user has reached. That is, the browser saves column width based on depth, not on unique paths. To do more complex column persistence, you should register for [columnConfigurationDidChangeNotification](columnconfigurationdidchangenotification.md) and handle persistence yourself. This setting is persistent.

When this property is set to a value different than its current value, this property also reads in any column configuration data previously saved under the new value and applies the values to the browser.

## See Also

### Sizing

- [removeSavedColumns(withAutosaveName:)](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
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

# columnsAutosaveName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name used to automatically save the browser’s column configuration.

## Declaration

```objectivec
@property (copy) NSBrowserColumnsAutosaveName columnsAutosaveName;
```

<a id="Discussion"></a>

## Discussion

Column configuration is defined as an array of column content widths. One width is saved for each level the user has reached. That is, the browser saves column width based on depth, not on unique paths. To do more complex column persistence, you should register for [NSBrowserColumnConfigurationDidChangeNotification](columnconfigurationdidchangenotification.md) and handle persistence yourself. This setting is persistent.

When this property is set to a value different than its current value, this property also reads in any column configuration data previously saved under the new value and applies the values to the browser.

## See Also

### Sizing

- [removeSavedColumnsWithAutosaveName:](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
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
