> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewitem/draggingimagecomponents](https://developer.apple.com/documentation/appkit/nscollectionviewitem/draggingimagecomponents)

# draggingImageComponents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Dragging images for multi-image drag and drop support.

## Declaration

```swift
var draggingImageComponents: [NSDraggingImageComponent] { get }
```

<a id="Discussion"></a>

## Discussion

The component frames are relative to a coordinate system that has its origin at the bottom left, so you need to take into account the flipped state of your view when computing the component frames.

This methods can be subclassed and overridden to provide a custom set of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) objects to create the drag image.

The default implementation will return an array of up to two [NSDraggingImageComponent](../nsdraggingimagecomponent.md) instances – one for the [imageView](imageview.md) and another for the [textField](textfield.md) (if not `nil`).

# draggingImageComponents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Dragging images for multi-image drag and drop support.

## Declaration

```objectivec
@property (readonly) NSArray<NSDraggingImageComponent *> * draggingImageComponents;
```

<a id="Discussion"></a>

## Discussion

The component frames are relative to a coordinate system that has its origin at the bottom left, so you need to take into account the flipped state of your view when computing the component frames.

This methods can be subclassed and overridden to provide a custom set of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) objects to create the drag image.

The default implementation will return an array of up to two [NSDraggingImageComponent](../nsdraggingimagecomponent.md) instances – one for the [imageView](imageview.md) and another for the [textField](textfield.md) (if not `nil`).
