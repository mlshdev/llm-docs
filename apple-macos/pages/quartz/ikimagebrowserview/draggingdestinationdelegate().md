> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/draggingdestinationdelegate()](https://developer.apple.com/documentation/quartz/ikimagebrowserview/draggingdestinationdelegate())

# draggingDestinationDelegate() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the dragging destination delegate of the receiver.

## Declaration

```swift
func draggingDestinationDelegate() -> Any!
```

<a id="return-value"></a>

## Return Value

The receiver’s dragging destination delegate.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem()](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems(\_:)](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems()](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation()](dropoperation%28%29.md): Returns the current drop operation.

# draggingDestinationDelegate (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the dragging destination delegate of the receiver.

## Declaration

```objectivec
- (id) draggingDestinationDelegate;
```

<a id="return-value"></a>

## Return Value

The receiver’s dragging destination delegate.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems:](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation](dropoperation%28%29.md): Returns the current drop operation.
