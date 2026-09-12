> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcbuttondescriptor](https://developer.apple.com/documentation/touchcontroller/tcbuttondescriptor)

# TCButtonDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a button.

## Declaration

```swift
class TCButtonDescriptor
```

## Topics

### Creating the descriptor

- [init()](tcbuttondescriptor/init%28%29.md): Creates a new button descriptor with default values.

### Inspecting the descriptor

- [contents](tcbuttondescriptor/contents.md): The contents for the button in its normal state.
- [highlightDuration](tcbuttondescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [zIndex](tcbuttondescriptor/zindex.md): The z-index of the button. A lower z-index is drawn first.
- [label](tcbuttondescriptor/label.md): The label you associate with the button.
- [offset](tcbuttondescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [size](tcbuttondescriptor/size.md): The size (width, height) of the button in points.

### Accessing the anchor

- [anchor](tcbuttondescriptor/anchor.md): The anchor point that the button’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcbuttondescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcbuttondescriptor/collidershape.md): The shape of collider to use for the button.
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

### Adding a button control

- [addButton(descriptor:)](tctouchcontroller/addbutton%28descriptor_%29.md): Creates a new button control with the provided descriptor, and adds it to the touch controller.

# TCButtonDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a button.

## Declaration

```objectivec
@interface TCButtonDescriptor : NSObject
```

## Topics

### Creating the descriptor

- [init](tcbuttondescriptor/init%28%29.md): Creates a new button descriptor with default values.

### Inspecting the descriptor

- [contents](tcbuttondescriptor/contents.md): The contents for the button in its normal state.
- [highlightDuration](tcbuttondescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [zIndex](tcbuttondescriptor/zindex.md): The z-index of the button. A lower z-index is drawn first.
- [label](tcbuttondescriptor/label.md): The label you associate with the button.
- [offset](tcbuttondescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [size](tcbuttondescriptor/size.md): The size (width, height) of the button in points.

### Accessing the anchor

- [anchor](tcbuttondescriptor/anchor.md): The anchor point that the button’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcbuttondescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcbuttondescriptor/collidershape.md): The shape of collider to use for the button.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding a button control

- [addButtonWithDescriptor:](tctouchcontroller/addbutton%28descriptor_%29.md): Creates a new button control with the provided descriptor, and adds it to the touch controller.
