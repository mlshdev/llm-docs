> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setdraggingdestinationdelegate(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setdraggingdestinationdelegate(_:))

# setDraggingDestinationDelegate(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the dragging destination delegate of the receiver.

## Declaration

```swift
func setDraggingDestinationDelegate(_ delegate: Any!)
```

## Parameters

- `delegate`: The delegate ([NSDraggingDestination](../../appkit/nsdraggingdestination.md)) to set.

## See Also

### Supporting Drag and Drop

- [draggingDestinationDelegate()](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem()](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems(\_:)](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems()](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation()](dropoperation%28%29.md): Returns the current drop operation.

# setDraggingDestinationDelegate: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the dragging destination delegate of the receiver.

## Declaration

```objectivec
- (void) setDraggingDestinationDelegate:(id) delegate;
```

## Parameters

- `delegate`: The delegate ([NSDraggingDestination](../../appkit/nsdraggingdestination.md)) to set.

## See Also

### Supporting Drag and Drop

- [draggingDestinationDelegate](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems:](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation](dropoperation%28%29.md): Returns the current drop operation.
