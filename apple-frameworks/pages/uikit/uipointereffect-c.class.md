> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointereffect-c.class](https://developer.apple.com/documentation/uikit/uipointereffect-c.class)

# UIPointerEffect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An effect that alters a view’s appearance when a pointer enters the current region.

## Declaration

```objectivec
@interface UIPointerEffect : NSObject
```

<a id="overview"></a>

## Overview

[UIPointerEffect](uipointereffect-swift.enum.md) attempts to determine the appropriate effect for the given preview automatically. Use one of its subclasses to request a specific system-provided effect.

## Topics

### Accessing the preview

- [preview](uipointereffect-c.class/preview.md): A preview of the view used during an interaction’s animations.

### Creating a default effect

- [effectWithPreview:](uipointereffect-c.class/effectwithpreview_.md): Creates a pointer content effect with the given preview’s view.

### Creating a specific effect

- [UIPointerHighlightEffect](uipointerhighlighteffect.md): An effect where the pointer slides under the given view and morphs into the view’s shape.
- [UIPointerHoverEffect](uipointerhovereffect.md): An effect where visual changes apply to the view and the pointer retains its default shape.
- [UIPointerLiftEffect](uipointerlifteffect.md): An effect where the pointer slides under the given view and disappears as the view scales up and gains a shadow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPointerHighlightEffect](uipointerhighlighteffect.md)
- [UIPointerHoverEffect](uipointerhovereffect.md)
- [UIPointerLiftEffect](uipointerlifteffect.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [UIHoverEffect](uihovereffect-ukid.md)

## See Also

### Pointer styles

- [UIPointerStyle](uipointerstyle.md): An object that defines the pointer shape and effect.
- [UIPointerShape](uipointershape-c.class.md): An object that defines the shape of custom pointers.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.
