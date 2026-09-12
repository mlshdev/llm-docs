> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/allowsdroppingonitems()](https://developer.apple.com/documentation/quartz/ikimagebrowserview/allowsdroppingonitems())

# allowsDroppingOnItems() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns whether the user can drop on items.

## Declaration

```swift
func allowsDroppingOnItems() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is able to drop on items, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate()](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem()](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems(\_:)](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [dropOperation()](dropoperation%28%29.md): Returns the current drop operation.

# allowsDroppingOnItems (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns whether the user can drop on items.

## Declaration

```objectivec
- (BOOL) allowsDroppingOnItems;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is able to drop on items, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems:](setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [dropOperation](dropoperation%28%29.md): Returns the current drop operation.
