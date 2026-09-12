> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/shouldcollapseautoexpandeditems(fordeposited:)](https://developer.apple.com/documentation/appkit/nsoutlineview/shouldcollapseautoexpandeditems(fordeposited:))

# shouldCollapseAutoExpandedItems(forDeposited:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether auto-expanded items should return to their original collapsed state.

## Declaration

```swift
func shouldCollapseAutoExpandedItems(forDeposited deposited: Bool) -> Bool
```

## Parameters

- `deposited`: If [true](https://developer.apple.com/documentation/swift/true), the drop terminated successfully; if [false](https://developer.apple.com/documentation/swift/false) the drop failed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if auto-expanded items should return to their original collapsed state; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Override this method to provide custom behavior. If the target of a drop is not auto-expanded (by hovering long enough) the drop target still gets expanded after a successful drop unless this method returns [true](https://developer.apple.com/documentation/swift/true). The default implementation returns [false](https://developer.apple.com/documentation/swift/false) after a successful drop.

This method is called in a variety of situations. For example, it is called shortly after the [outlineView(\_:acceptDrop:item:childIndex:)](../nsoutlineviewdatasource/outlineview%28__acceptdrop_item_childindex_%29.md) method is called and also if the drag exits the outline view (exiting the view is treated the same as a failed drop). The return value of the [outlineView(\_:acceptDrop:item:childIndex:)](../nsoutlineviewdatasource/outlineview%28__acceptdrop_item_childindex_%29.md) method determines the incoming value of the `deposited` parameter.

## See Also

### Supporting Drag and Drop

- [setDropItem(\_:dropChildIndex:)](setdropitem%28__dropchildindex_%29.md): Used to “retarget” a proposed drop.

# shouldCollapseAutoExpandedItemsForDeposited: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether auto-expanded items should return to their original collapsed state.

## Declaration

```objectivec
- (BOOL) shouldCollapseAutoExpandedItemsForDeposited:(BOOL) deposited;
```

## Parameters

- `deposited`: If [true](https://developer.apple.com/documentation/swift/true), the drop terminated successfully; if [false](https://developer.apple.com/documentation/swift/false) the drop failed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if auto-expanded items should return to their original collapsed state; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Override this method to provide custom behavior. If the target of a drop is not auto-expanded (by hovering long enough) the drop target still gets expanded after a successful drop unless this method returns [true](https://developer.apple.com/documentation/swift/true). The default implementation returns [false](https://developer.apple.com/documentation/swift/false) after a successful drop.

This method is called in a variety of situations. For example, it is called shortly after the [outlineView:acceptDrop:item:childIndex:](../nsoutlineviewdatasource/outlineview%28__acceptdrop_item_childindex_%29.md) method is called and also if the drag exits the outline view (exiting the view is treated the same as a failed drop). The return value of the [outlineView:acceptDrop:item:childIndex:](../nsoutlineviewdatasource/outlineview%28__acceptdrop_item_childindex_%29.md) method determines the incoming value of the `deposited` parameter.

## See Also

### Supporting Drag and Drop

- [setDropItem:dropChildIndex:](setdropitem%28__dropchildindex_%29.md): Used to “retarget” a proposed drop.
