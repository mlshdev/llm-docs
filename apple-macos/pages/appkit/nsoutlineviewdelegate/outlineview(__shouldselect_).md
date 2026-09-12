> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldselect:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldselect:))

# outlineView(\_:shouldSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should select a given table column.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldSelect tableColumn: NSTableColumn?) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to select `tableColumn`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow selection of specific columns.

## See Also

### Handling Selection

- [outlineView(\_:shouldSelectItem:)](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView(\_:selectionIndexesForProposedSelection:)](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging(\_:)](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange(\_:)](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

# outlineView:shouldSelectTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should select a given table column.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldSelectTableColumn:(NSTableColumn *) tableColumn;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to select `tableColumn`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow selection of specific columns.

## See Also

### Handling Selection

- [outlineView:shouldSelectItem:](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView:selectionIndexesForProposedSelection:](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChangeInOutlineView:](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging:](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange:](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.
