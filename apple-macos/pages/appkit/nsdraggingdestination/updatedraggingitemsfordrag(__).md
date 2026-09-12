> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/updatedraggingitemsfordrag(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/updatedraggingitemsfordrag(_:))

# updateDraggingItemsForDrag(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when the dragging images should be changed.

## Declaration

```swift
@MainActor optional func updateDraggingItemsForDrag(_ sender: (any NSDraggingInfo)?)
```

## Parameters

- `sender`: The object sending the message; use this object to get details about the dragging operation.

<a id="Discussion"></a>

## Discussion

While a destination may change the dragging images at any time, it is recommended to wait until this method is called before updating the dragging images.

This allows the system to delay changing the dragging images until it is likely that the user will drop on this destination. Otherwise, the dragging images will change too often during the drag which would be distracting to the user.

During `enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:` you may set non-acceptable drag items images to `nil` to hide them or use the enumeration option of [clearNonenumeratedImages](../nsdraggingitemenumerationoptions/clearnonenumeratedimages.md)  If there are items that you hide, then after enumeration, you need to set the [numberOfValidItemsForDrop](../nsdragginginfo/numberofvaliditemsfordrop.md) to the number of non-hidden drag items. However, if the valid item count is `0`, then it is better to return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) from your implementation of [draggingEntered(\_:)](draggingentered%28__%29.md) and, or [draggingUpdated(\_:)](draggingupdated%28__%29.md) instead of hiding all drag items during enumeration.

# updateDraggingItemsForDrag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when the dragging images should be changed.

## Declaration

```objectivec
- (void) updateDraggingItemsForDrag:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use this object to get details about the dragging operation.

<a id="Discussion"></a>

## Discussion

While a destination may change the dragging images at any time, it is recommended to wait until this method is called before updating the dragging images.

This allows the system to delay changing the dragging images until it is likely that the user will drop on this destination. Otherwise, the dragging images will change too often during the drag which would be distracting to the user.

During `enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:` you may set non-acceptable drag items images to `nil` to hide them or use the enumeration option of [NSDraggingItemEnumerationClearNonenumeratedImages](../nsdraggingitemenumerationoptions/clearnonenumeratedimages.md)  If there are items that you hide, then after enumeration, you need to set the [numberOfValidItemsForDrop](../nsdragginginfo/numberofvaliditemsfordrop.md) to the number of non-hidden drag items. However, if the valid item count is `0`, then it is better to return [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md) from your implementation of [draggingEntered:](draggingentered%28__%29.md) and, or [draggingUpdated:](draggingupdated%28__%29.md) instead of hiding all drag items during enumeration.
