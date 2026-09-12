> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/imagecomponentsprovider](https://developer.apple.com/documentation/appkit/nsdraggingitem/imagecomponentsprovider)

# imageComponentsProvider (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of blocks that provide the dragging image components.

## Declaration

```swift
var imageComponentsProvider: (() -> [NSDraggingImageComponent])? { get set }
```

<a id="Discussion"></a>

## Discussion

The dragging image is the composite of an array of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) objects.

The dragging image components aren’t set directly. Instead, use a block to generate the components and the system calls the block if necessary.

You can set the block to `nil`, meaning that the drag item has no image. Generally, only dragging destinations do this, and only if there’s at least one valid item in the drop, and the receiver isn’t that object.

The system arranges the components in painting order. That is, the system paints each component in the array on top of the previous components in the array.

## See Also

### Drag image components

- [imageComponents](imagecomponents.md): An array of dragging image components to use to create the drag image.
- [NSDraggingItem.ImageComponentKey](imagecomponentkey.md): Keys that identify components of a dragging image.
- [item](item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.

# imageComponentsProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of blocks that provide the dragging image components.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSDraggingImageComponent *> * (^imageComponentsProvider)();
```

<a id="Discussion"></a>

## Discussion

The dragging image is the composite of an array of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) objects.

The dragging image components aren’t set directly. Instead, use a block to generate the components and the system calls the block if necessary.

You can set the block to `nil`, meaning that the drag item has no image. Generally, only dragging destinations do this, and only if there’s at least one valid item in the drop, and the receiver isn’t that object.

The system arranges the components in painting order. That is, the system paints each component in the array on top of the previous components in the array.

## See Also

### Drag image components

- [imageComponents](imagecomponents.md): An array of dragging image components to use to create the drag image.
- [NSDraggingImageComponentKey](imagecomponentkey.md): Keys that identify components of a dragging image.
- [item](item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.
