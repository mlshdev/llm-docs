> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:selectcellwith:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:selectcellwith:incolumn:))

# browser(\_:selectCellWith:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate to select the cell with the given title in the specified column.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, selectCellWith title: String, inColumn column: Int) -> Bool
```

## Parameters

- `sender`: The browser.
- `title`: The title of the cell to select.
- `column`: The index of the column containing the cell to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell was successfully selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoked in response to the [setPath(\_:)](../nsbrowser/setpath%28__%29.md) method of [NSBrowser](../nsbrowser.md) being received by `sender`.

## See Also

### Related Documentation

- [selectedCell(inColumn:)](../nsbrowser/selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.

### Managing Selection

- [browser(\_:selectRow:inColumn:)](browser%28__selectrow_incolumn_%29.md): Asks the delegate to select the cell at the specified row and column location.
- [browser(\_:selectionIndexesForProposedSelection:inColumn:)](browser%28__selectionindexesforproposedselection_incolumn_%29.md): Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.

# browser:selectCellWithString:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate to select the cell with the given title in the specified column.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) sender selectCellWithString:(NSString *) title inColumn:(NSInteger) column;
```

## Parameters

- `sender`: The browser.
- `title`: The title of the cell to select.
- `column`: The index of the column containing the cell to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell was successfully selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoked in response to the [setPath:](../nsbrowser/setpath%28__%29.md) method of [NSBrowser](../nsbrowser.md) being received by `sender`.

## See Also

### Related Documentation

- [selectedCellInColumn:](../nsbrowser/selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.

### Managing Selection

- [browser:selectRow:inColumn:](browser%28__selectrow_incolumn_%29.md): Asks the delegate to select the cell at the specified row and column location.
- [browser:selectionIndexesForProposedSelection:inColumn:](browser%28__selectionindexesforproposedselection_incolumn_%29.md): Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.
