> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcswitchdescriptor](https://developer.apple.com/documentation/touchcontroller/tcswitchdescriptor)

# TCSwitchDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a switch.

## Declaration

```swift
class TCSwitchDescriptor
```

## Topics

### Creating the descriptor

- [init()](tcswitchdescriptor/init%28%29.md): Creates a new switch descriptor with default values.

### Inspecting the descriptor

- [contents](tcswitchdescriptor/contents.md): The contents for the switch in its normal state.
- [highlightDuration](tcswitchdescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](tcswitchdescriptor/label.md): The label you associate with the switch.
- [offset](tcswitchdescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [size](tcswitchdescriptor/size.md): The size (width, height) of the switch in points.
- [switchedOnContents](tcswitchdescriptor/switchedoncontents.md): The contents for the switch when it is switched on.
- [zIndex](tcswitchdescriptor/zindex.md): The z-index of the switch. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcswitchdescriptor/anchor.md): The anchor point that the switch’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcswitchdescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcswitchdescriptor/collidershape.md): The shape of collider to use for the switch.
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

### Adding a switch control

- [addSwitch(descriptor:)](tctouchcontroller/addswitch%28descriptor_%29.md): Creates a new switch control with the provided descriptor, and adds it to the touch controller.

# TCSwitchDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a switch.

## Declaration

```objectivec
@interface TCSwitchDescriptor : NSObject
```

## Topics

### Creating the descriptor

- [init](tcswitchdescriptor/init%28%29.md): Creates a new switch descriptor with default values.

### Inspecting the descriptor

- [contents](tcswitchdescriptor/contents.md): The contents for the switch in its normal state.
- [highlightDuration](tcswitchdescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](tcswitchdescriptor/label.md): The label you associate with the switch.
- [offset](tcswitchdescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [size](tcswitchdescriptor/size.md): The size (width, height) of the switch in points.
- [switchedOnContents](tcswitchdescriptor/switchedoncontents.md): The contents for the switch when it is switched on.
- [zIndex](tcswitchdescriptor/zindex.md): The z-index of the switch. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcswitchdescriptor/anchor.md): The anchor point that the switch’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcswitchdescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcswitchdescriptor/collidershape.md): The shape of collider to use for the switch.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding a switch control

- [addSwitchWithDescriptor:](tctouchcontroller/addswitch%28descriptor_%29.md): Creates a new switch control with the provided descriptor, and adds it to the touch controller.
