> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrol](https://developer.apple.com/documentation/touchcontroller/tccontrol)

# TCControl (Swift)

**Framework:** Touch Controller  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A protocol that defines the base properties and methods for all touch controls.

## Declaration

```swift
protocol TCControl : TCControlLayout
```

## Topics

### Inspecting a control

- [isEnabled](tccontrol/isenabled.md): A Boolean value that indicates whether the control is enabled.
- [highlightDuration](tccontrol/highlightduration.md): The duration of the highlight animation.
- [label](tccontrol/label.md): The label associated with the control.
- [TCControlLabel](tccontrollabel.md): A label you associate with a touch control and provides a semantic description.
- [isPressed](tccontrol/ispressed.md): Indicates whether the control is currently pressed.

### Handling touches

- [handleTouchBegan(at:)](tccontrol/handletouchbegan%28at_%29.md): Handles a touch began event at the specified point.
- [handleTouchMoved(at:)](tccontrol/handletouchmoved%28at_%29.md): Handles a touch moved event at the specified point.
- [handleTouchEnded(at:)](tccontrol/handletouchended%28at_%29.md): Handles a touch ended event at the specified point.

### Getting the collider shape

- [colliderShape](tccontrol/collidershape.md): The collider shape for the control.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [TCControlLayout](tccontrollayout.md)

### Conforming Types

- [TCButton](tcbutton.md)
- [TCDirectionPad](tcdirectionpad.md)
- [TCSwitch](tcswitch.md)
- [TCThrottle](tcthrottle.md)
- [TCThumbstick](tcthumbstick.md)
- [TCTouchpad](tctouchpad.md)

## See Also

### Controls

- [TCButton](tcbutton.md): A control that represents a single on-screen button.
- [TCDirectionPad](tcdirectionpad.md): An object that represents a direction pad.
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

# TCControl (Objective-C)

**Framework:** Touch Controller  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A protocol that defines the base properties and methods for all touch controls.

## Declaration

```objectivec
@protocol TCControl <NSObject, TCControlLayout>
```

## Topics

### Inspecting a control

- [enabled](tccontrol/isenabled.md): A Boolean value that indicates whether the control is enabled.
- [highlightDuration](tccontrol/highlightduration.md): The duration of the highlight animation.
- [label](tccontrol/label.md): The label associated with the control.
- [TCControlLabel](tccontrollabel.md): A label you associate with a touch control and provides a semantic description.
- [pressed](tccontrol/ispressed.md): Indicates whether the control is currently pressed.

### Handling touches

- [handleTouchBeganAtPoint:](tccontrol/handletouchbegan%28at_%29.md): Handles a touch began event at the specified point.
- [handleTouchMovedAtPoint:](tccontrol/handletouchmoved%28at_%29.md): Handles a touch moved event at the specified point.
- [handleTouchEndedAtPoint:](tccontrol/handletouchended%28at_%29.md): Handles a touch ended event at the specified point.

### Getting the collider shape

- [colliderShape](tccontrol/collidershape.md): The collider shape for the control.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [TCControlLayout](tccontrollayout.md)

### Conforming Types

- [TCButton](tcbutton.md)
- [TCDirectionPad](tcdirectionpad.md)
- [TCSwitch](tcswitch.md)
- [TCThrottle](tcthrottle.md)
- [TCThumbstick](tcthumbstick.md)
- [TCTouchpad](tctouchpad.md)

## See Also

### Controls

- [TCButton](tcbutton.md): A control that represents a single on-screen button.
- [TCDirectionPad](tcdirectionpad.md): An object that represents a direction pad.
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.
