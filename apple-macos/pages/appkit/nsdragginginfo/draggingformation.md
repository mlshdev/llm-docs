> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggingformation](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggingformation)

# draggingFormation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The formation of the dragging items while the drag is over the destination.

## Declaration

```swift
@MainActor var draggingFormation: NSDraggingFormation { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to change the formation of the drag items. This is generally done during the [updateDraggingItemsForDrag(\_:)](../nsdraggingdestination/updatedraggingitemsfordrag%28__%29.md) method or whenever you enumerate the dragging items.

The default value is the current drag formation.

> **Note**

>  Set this property before or after the [NSDraggingInfo](../nsdragginginfo.md) or [NSDraggingSession](../nsdraggingsession.md) class’s method [enumerateDraggingItems(options:for:classes:searchOptions:using:)](enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) not inside the enumeration Block.

## See Also

### Sliding the image

- [slideDraggedImage(to:)](slidedraggedimage%28to_%29.md): Slides the image to a specified location.
- [animatesToDestination](animatestodestination.md): A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.

# draggingFormation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The formation of the dragging items while the drag is over the destination.

## Declaration

```objectivec
@property NSDraggingFormation draggingFormation;
```

<a id="Discussion"></a>

## Discussion

Set this property to change the formation of the drag items. This is generally done during the [updateDraggingItemsForDrag:](../nsdraggingdestination/updatedraggingitemsfordrag%28__%29.md) method or whenever you enumerate the dragging items.

The default value is the current drag formation.

> **Note**

>  Set this property before or after the [NSDraggingInfo](../nsdragginginfo.md) or [NSDraggingSession](../nsdraggingsession.md) class’s method [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) not inside the enumeration Block.

## See Also

### Sliding the image

- [slideDraggedImageTo:](slidedraggedimage%28to_%29.md): Slides the image to a specified location.
- [animatesToDestination](animatestodestination.md): A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.
