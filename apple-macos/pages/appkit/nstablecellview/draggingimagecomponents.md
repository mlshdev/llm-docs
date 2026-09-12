> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecellview/draggingimagecomponents](https://developer.apple.com/documentation/appkit/nstablecellview/draggingimagecomponents)

# draggingImageComponents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns dragging images for the cell.

## Declaration

```swift
var draggingImageComponents: [NSDraggingImageComponent] { get }
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns an array of up to two `NSDraggingImageComponent` instances – one for the [imageView](imageview.md) and another for the [textField](textfield.md) (unless the property is `nil`).

These method can be subclassed and overridden to provide a custom set of `NSDraggingImageComponent` objects to create the drag image from this view.

# draggingImageComponents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns dragging images for the cell.

## Declaration

```objectivec
@property (strong, readonly) NSArray<NSDraggingImageComponent *> * draggingImageComponents;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns an array of up to two `NSDraggingImageComponent` instances – one for the [imageView](imageview.md) and another for the [textField](textfield.md) (unless the property is `nil`).

These method can be subclassed and overridden to provide a custom set of `NSDraggingImageComponent` objects to create the drag image from this view.
