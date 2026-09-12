> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/dropoperation()](https://developer.apple.com/documentation/quartz/ikimagebrowserview/dropoperation())

# dropOperation() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the current drop operation.

## Declaration

```swift
func dropOperation() -> IKImageBrowserDropOperation
```

<a id="return-value"></a>

## Return Value

[IKImageBrowserDropOn](../ikimagebrowserdropon.md) if the drop occurs on an item, otherwise [IKImageBrowserDropBefore](../ikimagebrowserdropbefore.md).

<a id="Discussion"></a>

## Discussion

The returned value is valid when a drop occurred and until next drop.

For example, given a browser with `N` cells , a cell of `N-1` and operation of [IKImageBrowserDropOn](../ikimagebrowserdropon.md) would specify a drop on the last cell.  To specify a drop after the last cell, one would use an index of `N` and [IKImageBrowserDropBefore](../ikimagebrowserdropbefore.md) for the operation.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate()](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem()](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems(\_:)](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems()](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.

# dropOperation (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the current drop operation.

## Declaration

```objectivec
- (IKImageBrowserDropOperation) dropOperation;
```

<a id="return-value"></a>

## Return Value

[IKImageBrowserDropOn](../ikimagebrowserdropon.md) if the drop occurs on an item, otherwise [IKImageBrowserDropBefore](../ikimagebrowserdropbefore.md).

<a id="Discussion"></a>

## Discussion

The returned value is valid when a drop occurred and until next drop.

For example, given a browser with `N` cells , a cell of `N-1` and operation of [IKImageBrowserDropOn](../ikimagebrowserdropon.md) would specify a drop on the last cell.  To specify a drop after the last cell, one would use an index of `N` and [IKImageBrowserDropBefore](../ikimagebrowserdropbefore.md) for the operation.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems:](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
