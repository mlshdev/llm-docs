> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineviewselectiondidchange(_:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineviewselectiondidchange(_:))

# outlineViewSelectionDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

## Declaration

```swift
@MainActor optional func outlineViewSelectionDidChange(_ notification: Notification)
```

## Parameters

- `notification`: The posted notification.

<a id="Discussion"></a>

## Discussion

This method is invoked as a result of posting an [selectionDidChangeNotification](../nsoutlineview/selectiondidchangenotification.md).

## See Also

### Handling Selection

- [outlineView(\_:shouldSelect:)](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView(\_:shouldSelectItem:)](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView(\_:selectionIndexesForProposedSelection:)](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChange(in:)](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging(\_:)](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.

# outlineViewSelectionDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

## Declaration

```objectivec
- (void) outlineViewSelectionDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: The posted notification.

<a id="Discussion"></a>

## Discussion

This method is invoked as a result of posting an [NSOutlineViewSelectionDidChangeNotification](../nsoutlineview/selectiondidchangenotification.md).

## See Also

### Handling Selection

- [outlineView:shouldSelectTableColumn:](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView:shouldSelectItem:](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView:selectionIndexesForProposedSelection:](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [selectionShouldChangeInOutlineView:](selectionshouldchange%28in_%29.md): Returns a Boolean value that indicates whether the outline view should change its selection.
- [outlineViewSelectionIsChanging:](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
