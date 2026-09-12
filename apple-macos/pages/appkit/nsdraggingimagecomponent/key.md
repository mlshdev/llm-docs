> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingimagecomponent/key](https://developer.apple.com/documentation/appkit/nsdraggingimagecomponent/key)

# key (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The unique name of this image component instance.

## Declaration

```swift
var key: NSDraggingItem.ImageComponentKey { get set }
```

<a id="Discussion"></a>

## Discussion

The key must be unique for each component in an [NSDraggingItem](../nsdraggingitem.md) instance. You can create your own named components, however the keys described in [NSDragImage Component Keys](../nsdragimage-component-keys.md) have special meanings.

When an NSDraggingItem instances [imageComponents](../nsdraggingitem/imagecomponents.md) are changed by one of the `enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:` methods the image associated with this key is morphed into the new image component’s image associated with the same key.

# key (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The unique name of this image component instance.

## Declaration

```objectivec
@property (copy) NSDraggingImageComponentKey key;
```

<a id="Discussion"></a>

## Discussion

The key must be unique for each component in an [NSDraggingItem](../nsdraggingitem.md) instance. You can create your own named components, however the keys described in [NSDragImage Component Keys](../nsdragimage-component-keys.md) have special meanings.

When an NSDraggingItem instances [imageComponents](../nsdraggingitem/imagecomponents.md) are changed by one of the `enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:` methods the image associated with this key is morphed into the new image component’s image associated with the same key.
