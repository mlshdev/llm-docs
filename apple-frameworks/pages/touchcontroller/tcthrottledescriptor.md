> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthrottledescriptor](https://developer.apple.com/documentation/touchcontroller/tcthrottledescriptor)

# TCThrottleDescriptor (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A descriptor for configuring a throttle.

## Declaration

```swift
class TCThrottleDescriptor
```

## Topics

### Creating the descriptor

- [init()](tcthrottledescriptor/init%28%29.md): Creates a new throttle descriptor with default values.

### Inspecting the descriptor

- [backgroundContents](tcthrottledescriptor/backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](tcthrottledescriptor/basevalue.md): The initial value of this control.
- [highlightDuration](tcthrottledescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](tcthrottledescriptor/indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](tcthrottledescriptor/indicatorsize.md): The size (width, height) of the indicator itself in points.
- [label](tcthrottledescriptor/label.md): The label associated with the throttle.
- [offset](tcthrottledescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [orientation](tcthrottledescriptor/orientation.md): The orientation of the throttle.
- [size](tcthrottledescriptor/size.md): The size (width, height) of the throttle in points.
- [snapsToBaseValue](tcthrottledescriptor/snapstobasevalue.md): A Boolean value that indicates whether the control reverts to it’s base value.
- [throttleSize](tcthrottledescriptor/throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.
- [zIndex](tcthrottledescriptor/zindex.md): The z-index of the throttle. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcthrottledescriptor/anchor.md): The anchor point that the throttle’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcthrottledescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcthrottledescriptor/collidershape.md): The shape of collider to use for the throttle.
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

### Adding a throttle control

- [addThrottle(descriptor:)](tctouchcontroller/addthrottle%28descriptor_%29.md): Creates a new throttle control with the provided descriptor, and adds it to the touch controller.

# TCThrottleDescriptor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A descriptor for configuring a throttle.

## Declaration

```objectivec
@interface TCThrottleDescriptor : NSObject
```

## Topics

### Creating the descriptor

- [init](tcthrottledescriptor/init%28%29.md): Creates a new throttle descriptor with default values.

### Inspecting the descriptor

- [backgroundContents](tcthrottledescriptor/backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](tcthrottledescriptor/basevalue.md): The initial value of this control.
- [highlightDuration](tcthrottledescriptor/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](tcthrottledescriptor/indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](tcthrottledescriptor/indicatorsize.md): The size (width, height) of the indicator itself in points.
- [label](tcthrottledescriptor/label.md): The label associated with the throttle.
- [offset](tcthrottledescriptor/offset.md): The control’s offset from the anchor, which determines its position.
- [orientation](tcthrottledescriptor/orientation.md): The orientation of the throttle.
- [size](tcthrottledescriptor/size.md): The size (width, height) of the throttle in points.
- [snapsToBaseValue](tcthrottledescriptor/snapstobasevalue.md): A Boolean value that indicates whether the control reverts to it’s base value.
- [throttleSize](tcthrottledescriptor/throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.
- [zIndex](tcthrottledescriptor/zindex.md): The z-index of the throttle. A lower z-index is drawn first.

### Accessing the anchor

- [anchor](tcthrottledescriptor/anchor.md): The anchor point that the throttle’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcthrottledescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

### Getting the collider shape

- [colliderShape](tcthrottledescriptor/collidershape.md): The shape of collider to use for the throttle.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding a throttle control

- [addThrottleWithDescriptor:](tctouchcontroller/addthrottle%28descriptor_%29.md): Creates a new throttle control with the provided descriptor, and adds it to the touch controller.
