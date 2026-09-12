> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/item](https://developer.apple.com/documentation/appkit/nsdraggingitem/item)

# item (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The pasteboard reader or writer object dependent on the context where you use the dragging item.

## Declaration

```swift
var item: Any { get }
```

<a id="Discussion"></a>

## Discussion

When you create an `NSDraggingItem` instance, `item` is the `pasteboardWriter` passed to [init(pasteboardWriter:)](init%28pasteboardwriter_%29.md).

However, when enumerating dragging items using the [NSDraggingSession](../nsdraggingsession.md) method [enumerateDraggingItems(options:for:classes:searchOptions:using:)](../nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) or the [NSDraggingInfo](../nsdragginginfo.md) method [enumerateDraggingItems(options:for:classes:searchOptions:using:)](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md), `item` is not the original pasteboard reader or writer instance. It is an instance of one of the classes provided to the enumeration method’s `classArray` parameter.

## See Also

### Drag image components

- [imageComponents](imagecomponents.md): An array of dragging image components to use to create the drag image.
- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [NSDraggingItem.ImageComponentKey](imagecomponentkey.md): Keys that identify components of a dragging image.

# item (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The pasteboard reader or writer object dependent on the context where you use the dragging item.

## Declaration

```objectivec
@property (strong, readonly) id item;
```

<a id="Discussion"></a>

## Discussion

When you create an `NSDraggingItem` instance, `item` is the `pasteboardWriter` passed to [initWithPasteboardWriter:](init%28pasteboardwriter_%29.md).

However, when enumerating dragging items using the [NSDraggingSession](../nsdraggingsession.md) method [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](../nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md) or the [NSDraggingInfo](../nsdragginginfo.md) method [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](../nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md), `item` is not the original pasteboard reader or writer instance. It is an instance of one of the classes provided to the enumeration method’s `classArray` parameter.

## See Also

### Drag image components

- [imageComponents](imagecomponents.md): An array of dragging image components to use to create the drag image.
- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [NSDraggingImageComponentKey](imagecomponentkey.md): Keys that identify components of a dragging image.
