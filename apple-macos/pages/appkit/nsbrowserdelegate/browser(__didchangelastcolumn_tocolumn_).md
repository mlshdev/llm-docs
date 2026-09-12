> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:didchangelastcolumn:tocolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:didchangelastcolumn:tocolumn:))

# browser(\_:didChangeLastColumn:toColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the browser’s last column changed.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, didChangeLastColumn oldLastColumn: Int, toColumn column: Int)
```

## Parameters

- `browser`: The browser.
- `oldLastColumn`: The index of the old last column.
- `column`: The index of the new last column.

## See Also

### Managing Columns

- [browser(\_:createRowsForColumn:in:)](browser%28__createrowsforcolumn_in_%29.md): Creates a row in the given matrix for each row of data in the specified column of the browser.
- [browser(\_:willDisplayCell:atRow:column:)](browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.

# browser:didChangeLastColumn:toColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the browser’s last column changed.

## Declaration

```objectivec
- (void) browser:(NSBrowser *) browser didChangeLastColumn:(NSInteger) oldLastColumn toColumn:(NSInteger) column;
```

## Parameters

- `browser`: The browser.
- `oldLastColumn`: The index of the old last column.
- `column`: The index of the new last column.

## See Also

### Managing Columns

- [browser:createRowsForColumn:inMatrix:](browser%28__createrowsforcolumn_in_%29.md): Creates a row in the given matrix for each row of data in the specified column of the browser.
- [browser:willDisplayCell:atRow:column:](browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.
