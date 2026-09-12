> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setallowsdroppingonitems(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setallowsdroppingonitems(_:))

# setAllowsDroppingOnItems(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies whether the user can drop on items.

## Declaration

```swift
func setAllowsDroppingOnItems(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the user is able to drop on items, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate()](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem()](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [allowsDroppingOnItems()](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation()](dropoperation%28%29.md): Returns the current drop operation.

# setAllowsDroppingOnItems: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies whether the user can drop on items.

## Declaration

```objectivec
- (void) setAllowsDroppingOnItems:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the user is able to drop on items, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate](draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem](indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [allowsDroppingOnItems](allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation](dropoperation%28%29.md): Returns the current drop operation.
