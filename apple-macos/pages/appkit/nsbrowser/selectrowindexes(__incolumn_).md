> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectrowindexes(_:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/selectrowindexes(_:incolumn:))

# selectRowIndexes(\_:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies the selected rows in a given column of the browser.

## Declaration

```swift
func selectRowIndexes(_ indexes: IndexSet, inColumn column: Int)
```

## Parameters

- `indexes`: Rows to be selected in column `columnIndex`.
- `column`: Column in which to select rows `rowIndexes`.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexes(inColumn:)](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

# selectRowIndexes:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies the selected rows in a given column of the browser.

## Declaration

```objectivec
- (void) selectRowIndexes:(NSIndexSet *) indexes inColumn:(NSInteger) column;
```

## Parameters

- `indexes`: Rows to be selected in column `columnIndex`.
- `column`: Column in which to select rows `rowIndexes`.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexesInColumn:](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).
