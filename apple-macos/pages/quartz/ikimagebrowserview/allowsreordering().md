> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/allowsreordering()](https://developer.apple.com/documentation/quartz/ikimagebrowserview/allowsreordering())

# allowsReordering() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns whether the user can reorder items.

## Declaration

```swift
func allowsReordering() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can reorder items; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Reordering and Groups Items

- [selectionIndexes()](selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setSelectionIndexes(\_:byExtendingSelection:)](setselectionindexes%28__byextendingselection_%29.md): Selects cells at the specified indexes.
- [setAllowsMultipleSelection(\_:)](setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection()](allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection(\_:)](setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection()](allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering(\_:)](setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [setAnimates(\_:)](setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates()](animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [expandGroup(at:)](expandgroup%28at_%29.md): Expands a group at the specified index.
- [collapseGroup(at:)](collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpanded(at:)](isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.

# allowsReordering (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns whether the user can reorder items.

## Declaration

```objectivec
- (BOOL) allowsReordering;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can reorder items; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Reordering and Groups Items

- [selectionIndexes](selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setSelectionIndexes:byExtendingSelection:](setselectionindexes%28__byextendingselection_%29.md): Selects cells at the specified indexes.
- [setAllowsMultipleSelection:](setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection](allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection:](setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection](allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering:](setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [setAnimates:](setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates](animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [expandGroupAtIndex:](expandgroup%28at_%29.md): Expands a group at the specified index.
- [collapseGroupAtIndex:](collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpandedAtIndex:](isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.
