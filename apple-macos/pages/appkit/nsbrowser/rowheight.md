> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/rowheight](https://developer.apple.com/documentation/appkit/nsbrowser/rowheight)

# rowHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The height of the browser’s rows.

## Declaration

```swift
var rowHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than `0`. The default value of this property is `17.0`. Any fractional value will be forced to an integral value for drawing. For variable row height browsers (ones whose delegates implement [browser(\_:heightOfRow:inColumn:)](../nsbrowserdelegate/browser%28__heightofrow_incolumn_%29.md)), the row height will be used to draw alternating rows past the last row in each browser column.

This property is only available when using the item delegate methods. An exception is thrown if you are using the matrix delegate methods.

## See Also

### Sizing

- [removeSavedColumns(withAutosaveName:)](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
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

# rowHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The height of the browser’s rows.

## Declaration

```objectivec
@property CGFloat rowHeight;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than `0`. The default value of this property is `17.0`. Any fractional value will be forced to an integral value for drawing. For variable row height browsers (ones whose delegates implement [browser:heightOfRow:inColumn:](../nsbrowserdelegate/browser%28__heightofrow_incolumn_%29.md)), the row height will be used to draw alternating rows past the last row in each browser column.

This property is only available when using the item delegate methods. An exception is thrown if you are using the matrix delegate methods.

## See Also

### Sizing

- [removeSavedColumnsWithAutosaveName:](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
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
