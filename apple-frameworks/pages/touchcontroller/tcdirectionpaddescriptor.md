> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcdirectionpaddescriptor](https://developer.apple.com/documentation/touchcontroller/tcdirectionpaddescriptor)

# TCDirectionPadDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a directional pad.

## Declaration

```swift
class TCDirectionPadDescriptor
```

## Topics

### Creating the descriptor

- [init()](tcdirectionpaddescriptor/init%28%29.md): Creates a new instance with default values.

### Inspecting the descriptor

- [compositeLabel](tcdirectionpaddescriptor/compositelabel.md): A composite control label.
- [downContents](tcdirectionpaddescriptor/downcontents.md): The contents for the down button.
- [downLabel](tcdirectionpaddescriptor/downlabel.md): The label for the down button, if the control is not a composite direction pad.
- [highlightDuration](tcdirectionpaddescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [inputIsMutuallyExclusive](tcdirectionpaddescriptor/inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [isDigital](tcdirectionpaddescriptor/isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [isRadial](tcdirectionpaddescriptor/isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](tcdirectionpaddescriptor/leftcontents.md): The contents for the left button.
- [leftLabel](tcdirectionpaddescriptor/leftlabel.md): The label for the left button, if the control is not a composite direction pad.
- [offset](tcdirectionpaddescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [rightContents](tcdirectionpaddescriptor/rightcontents.md): The contents for the right button.
- [rightLabel](tcdirectionpaddescriptor/rightlabel.md): The label for the right button, if the control is not a composite direction pad.
- [size](tcdirectionpaddescriptor/size.md): The size (width, height) of the direction pad in points.
- [upContents](tcdirectionpaddescriptor/upcontents.md): The contents for the up button.
- [upLabel](tcdirectionpaddescriptor/uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
- [zIndex](tcdirectionpaddescriptor/zindex.md): The z-index of the direction pad. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcdirectionpaddescriptor/anchor.md): The anchor point that the direction pad’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcdirectionpaddescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcdirectionpaddescriptor/collidershape.md): The shape of collider to use for the direction pad.
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

### Adding a directional pad control

- [addDirectionPad(descriptor:)](tctouchcontroller/adddirectionpad%28descriptor_%29.md): Creates a new direction pad control with the provided descriptor, and adds it to the touch controller.

# TCDirectionPadDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a directional pad.

## Declaration

```objectivec
@interface TCDirectionPadDescriptor : NSObject
```

## Topics

### Creating the descriptor

- [init](tcdirectionpaddescriptor/init%28%29.md): Creates a new instance with default values.

### Inspecting the descriptor

- [compositeLabel](tcdirectionpaddescriptor/compositelabel.md): A composite control label.
- [downContents](tcdirectionpaddescriptor/downcontents.md): The contents for the down button.
- [downLabel](tcdirectionpaddescriptor/downlabel.md): The label for the down button, if the control is not a composite direction pad.
- [highlightDuration](tcdirectionpaddescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [mutuallyExclusiveInput](tcdirectionpaddescriptor/inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [digital](tcdirectionpaddescriptor/isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [radial](tcdirectionpaddescriptor/isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](tcdirectionpaddescriptor/leftcontents.md): The contents for the left button.
- [leftLabel](tcdirectionpaddescriptor/leftlabel.md): The label for the left button, if the control is not a composite direction pad.
- [offset](tcdirectionpaddescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [rightContents](tcdirectionpaddescriptor/rightcontents.md): The contents for the right button.
- [rightLabel](tcdirectionpaddescriptor/rightlabel.md): The label for the right button, if the control is not a composite direction pad.
- [size](tcdirectionpaddescriptor/size.md): The size (width, height) of the direction pad in points.
- [upContents](tcdirectionpaddescriptor/upcontents.md): The contents for the up button.
- [upLabel](tcdirectionpaddescriptor/uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
- [zIndex](tcdirectionpaddescriptor/zindex.md): The z-index of the direction pad. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcdirectionpaddescriptor/anchor.md): The anchor point that the direction pad’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcdirectionpaddescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcdirectionpaddescriptor/collidershape.md): The shape of collider to use for the direction pad.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding a directional pad control

- [addDirectionPadWithDescriptor:](tctouchcontroller/adddirectionpad%28descriptor_%29.md): Creates a new direction pad control with the provided descriptor, and adds it to the touch controller.
