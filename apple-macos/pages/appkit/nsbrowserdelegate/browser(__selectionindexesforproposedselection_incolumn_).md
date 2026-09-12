> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:selectionindexesforproposedselection:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:selectionindexesforproposedselection:incolumn:))

# browser(\_:selectionIndexesForProposedSelection:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, selectionIndexesForProposedSelection proposedSelectionIndexes: IndexSet, inColumn column: Int) -> IndexSet
```

## Parameters

- `browser`: The browser.
- `proposedSelectionIndexes`: The set of indexes of the items in the proposed selection.
- `column`: The column index of the column containing the selection.

<a id="return-value"></a>

## Return Value

The set of indexes of the items that should be selected.

<a id="Discussion"></a>

## Discussion

This method may be called multiple times, with one new index added to the previous selection, to see whether a particular index can be selected when the user is extending the selection with the keyboard or mouse. The `proposedSelectionIndexes` parameter contains the entire selection, and you can return the existing selection if you do not want to change it. This method works only for item-based browsers.

## See Also

### Managing Selection

- [browser(\_:selectCellWith:inColumn:)](browser%28__selectcellwith_incolumn_%29.md): Asks the delegate to select the cell with the given title in the specified column.
- [browser(\_:selectRow:inColumn:)](browser%28__selectrow_incolumn_%29.md): Asks the delegate to select the cell at the specified row and column location.

# browser:selectionIndexesForProposedSelection:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.

## Declaration

```objectivec
- (NSIndexSet *) browser:(NSBrowser *) browser selectionIndexesForProposedSelection:(NSIndexSet *) proposedSelectionIndexes inColumn:(NSInteger) column;
```

## Parameters

- `browser`: The browser.
- `proposedSelectionIndexes`: The set of indexes of the items in the proposed selection.
- `column`: The column index of the column containing the selection.

<a id="return-value"></a>

## Return Value

The set of indexes of the items that should be selected.

<a id="Discussion"></a>

## Discussion

This method may be called multiple times, with one new index added to the previous selection, to see whether a particular index can be selected when the user is extending the selection with the keyboard or mouse. The `proposedSelectionIndexes` parameter contains the entire selection, and you can return the existing selection if you do not want to change it. This method works only for item-based browsers.

## See Also

### Managing Selection

- [browser:selectCellWithString:inColumn:](browser%28__selectcellwith_incolumn_%29.md): Asks the delegate to select the cell with the given title in the specified column.
- [browser:selectRow:inColumn:](browser%28__selectrow_incolumn_%29.md): Asks the delegate to select the cell at the specified row and column location.
