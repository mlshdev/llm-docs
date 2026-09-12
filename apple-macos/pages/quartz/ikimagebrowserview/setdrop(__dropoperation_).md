> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setdrop(_:dropoperation:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setdrop(_:dropoperation:))

# setDrop(\_:dropOperation:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Allows the class to retarget the drop action.

## Declaration

```swift
func setDrop(_ index: Int, dropOperation operation: IKImageBrowserDropOperation)
```

## Parameters

- `index`: The requested drop index.
- `operation`: The requested drop operation. The possible values are described in [IKImageBrowserDropOperation](../ikimagebrowserdropoperation.md).

<a id="Discussion"></a>

## Discussion

For example, To specify a drop on the second item, one would specify index as `1`, and operation as [IKImageBrowserDropOn](../ikimagebrowserdropon.md). To specify a drop after the last item, one would specify index as the number of items and operation as [IKImageBrowserDropBefore](../ikimagebrowserdropbefore.md).

Passing a value of `–1` for `index`, and [IKImageBrowserDropOn](../ikimagebrowserdropon.md) as the operation causes the entire browser view to be highlighted rather than a specific item. This is useful if the data displayed by the receiver does not allow the user to drop items at a specific item location

.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate()](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [indexAtLocationOfDroppedItem()](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems(\_:)](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems()](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation()](dropoperation%28%29.md): Returns the current drop operation.

# setDropIndex:dropOperation: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Allows the class to retarget the drop action.

## Declaration

```objectivec
- (void) setDropIndex:(NSInteger) index dropOperation:(IKImageBrowserDropOperation) operation;
```

## Parameters

- `index`: The requested drop index.
- `operation`: The requested drop operation. The possible values are described in [IKImageBrowserDropOperation](../ikimagebrowserdropoperation.md).

<a id="Discussion"></a>

## Discussion

For example, To specify a drop on the second item, one would specify index as `1`, and operation as [IKImageBrowserDropOn](../ikimagebrowserdropon.md). To specify a drop after the last item, one would specify index as the number of items and operation as [IKImageBrowserDropBefore](../ikimagebrowserdropbefore.md).

Passing a value of `–1` for `index`, and [IKImageBrowserDropOn](../ikimagebrowserdropon.md) as the operation causes the entire browser view to be highlighted rather than a specific item. This is useful if the data displayed by the receiver does not allow the user to drop items at a specific item location

.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [indexAtLocationOfDroppedItem](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems:](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation](dropoperation%28%29.md): Returns the current drop operation.
