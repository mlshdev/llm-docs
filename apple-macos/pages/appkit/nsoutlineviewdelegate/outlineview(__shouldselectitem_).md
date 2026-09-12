> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldselectitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldselectitem:))

# outlineView(\_:shouldSelectItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should select a given item.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldSelectItem item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to select `item`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

You implement this method to disallow selection of particular items.

For better performance and finer grain control over the selection, use [outlineView(\_:selectionIndexesForProposedSelection:)](outlineview%28__selectionindexesforproposedselection_%29.md).

## See Also

### Handling Selection

- [outlineView(\_:shouldSelect:)](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView(\_:selectionIndexesForProposedSelection:)](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging(\_:)](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange(\_:)](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

# outlineView:shouldSelectItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should select a given item.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldSelectItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to select `item`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

You implement this method to disallow selection of particular items.

For better performance and finer grain control over the selection, use [outlineView:selectionIndexesForProposedSelection:](outlineview%28__selectionindexesforproposedselection_%29.md).

## See Also

### Handling Selection

- [outlineView:shouldSelectTableColumn:](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView:selectionIndexesForProposedSelection:](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChangeInOutlineView:](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging:](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange:](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.
