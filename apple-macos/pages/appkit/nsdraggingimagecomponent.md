> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingimagecomponent](https://developer.apple.com/documentation/appkit/nsdraggingimagecomponent)

# NSDraggingImageComponent (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A single object in a dragging item.

## Declaration

```swift
class NSDraggingImageComponent
```

<a id="overview"></a>

## Overview

An array of [NSDraggingImageComponent](nsdraggingimagecomponent.md) instances are composited together to create the dragging image for an [NSDraggingItem](nsdraggingitem.md). [NSDraggingImageComponent](nsdraggingimagecomponent.md) instances can simply be considered as named images with a location used by an [NSDraggingItem](nsdraggingitem.md) instance.

## Topics

### Creating a Dragging Image Component

- [init(key:)](nsdraggingimagecomponent/init%28key_%29.md): Initializes and returns a dragging image component with the specified key.

### Dragging Image Component

- [key](nsdraggingimagecomponent/key.md): The unique name of this image component instance.

### Dragging Image Contents

- [contents](nsdraggingimagecomponent/contents.md): An object providing the image contents of the component.
- [frame](nsdraggingimagecomponent/frame.md): The coordinate space is the bounds of the parent dragging item.

### Constants

- [NSDragImage Component Keys](nsdragimage-component-keys.md): These constants are used by the [init(key:)](nsdraggingimagecomponent/init%28key_%29.md), [draggingImageComponentWithKey:](nsdraggingimagecomponent/draggingimagecomponentwithkey_.md) methods and the [key](nsdraggingimagecomponent/key.md) property.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Drag Sources

- [NSDraggingSource](nsdraggingsource.md): A set of methods that are implemented by the source object in a dragging session.
- [NSDraggingItem](nsdraggingitem.md): A single dragged item within a dragging session.
- [NSDraggingSession](nsdraggingsession.md): An object that encapsulates a drag-and-drop action.

# NSDraggingImageComponent (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A single object in a dragging item.

## Declaration

```objectivec
@interface NSDraggingImageComponent : NSObject
```

<a id="overview"></a>

## Overview

An array of [NSDraggingImageComponent](nsdraggingimagecomponent.md) instances are composited together to create the dragging image for an [NSDraggingItem](nsdraggingitem.md). [NSDraggingImageComponent](nsdraggingimagecomponent.md) instances can simply be considered as named images with a location used by an [NSDraggingItem](nsdraggingitem.md) instance.

## Topics

### Creating a Dragging Image Component

- [initWithKey:](nsdraggingimagecomponent/init%28key_%29.md): Initializes and returns a dragging image component with the specified key.
- [draggingImageComponentWithKey:](nsdraggingimagecomponent/draggingimagecomponentwithkey_.md): Creates and returns a dragging image component with the specified key.

### Dragging Image Component

- [key](nsdraggingimagecomponent/key.md): The unique name of this image component instance.

### Dragging Image Contents

- [contents](nsdraggingimagecomponent/contents.md): An object providing the image contents of the component.
- [frame](nsdraggingimagecomponent/frame.md): The coordinate space is the bounds of the parent dragging item.

### Constants

- [NSDragImage Component Keys](nsdragimage-component-keys.md): These constants are used by the [initWithKey:](nsdraggingimagecomponent/init%28key_%29.md), [draggingImageComponentWithKey:](nsdraggingimagecomponent/draggingimagecomponentwithkey_.md) methods and the [key](nsdraggingimagecomponent/key.md) property.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Drag Sources

- [NSDraggingSource](nsdraggingsource.md): A set of methods that are implemented by the source object in a dragging session.
- [NSDraggingItem](nsdraggingitem.md): A single dragged item within a dragging session.
- [NSDraggingSession](nsdraggingsession.md): An object that encapsulates a drag-and-drop action.
