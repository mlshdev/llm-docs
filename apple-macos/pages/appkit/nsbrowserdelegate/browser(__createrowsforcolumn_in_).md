> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:createrowsforcolumn:in:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:createrowsforcolumn:in:))

# browser(\_:createRowsForColumn:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a row in the given matrix for each row of data in the specified column of the browser.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, createRowsForColumn column: Int, in matrix: NSMatrix)
```

## Parameters

- `sender`: The browser.
- `column`: The index of the column in which the rows are located.
- `matrix`: The matrix in which the rows are created.

<a id="Discussion"></a>

## Discussion

Either this method or [browser(\_:numberOfRowsInColumn:)](browser%28__numberofrowsincolumn_%29.md) must be implemented, but not both, or an [NSBrowserIllegalDelegateException](../nsbrowserillegaldelegateexception.md) will be raised.

## See Also

### Managing Columns

- [browser(\_:willDisplayCell:atRow:column:)](browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.
- [browser(\_:didChangeLastColumn:toColumn:)](browser%28__didchangelastcolumn_tocolumn_%29.md): Tells the delegate that the browser’s last column changed.

# browser:createRowsForColumn:inMatrix: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a row in the given matrix for each row of data in the specified column of the browser.

## Declaration

```objectivec
- (void) browser:(NSBrowser *) sender createRowsForColumn:(NSInteger) column inMatrix:(NSMatrix *) matrix;
```

## Parameters

- `sender`: The browser.
- `column`: The index of the column in which the rows are located.
- `matrix`: The matrix in which the rows are created.

<a id="Discussion"></a>

## Discussion

Either this method or [browser:numberOfRowsInColumn:](browser%28__numberofrowsincolumn_%29.md) must be implemented, but not both, or an [NSBrowserIllegalDelegateException](../nsbrowserillegaldelegateexception.md) will be raised.

## See Also

### Managing Columns

- [browser:willDisplayCell:atRow:column:](browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.
- [browser:didChangeLastColumn:toColumn:](browser%28__didchangelastcolumn_tocolumn_%29.md): Tells the delegate that the browser’s last column changed.
