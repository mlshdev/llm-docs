> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/selectionshouldchange(in:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/selectionshouldchange(in:))

# selectionShouldChange(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should change its selection.

## Declaration

```swift
@MainActor optional func selectionShouldChange(in outlineView: NSOutlineView) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to change its selection (typically a row being edited), [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

For example, if the user is editing a cell and enters an improper value, the delegate can prevent the user from selecting or editing any other cells until a proper value has been entered into the original cell. The delegate can implement this method for complex validation of edited rows based on the values of any of their cells.

## See Also

### Handling Selection

- [outlineView(\_:shouldSelect:)](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView(\_:shouldSelectItem:)](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView(\_:selectionIndexesForProposedSelection:)](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [outlineViewSelectionIsChanging(\_:)](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange(\_:)](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.

# selectionShouldChangeInOutlineView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should change its selection.

## Declaration

```objectivec
- (BOOL) selectionShouldChangeInOutlineView:(NSOutlineView *) outlineView;
```

## Parameters

- `outlineView`: The outline view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to change its selection (typically a row being edited), [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

For example, if the user is editing a cell and enters an improper value, the delegate can prevent the user from selecting or editing any other cells until a proper value has been entered into the original cell. The delegate can implement this method for complex validation of edited rows based on the values of any of their cells.

## See Also

### Handling Selection

- [outlineView:shouldSelectTableColumn:](outlineview%28__shouldselect_%29.md): Returns a Boolean value that indicates whether the outline view should select a given table column.
- [outlineView:shouldSelectItem:](outlineview%28__shouldselectitem_%29.md): Returns a Boolean value that indicates whether the outline view should select a given item.
- [outlineView:selectionIndexesForProposedSelection:](outlineview%28__selectionindexesforproposedselection_%29.md): Invoked to allow the delegate to modify the proposed selection.
- [outlineViewSelectionIsChanging:](outlineviewselectionischanging%28__%29.md): Invoked when `notification` is posted—that is, whenever the outline view’s selection changes.
- [outlineViewSelectionDidChange:](outlineviewselectiondidchange%28__%29.md): Invoked when the selection did change notification is posted—that is, immediately after the outline view’s selection has changed.
