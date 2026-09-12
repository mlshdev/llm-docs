> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:willdisplaycell:atrow:column:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:willdisplaycell:atrow:column:))

# browser(\_:willDisplayCell:atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, willDisplayCell cell: Any, atRow row: Int, column: Int)
```

## Parameters

- `sender`: The browser.
- `cell`: The cell to be displayed.
- `row`: The row index of the cell to be displayed.
- `column`: The column index of the cell to be displayed.

<a id="Discussion"></a>

## Discussion

The delegate should set any state necessary for the correct display of the cell.

## See Also

### Related Documentation

- [browser(\_:numberOfRowsInColumn:)](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.

### Managing Columns

- [browser(\_:createRowsForColumn:in:)](browser%28__createrowsforcolumn_in_%29.md): Creates a row in the given matrix for each row of data in the specified column of the browser.
- [browser(\_:didChangeLastColumn:toColumn:)](browser%28__didchangelastcolumn_tocolumn_%29.md): Tells the delegate that the browser’s last column changed.

# browser:willDisplayCell:atRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.

## Declaration

```objectivec
- (void) browser:(NSBrowser *) sender willDisplayCell:(id) cell atRow:(NSInteger) row column:(NSInteger) column;
```

## Parameters

- `sender`: The browser.
- `cell`: The cell to be displayed.
- `row`: The row index of the cell to be displayed.
- `column`: The column index of the cell to be displayed.

<a id="Discussion"></a>

## Discussion

The delegate should set any state necessary for the correct display of the cell.

## See Also

### Related Documentation

- [browser:numberOfRowsInColumn:](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.

### Managing Columns

- [browser:createRowsForColumn:inMatrix:](browser%28__createrowsforcolumn_in_%29.md): Creates a row in the given matrix for each row of data in the specified column of the browser.
- [browser:didChangeLastColumn:toColumn:](browser%28__didchangelastcolumn_tocolumn_%29.md): Tells the delegate that the browser’s last column changed.
