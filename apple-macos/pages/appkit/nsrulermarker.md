> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker](https://developer.apple.com/documentation/appkit/nsrulermarker)

# NSRulerMarker (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A symbol on a ruler view, indicating a location for the graphics element it represents in the client of the ruler view.

## Declaration

```swift
class NSRulerMarker
```

<a id="overview"></a>

## Overview

An example of a marker is the representation of a margin or tab setting, or the edges of a graphic on the page.

## Topics

### Creating instances

- [init(rulerView:markerLocation:image:imageOrigin:)](nsrulermarker/init%28rulerview_markerlocation_image_imageorigin_%29.md): Initializes a newly allocated ruler marker, associating it with (but not adding it to) a specified ruler view and assigning the attributes provided.

### Getting the ruler view

- [ruler](nsrulermarker/ruler.md): The receiver’s ruler view.

### Setting the image

- [image](nsrulermarker/image.md): The receiver’s image.
- [imageOrigin](nsrulermarker/imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
- [imageRectInRuler](nsrulermarker/imagerectinruler.md): The rectangle occupied by the receiver’s image.
- [thicknessRequiredInRuler](nsrulermarker/thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.

### Setting movability

- [isMovable](nsrulermarker/ismovable.md): A Boolean that indicates whether the user can move the receiver in its ruler view.
- [isRemovable](nsrulermarker/isremovable.md): A Boolean that indicates whether the user can remove the receiver from its ruler view.

### Setting the location

- [markerLocation](nsrulermarker/markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Setting the represented object

- [representedObject](nsrulermarker/representedobject.md): The object the receiver represents.

### Drawing and event handling

- [draw(\_:)](nsrulermarker/draw%28__%29.md): Draws the receiver’s image that appears in the supplied rectangle.
- [isDragging](nsrulermarker/isdragging.md): A Boolean that indicates whether the receiver is being dragged.
- [trackMouse(with:adding:)](nsrulermarker/trackmouse%28with_adding_%29.md): Handles user manipulation of the receiver in its ruler view.

### Initializers

- [init(coder:)](nsrulermarker/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Rulers

- [NSRulerView](nsrulerview.md): A ruler and the markers above or to the side of a scroll view’s document view.

# NSRulerMarker (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A symbol on a ruler view, indicating a location for the graphics element it represents in the client of the ruler view.

## Declaration

```objectivec
@interface NSRulerMarker : NSObject
```

<a id="overview"></a>

## Overview

An example of a marker is the representation of a margin or tab setting, or the edges of a graphic on the page.

## Topics

### Creating instances

- [initWithRulerView:markerLocation:image:imageOrigin:](nsrulermarker/init%28rulerview_markerlocation_image_imageorigin_%29.md): Initializes a newly allocated ruler marker, associating it with (but not adding it to) a specified ruler view and assigning the attributes provided.

### Getting the ruler view

- [ruler](nsrulermarker/ruler.md): The receiver’s ruler view.

### Setting the image

- [image](nsrulermarker/image.md): The receiver’s image.
- [imageOrigin](nsrulermarker/imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
- [imageRectInRuler](nsrulermarker/imagerectinruler.md): The rectangle occupied by the receiver’s image.
- [thicknessRequiredInRuler](nsrulermarker/thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.

### Setting movability

- [movable](nsrulermarker/ismovable.md): A Boolean that indicates whether the user can move the receiver in its ruler view.
- [removable](nsrulermarker/isremovable.md): A Boolean that indicates whether the user can remove the receiver from its ruler view.

### Setting the location

- [markerLocation](nsrulermarker/markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Setting the represented object

- [representedObject](nsrulermarker/representedobject.md): The object the receiver represents.

### Drawing and event handling

- [drawRect:](nsrulermarker/draw%28__%29.md): Draws the receiver’s image that appears in the supplied rectangle.
- [dragging](nsrulermarker/isdragging.md): A Boolean that indicates whether the receiver is being dragged.
- [trackMouse:adding:](nsrulermarker/trackmouse%28with_adding_%29.md): Handles user manipulation of the receiver in its ruler view.

### Initializers

- [initWithCoder:](nsrulermarker/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Rulers

- [NSRulerView](nsrulerview.md): A ruler and the markers above or to the side of a scroll view’s document view.
