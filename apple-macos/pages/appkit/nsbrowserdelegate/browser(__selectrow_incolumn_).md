> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:selectrow:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:selectrow:incolumn:))

# browser(\_:selectRow:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate to select the cell at the specified row and column location.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, selectRow row: Int, inColumn column: Int) -> Bool
```

## Parameters

- `sender`: The browser.
- `row`: The index of the row containing the cell to select.
- `column`: The index of the column containing the cell to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell was selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoked in response to [selectRow(\_:inColumn:)](../nsbrowser/selectrow%28__incolumn_%29.md) of [NSBrowser](../nsbrowser.md) being received by `sender`.

## See Also

### Related Documentation

- [selectRow(\_:inColumn:)](../nsbrowser/selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectedRow(inColumn:)](../nsbrowser/selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.

### Managing Selection

- [browser(\_:selectCellWith:inColumn:)](browser%28__selectcellwith_incolumn_%29.md): Asks the delegate to select the cell with the given title in the specified column.
- [browser(\_:selectionIndexesForProposedSelection:inColumn:)](browser%28__selectionindexesforproposedselection_incolumn_%29.md): Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.

# browser:selectRow:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate to select the cell at the specified row and column location.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) sender selectRow:(NSInteger) row inColumn:(NSInteger) column;
```

## Parameters

- `sender`: The browser.
- `row`: The index of the row containing the cell to select.
- `column`: The index of the column containing the cell to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell was selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoked in response to [selectRow:inColumn:](../nsbrowser/selectrow%28__incolumn_%29.md) of [NSBrowser](../nsbrowser.md) being received by `sender`.

## See Also

### Related Documentation

- [selectRow:inColumn:](../nsbrowser/selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectedRowInColumn:](../nsbrowser/selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.

### Managing Selection

- [browser:selectCellWithString:inColumn:](browser%28__selectcellwith_incolumn_%29.md): Asks the delegate to select the cell with the given title in the specified column.
- [browser:selectionIndexesForProposedSelection:inColumn:](browser%28__selectionindexesforproposedselection_incolumn_%29.md): Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.
