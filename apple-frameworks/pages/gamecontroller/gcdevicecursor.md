> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicecursor](https://developer.apple.com/documentation/gamecontroller/gcdevicecursor)

# GCDeviceCursor (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A control element for the cursor used as a directional pad.

## Declaration

```swift
class GCDeviceCursor
```

<a id="overview"></a>

## Overview

This controller element allows you to use the cursor as a directional pad with the values of the [xAxis](gccontrollerdirectionpad/xaxis.md) and [yAxis](gccontrollerdirectionpad/yaxis.md) elements scaled to the width and height of the screen, not ranging from `-1` to `1`.

## Relationships

### Inherits From

- [GCControllerDirectionPad](gccontrollerdirectionpad.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

# GCDeviceCursor (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A control element for the cursor used as a directional pad.

## Declaration

```objectivec
@interface GCDeviceCursor : GCControllerDirectionPad
```

<a id="overview"></a>

## Overview

This controller element allows you to use the cursor as a directional pad with the values of the [xAxis](gccontrollerdirectionpad/xaxis.md) and [yAxis](gccontrollerdirectionpad/yaxis.md) elements scaled to the width and height of the screen, not ranging from `-1` to `1`.

## Relationships

### Inherits From

- [GCControllerDirectionPad](gccontrollerdirectionpad.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.
