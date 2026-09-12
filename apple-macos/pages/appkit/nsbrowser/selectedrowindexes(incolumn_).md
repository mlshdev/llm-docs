> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/selectedrowindexes(incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/selectedrowindexes(incolumn:))

# selectedRowIndexes(inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Provides the indexes of the selected rows in a given column of the browser.

## Declaration

```swift
func selectedRowIndexes(inColumn column: Int) -> IndexSet?
```

## Parameters

- `column`: The column whose selected rows are provided.

<a id="return-value"></a>

## Return Value

Rows selected in column `columnIndex`.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectRowIndexes(\_:inColumn:)](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

# selectedRowIndexesInColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Provides the indexes of the selected rows in a given column of the browser.

## Declaration

```objectivec
- (NSIndexSet *) selectedRowIndexesInColumn:(NSInteger) column;
```

## Parameters

- `column`: The column whose selected rows are provided.

<a id="return-value"></a>

## Return Value

Rows selected in column `columnIndex`.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectRowIndexes:inColumn:](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).
