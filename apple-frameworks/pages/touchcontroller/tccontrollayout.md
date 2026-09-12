> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollayout](https://developer.apple.com/documentation/touchcontroller/tccontrollayout)

# TCControlLayout (Swift)

**Framework:** Touch Controller  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A protocol defining the controlLayout properties for a control.

## Declaration

```swift
protocol TCControlLayout : NSObjectProtocol
```

## Topics

### Inspecting the control layout

- [anchor](tccontrollayout/anchor.md): The anchor point of the control.
- [anchorCoordinateSystem](tccontrollayout/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [offset](tccontrollayout/offset.md): The offset from the anchor point.
- [position](tccontrollayout/position.md): The calculated position of the control.
- [size](tccontrollayout/size.md): The size of the control in points.
- [zIndex](tccontrollayout/zindex.md): The z-index of the controlLayout, used for z-ordering.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [TCControl](tccontrol.md)

### Conforming Types

- [TCButton](tcbutton.md)
- [TCDirectionPad](tcdirectionpad.md)
- [TCSwitch](tcswitch.md)
- [TCThrottle](tcthrottle.md)
- [TCThumbstick](tcthumbstick.md)
- [TCTouchpad](tctouchpad.md)

## See Also

### Visuals

- [TCControlContents](tccontrolcontents.md): Represents the visual contents of a touch control.
- [TCControlImage](tccontrolimage.md): Represents an image to be rendered using Metal.

# TCControlLayout (Objective-C)

**Framework:** Touch Controller  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A protocol defining the controlLayout properties for a control.

## Declaration

```objectivec
@protocol TCControlLayout <NSObject>
```

## Topics

### Inspecting the control layout

- [anchor](tccontrollayout/anchor.md): The anchor point of the control.
- [anchorCoordinateSystem](tccontrollayout/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [offset](tccontrollayout/offset.md): The offset from the anchor point.
- [position](tccontrollayout/position.md): The calculated position of the control.
- [size](tccontrollayout/size.md): The size of the control in points.
- [zIndex](tccontrollayout/zindex.md): The z-index of the controlLayout, used for z-ordering.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [TCControl](tccontrol.md)

### Conforming Types

- [TCButton](tcbutton.md)
- [TCDirectionPad](tcdirectionpad.md)
- [TCSwitch](tcswitch.md)
- [TCThrottle](tcthrottle.md)
- [TCThumbstick](tcthumbstick.md)
- [TCTouchpad](tctouchpad.md)

## See Also

### Visuals

- [TCControlContents](tccontrolcontents.md): Represents the visual contents of a touch control.
- [TCControlImage](tccontrolimage.md): Represents an image to be rendered using Metal.
