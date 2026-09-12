> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/draggingframe](https://developer.apple.com/documentation/appkit/nsdraggingitem/draggingframe)

# draggingFrame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The frame of the dragging item.

## Declaration

```swift
var draggingFrame: NSRect { get set }
```

<a id="Discussion"></a>

## Discussion

The dragging frame provides the spatial relationship between [NSDraggingItem](../nsdraggingitem.md) instances when you set the dragging formation to [NSDraggingFormation.none](../nsdraggingformation/none.md).

The exact coordinate space of this rectangle depends on where you use it. Examples are the view that initiates the drag using [beginDraggingSession(with:event:source:)](../nsview/begindraggingsession%28with_event_source_%29.md) or the view you pass to the [NSDraggingSession](../nsdraggingsession.md) implementation of [enumerateDraggingItems(options:for:classes:searchOptions:using:)](../nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md).

## See Also

### Dragging frame

- [setDraggingFrame(\_:contents:)](setdraggingframe%28__contents_%29.md): Sets the item’s dragging frame and contents.

# draggingFrame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The frame of the dragging item.

## Declaration

```objectivec
@property NSRect draggingFrame;
```

<a id="Discussion"></a>

## Discussion

The dragging frame provides the spatial relationship between [NSDraggingItem](../nsdraggingitem.md) instances when you set the dragging formation to [NSDraggingFormationNone](../nsdraggingformation/none.md).

The exact coordinate space of this rectangle depends on where you use it. Examples are the view that initiates the drag using [beginDraggingSessionWithItems:event:source:](../nsview/begindraggingsession%28with_event_source_%29.md) or the view you pass to the [NSDraggingSession](../nsdraggingsession.md) implementation of [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](../nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md).

## See Also

### Dragging frame

- [setDraggingFrame:contents:](setdraggingframe%28__contents_%29.md): Sets the item’s dragging frame and contents.
