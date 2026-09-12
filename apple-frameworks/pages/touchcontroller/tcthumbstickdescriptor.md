> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthumbstickdescriptor](https://developer.apple.com/documentation/touchcontroller/tcthumbstickdescriptor)

# TCThumbstickDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a thumbstick.

## Declaration

```swift
class TCThumbstickDescriptor
```

## Topics

### Creating the descriptor

- [init()](tcthumbstickdescriptor/init%28%29.md): Creates a new thumbstick descriptor with default values.

### Inspecting the descriptor

- [backgroundContents](tcthumbstickdescriptor/backgroundcontents.md): The contents for the background of the thumbstick.
- [hidesWhenNotPressed](tcthumbstickdescriptor/hideswhennotpressed.md): Whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](tcthumbstickdescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](tcthumbstickdescriptor/label.md): The label associated with the thumbstick.
- [offset](tcthumbstickdescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [size](tcthumbstickdescriptor/size.md): The size (width, height) of the thumbstick in points.
- [stickContents](tcthumbstickdescriptor/stickcontents.md): The contents for the thumbstick itself.
- [stickSize](tcthumbstickdescriptor/sticksize.md): The size (width, height) of the thumbstick stick itself in points.
- [zIndex](tcthumbstickdescriptor/zindex.md): The z-index of the thumbstick. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcthumbstickdescriptor/anchor.md): The anchor point that the thumbstick’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcthumbstickdescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcthumbstickdescriptor/collidershape.md): The shape of collider to use for the thumbstick.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Adding a thumbstick control

- [addThumbstick(descriptor:)](tctouchcontroller/addthumbstick%28descriptor_%29.md): Creates a new thumbstick control with the provided descriptor, and adds it to the touch controller.

# TCThumbstickDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a thumbstick.

## Declaration

```objectivec
@interface TCThumbstickDescriptor : NSObject
```

## Topics

### Creating the descriptor

- [init](tcthumbstickdescriptor/init%28%29.md): Creates a new thumbstick descriptor with default values.

### Inspecting the descriptor

- [backgroundContents](tcthumbstickdescriptor/backgroundcontents.md): The contents for the background of the thumbstick.
- [hidesWhenNotPressed](tcthumbstickdescriptor/hideswhennotpressed.md): Whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](tcthumbstickdescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](tcthumbstickdescriptor/label.md): The label associated with the thumbstick.
- [offset](tcthumbstickdescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [size](tcthumbstickdescriptor/size.md): The size (width, height) of the thumbstick in points.
- [stickContents](tcthumbstickdescriptor/stickcontents.md): The contents for the thumbstick itself.
- [stickSize](tcthumbstickdescriptor/sticksize.md): The size (width, height) of the thumbstick stick itself in points.
- [zIndex](tcthumbstickdescriptor/zindex.md): The z-index of the thumbstick. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcthumbstickdescriptor/anchor.md): The anchor point that the thumbstick’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcthumbstickdescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcthumbstickdescriptor/collidershape.md): The shape of collider to use for the thumbstick.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding a thumbstick control

- [addThumbstickWithDescriptor:](tctouchcontroller/addthumbstick%28descriptor_%29.md): Creates a new thumbstick control with the provided descriptor, and adds it to the touch controller.
