> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setselectionindexes(_:byextendingselection:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setselectionindexes(_:byextendingselection:))

# setSelectionIndexes(\_:byExtendingSelection:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Selects cells at the specified indexes.

## Declaration

```swift
func setSelectionIndexes(_ indexes: IndexSet!, byExtendingSelection extendSelection: Bool)
```

## Parameters

- `indexes`: The indexes of the cells you want to select.
- `extendSelection`: A `BOOL` value that specifies whether to extend the current selection. Pass [true](https://developer.apple.com/documentation/swift/true) to extends the selection; [false](https://developer.apple.com/documentation/swift/false) replaces the current selection.

## See Also

### Reordering and Groups Items

- [selectionIndexes()](selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setAllowsMultipleSelection(\_:)](setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection()](allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection(\_:)](setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection()](allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering(\_:)](setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [allowsReordering()](allowsreordering%28%29.md): Returns whether the user can reorder items.
- [setAnimates(\_:)](setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates()](animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [expandGroup(at:)](expandgroup%28at_%29.md): Expands a group at the specified index.
- [collapseGroup(at:)](collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpanded(at:)](isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.

# setSelectionIndexes:byExtendingSelection: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Selects cells at the specified indexes.

## Declaration

```objectivec
- (void) setSelectionIndexes:(NSIndexSet *) indexes byExtendingSelection:(BOOL) extendSelection;
```

## Parameters

- `indexes`: The indexes of the cells you want to select.
- `extendSelection`: A `BOOL` value that specifies whether to extend the current selection. Pass [true](https://developer.apple.com/documentation/swift/true) to extends the selection; [false](https://developer.apple.com/documentation/swift/false) replaces the current selection.

## See Also

### Reordering and Groups Items

- [selectionIndexes](selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setAllowsMultipleSelection:](setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection](allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection:](setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection](allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering:](setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [allowsReordering](allowsreordering%28%29.md): Returns whether the user can reorder items.
- [setAnimates:](setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates](animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [expandGroupAtIndex:](expandgroup%28at_%29.md): Expands a group at the specified index.
- [collapseGroupAtIndex:](collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpandedAtIndex:](isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.
