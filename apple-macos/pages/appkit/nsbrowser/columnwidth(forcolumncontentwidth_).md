> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/columnwidth(forcolumncontentwidth:)](https://developer.apple.com/documentation/appkit/nsbrowser/columnwidth(forcolumncontentwidth:))

# columnWidth(forColumnContentWidth:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the column width for the width of the given column’s content.

## Declaration

```swift
func columnWidth(forColumnContentWidth columnContentWidth: CGFloat) -> CGFloat
```

## Parameters

- `columnContentWidth`: The width of the column’s content (the width of the matrix in the column).

<a id="return-value"></a>

## Return Value

The width of the column (the width of the entire scrolling text view).

<a id="Discussion"></a>

## Discussion

For example, to guarantee that 16 pixels of your browser cell are always visible, call:

```objc
[browser setMinColumnWidth: [browser columnWidthForColumnContentWidth:16]]
```

## See Also

### Sizing

- [removeSavedColumns(withAutosaveName:)](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowser.ColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidth(forColumnWidth:)](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [width(ofColumn:)](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth(\_:ofColumn:)](setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth()](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth(\_:)](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.

# columnWidthForColumnContentWidth: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the column width for the width of the given column’s content.

## Declaration

```objectivec
- (CGFloat) columnWidthForColumnContentWidth:(CGFloat) columnContentWidth;
```

## Parameters

- `columnContentWidth`: The width of the column’s content (the width of the matrix in the column).

<a id="return-value"></a>

## Return Value

The width of the column (the width of the entire scrolling text view).

<a id="Discussion"></a>

## Discussion

For example, to guarantee that 16 pixels of your browser cell are always visible, call:

```objc
[browser setMinColumnWidth: [browser columnWidthForColumnContentWidth:16]]
```

## See Also

### Sizing

- [removeSavedColumnsWithAutosaveName:](removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowserColumnsAutosaveName](columnsautosavename-swift.typealias.md)
- [columnContentWidthForColumnWidth:](columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnResizingType](columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [widthOfColumn:](width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth:ofColumn:](setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth](defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth:](setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](rowheight.md): The height of the browser’s rows.
