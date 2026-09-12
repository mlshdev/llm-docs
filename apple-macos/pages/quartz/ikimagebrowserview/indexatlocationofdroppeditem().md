> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/indexatlocationofdroppeditem()](https://developer.apple.com/documentation/quartz/ikimagebrowserview/indexatlocationofdroppeditem())

# indexAtLocationOfDroppedItem() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the index of the cell where the drop operation occurred.

## Declaration

```swift
func indexAtLocationOfDroppedItem() -> Int
```

<a id="return-value"></a>

## Return Value

The index of the cell where the drop operation occurred.

<a id="Discussion"></a>

## Discussion

The returned index is valid until the next drop occurs.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate()](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [setAllowsDroppingOnItems(\_:)](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems()](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation()](dropoperation%28%29.md): Returns the current drop operation.

# indexAtLocationOfDroppedItem (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the index of the cell where the drop operation occurred.

## Declaration

```objectivec
- (NSUInteger) indexAtLocationOfDroppedItem;
```

<a id="return-value"></a>

## Return Value

The index of the cell where the drop operation occurred.

<a id="Discussion"></a>

## Discussion

The returned index is valid until the next drop occurs.

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [setAllowsDroppingOnItems:](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation](dropoperation%28%29.md): Returns the current drop operation.
