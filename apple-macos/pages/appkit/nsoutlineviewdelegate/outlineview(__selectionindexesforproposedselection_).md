> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:selectionindexesforproposedselection:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:selectionindexesforproposedselection:))

# outlineView(\_:selectionIndexesForProposedSelection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to allow the delegate to modify the proposed selection.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, selectionIndexesForProposedSelection proposedSelectionIndexes: IndexSet) -> IndexSet
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `proposedSelectionIndexes`: An index set containing the indexes of the proposed selection.

<a id="return-value"></a>

## Return Value

An [NSIndexSet](https://developer.apple.com/documentation/foundation/nsindexset) instance containing the indexes of the new selection. Return `proposedSelectionIndexes` if the proposed selection is acceptable, or the value of the table view’s existing selection to avoid changing the selection.

<a id="Discussion"></a>

## Discussion

This method may be called multiple times with one new index added to the existing selection to find out if a particular index can be selected when the user is extending the selection with the keyboard or mouse.

Implementation of this method is optional. If implemented, this method will be called instead of [outlineView(\_:shouldSelectItem:)](outlineview%28__shouldselectitem_%29.md).

## See Also

### Handling Selection

- [outlineView(\_:shouldSelect:)](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView(\_:shouldSelectItem:)](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging(\_:)](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange(\_:)](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

# outlineView:selectionIndexesForProposedSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to allow the delegate to modify the proposed selection.

## Declaration

```objectivec
- (NSIndexSet *) outlineView:(NSOutlineView *) outlineView selectionIndexesForProposedSelection:(NSIndexSet *) proposedSelectionIndexes;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `proposedSelectionIndexes`: An index set containing the indexes of the proposed selection.

<a id="return-value"></a>

## Return Value

An [NSIndexSet](https://developer.apple.com/documentation/foundation/nsindexset) instance containing the indexes of the new selection. Return `proposedSelectionIndexes` if the proposed selection is acceptable, or the value of the table view’s existing selection to avoid changing the selection.

<a id="Discussion"></a>

## Discussion

This method may be called multiple times with one new index added to the existing selection to find out if a particular index can be selected when the user is extending the selection with the keyboard or mouse.

Implementation of this method is optional. If implemented, this method will be called instead of [outlineView:shouldSelectItem:](outlineview%28__shouldselectitem_%29.md).

## See Also

### Handling Selection

- [outlineView:shouldSelectTableColumn:](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView:shouldSelectItem:](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [selectionShouldChangeInOutlineView:](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging:](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange:](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.
