> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/expandgroup(at:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/expandgroup(at:))

# expandGroup(at:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Expands a group at the specified index.

## Declaration

```swift
func expandGroup(at index: Int)
```

## Parameters

- `index`: The index of the group you want to expand.

<a id="Discussion"></a>

## Discussion

This method is declared in OS X v10.5, but an implementation was not provided until OS X v10.6. Avoid using this method in OS X v10.5.

## See Also

### Reordering and Groups Items

- [selectionIndexes()](selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setSelectionIndexes(\_:byExtendingSelection:)](setselectionindexes%28__byextendingselection_%29.md): Selects cells at the specified indexes.
- [setAllowsMultipleSelection(\_:)](setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection()](allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection(\_:)](setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection()](allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering(\_:)](setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [allowsReordering()](allowsreordering%28%29.md): Returns whether the user can reorder items.
- [setAnimates(\_:)](setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates()](animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [collapseGroup(at:)](collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpanded(at:)](isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.

# expandGroupAtIndex: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Expands a group at the specified index.

## Declaration

```objectivec
- (void) expandGroupAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the group you want to expand.

<a id="Discussion"></a>

## Discussion

This method is declared in OS X v10.5, but an implementation was not provided until OS X v10.6. Avoid using this method in OS X v10.5.

## See Also

### Reordering and Groups Items

- [selectionIndexes](selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setSelectionIndexes:byExtendingSelection:](setselectionindexes%28__byextendingselection_%29.md): Selects cells at the specified indexes.
- [setAllowsMultipleSelection:](setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection](allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection:](setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection](allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering:](setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [allowsReordering](allowsreordering%28%29.md): Returns whether the user can reorder items.
- [setAnimates:](setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates](animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [collapseGroupAtIndex:](collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpandedAtIndex:](isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.
