> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchpaddescriptor](https://developer.apple.com/documentation/touchcontroller/tctouchpaddescriptor)

# TCTouchpadDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a touchpad.

## Declaration

```swift
class TCTouchpadDescriptor
```

## Topics

### Creating the descriptor

- [init()](tctouchpaddescriptor/init%28%29.md): Creates a new touchpad descriptor with default values.

### Inspecting the descriptor

- [contents](tctouchpaddescriptor/contents.md): The contents for the touchpad.
- [highlightDuration](tctouchpaddescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](tctouchpaddescriptor/label.md): The label associated with the touchpad.
- [offset](tctouchpaddescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [reportsRelativeValues](tctouchpaddescriptor/reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.
- [size](tctouchpaddescriptor/size.md): The size (width, height) of the touchpad in points.
- [zIndex](tctouchpaddescriptor/zindex.md): The z-index of the touchpad. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tctouchpaddescriptor/anchor.md): The anchor point that the touchpad’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tctouchpaddescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tctouchpaddescriptor/collidershape.md): The shape of collider to use for the touchpad.
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

### Adding a touchpad control

- [addTouchpad(descriptor:)](tctouchcontroller/addtouchpad%28descriptor_%29.md): Creates a new touchpad control with the provided descriptor, and adds it to the touch controller.

# TCTouchpadDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a touchpad.

## Declaration

```objectivec
@interface TCTouchpadDescriptor : NSObject
```

## Topics

### Creating the descriptor

- [init](tctouchpaddescriptor/init%28%29.md): Creates a new touchpad descriptor with default values.

### Inspecting the descriptor

- [contents](tctouchpaddescriptor/contents.md): The contents for the touchpad.
- [highlightDuration](tctouchpaddescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](tctouchpaddescriptor/label.md): The label associated with the touchpad.
- [offset](tctouchpaddescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [reportsRelativeValues](tctouchpaddescriptor/reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.
- [size](tctouchpaddescriptor/size.md): The size (width, height) of the touchpad in points.
- [zIndex](tctouchpaddescriptor/zindex.md): The z-index of the touchpad. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tctouchpaddescriptor/anchor.md): The anchor point that the touchpad’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tctouchpaddescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tctouchpaddescriptor/collidershape.md): The shape of collider to use for the touchpad.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding a touchpad control

- [addTouchpadWithDescriptor:](tctouchcontroller/addtouchpad%28descriptor_%29.md): Creates a new touchpad control with the provided descriptor, and adds it to the touch controller.
