> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/imagecomponents](https://developer.apple.com/documentation/appkit/nsdraggingitem/imagecomponents)

# imageComponents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of dragging image components to use to create the drag image.

## Declaration

```swift
var imageComponents: [NSDraggingImageComponent]? { get }
```

<a id="Discussion"></a>

## Discussion

The array contains copies of the components. The drag does not reflect changes you make to these copies. If needed, the system calls the [imageComponentsProvider](imagecomponentsprovider.md) block to generate the image components.

## See Also

### Drag image components

- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [NSDraggingItem.ImageComponentKey](imagecomponentkey.md): Keys that identify components of a dragging image.
- [item](item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.

# imageComponents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of dragging image components to use to create the drag image.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSDraggingImageComponent *> * imageComponents;
```

<a id="Discussion"></a>

## Discussion

The array contains copies of the components. The drag does not reflect changes you make to these copies. If needed, the system calls the [imageComponentsProvider](imagecomponentsprovider.md) block to generate the image components.

## See Also

### Drag image components

- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [NSDraggingImageComponentKey](imagecomponentkey.md): Keys that identify components of a dragging image.
- [item](item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.
