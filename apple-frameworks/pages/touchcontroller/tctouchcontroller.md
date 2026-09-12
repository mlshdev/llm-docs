> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller)

# TCTouchController (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that allows you to create and customize on-screen touch controls for a game that uses Metal.

## Declaration

```swift
class TCTouchController
```

<a id="overview"></a>

## Overview

The controller exposes controls through a [GCController](../gamecontroller/gccontroller.md) instance, and enables seamless integration with the [Game Controller](../gamecontroller.md) framework.

This class manages the lifecycle of touch controls, handles user interaction, renders the controls using Metal, and provides a `GCController` instance that reflects the state of the on-screen controls.

## Topics

### Creating a touch controller

- [init(descriptor:)](tctouchcontroller/init%28descriptor_%29.md): Creates a new instance with the provided descriptor.
- [TCTouchControllerDescriptor](tctouchcontrollerdescriptor.md): A descriptor for configuring a touch controller.

### Inspecting the touch controller

- [buttons](tctouchcontroller/buttons.md): An array containing all the button controls managed by this controller.
- [controls](tctouchcontroller/controls.md): An array containing all the touch controls managed by this controller.
- [device](tctouchcontroller/device.md): The Metal device the touch control uses for rendering the touch controls.
- [directionPads](tctouchcontroller/directionpads.md): An array containing all the direction pad controls managed by this controller.
- [drawableSize](tctouchcontroller/drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](tctouchcontroller/size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [switches](tctouchcontroller/switches.md): An array containing all the switch controls managed by this controller.
- [isConnected](tctouchcontroller/isconnected.md): A Boolean value that indicates whether the touch controller is connected to the Game Controller framework.
- [isSupported](tctouchcontroller/issupported.md): Whether touch controllers are supported for the device.
- [throttles](tctouchcontroller/throttles.md): An array containing all the throttle controls managed by this controller.
- [thumbsticks](tctouchcontroller/thumbsticks.md): An array containing all the thumbstick controls managed by this controller.
- [touchpads](tctouchcontroller/touchpads.md): An array containing all the touchpad controls managed by this controller.

### Getting the touch controller

- [controller](tctouchcontroller/controller.md): The game controller instance associated with this touch controller.

### Adding a button control

- [addButton(descriptor:)](tctouchcontroller/addbutton%28descriptor_%29.md): Creates a new button control with the provided descriptor, and adds it to the touch controller.
- [TCButtonDescriptor](tcbuttondescriptor.md): A descriptor for configuring a button.

### Adding a directional pad control

- [addDirectionPad(descriptor:)](tctouchcontroller/adddirectionpad%28descriptor_%29.md): Creates a new direction pad control with the provided descriptor, and adds it to the touch controller.
- [TCDirectionPadDescriptor](tcdirectionpaddescriptor.md): A descriptor for configuring a directional pad.

### Adding a switch control

- [addSwitch(descriptor:)](tctouchcontroller/addswitch%28descriptor_%29.md): Creates a new switch control with the provided descriptor, and adds it to the touch controller.
- [TCSwitchDescriptor](tcswitchdescriptor.md): A descriptor for configuring a switch.

### Adding a throttle control

- [addThrottle(descriptor:)](tctouchcontroller/addthrottle%28descriptor_%29.md): Creates a new throttle control with the provided descriptor, and adds it to the touch controller.
- [TCThrottleDescriptor](tcthrottledescriptor.md): A descriptor for configuring a throttle.

### Adding a thumbstick control

- [addThumbstick(descriptor:)](tctouchcontroller/addthumbstick%28descriptor_%29.md): Creates a new thumbstick control with the provided descriptor, and adds it to the touch controller.
- [TCThumbstickDescriptor](tcthumbstickdescriptor.md): A descriptor for configuring a thumbstick.

### Adding a touchpad control

- [addTouchpad(descriptor:)](tctouchcontroller/addtouchpad%28descriptor_%29.md): Creates a new touchpad control with the provided descriptor, and adds it to the touch controller.
- [TCTouchpadDescriptor](tctouchpaddescriptor.md): A descriptor for configuring a touchpad.

### Connecting and disconnecting a controller

- [connect()](tctouchcontroller/connect%28%29.md): Connects the touch controller to the app, allowing its controls to be drawn and an associated `GCController` to be created.
- [disconnect()](tctouchcontroller/disconnect%28%29.md): Disconnects the touch controller from the app, preventing its controls from being drawn.

### Getting the controller at a point

- [control(at:)](tctouchcontroller/control%28at_%29.md): The control at the specified point, if any.

### Handling layout updates

- [automaticallyLayoutControls(for:)](tctouchcontroller/automaticallylayoutcontrols%28for_%29.md): Automatically lays out the provided control labels, creating them if needed.
- [render(using:)](tctouchcontroller/render%28using_%29.md): Renders the touch controls using the provided Metal render command encoder.

### Handling a touch

- [handleTouchBegan(at:index:)](tctouchcontroller/handletouchbegan%28at_index_%29.md): Handles a touch began event at the specified point.
- [handleTouchEnded(at:index:)](tctouchcontroller/handletouchended%28at_index_%29.md): Handles a touch ended event at the specified point.
- [handleTouchMoved(at:index:)](tctouchcontroller/handletouchmoved%28at_index_%29.md): Handles a touch moved event at the specified point.

### Removing controls

- [removeControl(\_:)](tctouchcontroller/removecontrol%28__%29.md): Removes the control from the touch controller.
- [removeAllControls()](tctouchcontroller/removeallcontrols%28%29.md): Removes all controls from the touch controller.

### Getting the touch controller category

- [TCGameControllerProductCategoryTouchController](tcgamecontrollerproductcategorytouchcontroller.md)

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

# TCTouchController (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object that allows you to create and customize on-screen touch controls for a game that uses Metal.

## Declaration

```objectivec
@interface TCTouchController : NSObject
```

<a id="overview"></a>

## Overview

The controller exposes controls through a [GCController](../gamecontroller/gccontroller.md) instance, and enables seamless integration with the [Game Controller](../gamecontroller.md) framework.

This class manages the lifecycle of touch controls, handles user interaction, renders the controls using Metal, and provides a `GCController` instance that reflects the state of the on-screen controls.

## Topics

### Creating a touch controller

- [initWithDescriptor:](tctouchcontroller/init%28descriptor_%29.md): Creates a new instance with the provided descriptor.
- [TCTouchControllerDescriptor](tctouchcontrollerdescriptor.md): A descriptor for configuring a touch controller.

### Inspecting the touch controller

- [buttons](tctouchcontroller/buttons.md): An array containing all the button controls managed by this controller.
- [controls](tctouchcontroller/controls.md): An array containing all the touch controls managed by this controller.
- [device](tctouchcontroller/device.md): The Metal device the touch control uses for rendering the touch controls.
- [directionPads](tctouchcontroller/directionpads.md): An array containing all the direction pad controls managed by this controller.
- [drawableSize](tctouchcontroller/drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](tctouchcontroller/size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [switches](tctouchcontroller/switches.md): An array containing all the switch controls managed by this controller.
- [connected](tctouchcontroller/isconnected.md): A Boolean value that indicates whether the touch controller is connected to the Game Controller framework.
- [supported](tctouchcontroller/issupported.md): Whether touch controllers are supported for the device.
- [throttles](tctouchcontroller/throttles.md): An array containing all the throttle controls managed by this controller.
- [thumbsticks](tctouchcontroller/thumbsticks.md): An array containing all the thumbstick controls managed by this controller.
- [touchpads](tctouchcontroller/touchpads.md): An array containing all the touchpad controls managed by this controller.

### Getting the touch controller

- [controller](tctouchcontroller/controller.md): The game controller instance associated with this touch controller.

### Adding a button control

- [addButtonWithDescriptor:](tctouchcontroller/addbutton%28descriptor_%29.md): Creates a new button control with the provided descriptor, and adds it to the touch controller.
- [TCButtonDescriptor](tcbuttondescriptor.md): A descriptor for configuring a button.

### Adding a directional pad control

- [addDirectionPadWithDescriptor:](tctouchcontroller/adddirectionpad%28descriptor_%29.md): Creates a new direction pad control with the provided descriptor, and adds it to the touch controller.
- [TCDirectionPadDescriptor](tcdirectionpaddescriptor.md): A descriptor for configuring a directional pad.

### Adding a switch control

- [addSwitchWithDescriptor:](tctouchcontroller/addswitch%28descriptor_%29.md): Creates a new switch control with the provided descriptor, and adds it to the touch controller.
- [TCSwitchDescriptor](tcswitchdescriptor.md): A descriptor for configuring a switch.

### Adding a throttle control

- [addThrottleWithDescriptor:](tctouchcontroller/addthrottle%28descriptor_%29.md): Creates a new throttle control with the provided descriptor, and adds it to the touch controller.
- [TCThrottleDescriptor](tcthrottledescriptor.md): A descriptor for configuring a throttle.

### Adding a thumbstick control

- [addThumbstickWithDescriptor:](tctouchcontroller/addthumbstick%28descriptor_%29.md): Creates a new thumbstick control with the provided descriptor, and adds it to the touch controller.
- [TCThumbstickDescriptor](tcthumbstickdescriptor.md): A descriptor for configuring a thumbstick.

### Adding a touchpad control

- [addTouchpadWithDescriptor:](tctouchcontroller/addtouchpad%28descriptor_%29.md): Creates a new touchpad control with the provided descriptor, and adds it to the touch controller.
- [TCTouchpadDescriptor](tctouchpaddescriptor.md): A descriptor for configuring a touchpad.

### Connecting and disconnecting a controller

- [connect](tctouchcontroller/connect%28%29.md): Connects the touch controller to the app, allowing its controls to be drawn and an associated `GCController` to be created.
- [disconnect](tctouchcontroller/disconnect%28%29.md): Disconnects the touch controller from the app, preventing its controls from being drawn.

### Getting the controller at a point

- [controlAtPoint:](tctouchcontroller/control%28at_%29.md): The control at the specified point, if any.

### Handling layout updates

- [automaticallyLayoutControlsForLabels:](tctouchcontroller/automaticallylayoutcontrols%28for_%29.md): Automatically lays out the provided control labels, creating them if needed.
- [renderUsingRenderCommandEncoder:](tctouchcontroller/render%28using_%29.md): Renders the touch controls using the provided Metal render command encoder.

### Handling a touch

- [handleTouchBeganAtPoint:index:](tctouchcontroller/handletouchbegan%28at_index_%29.md): Handles a touch began event at the specified point.
- [handleTouchEndedAtPoint:index:](tctouchcontroller/handletouchended%28at_index_%29.md): Handles a touch ended event at the specified point.
- [handleTouchMovedAtPoint:index:](tctouchcontroller/handletouchmoved%28at_index_%29.md): Handles a touch moved event at the specified point.

### Removing controls

- [removeControl:](tctouchcontroller/removecontrol%28__%29.md): Removes the control from the touch controller.
- [removeAllControls](tctouchcontroller/removeallcontrols%28%29.md): Removes all controls from the touch controller.

### Getting the touch controller category

- [TCGameControllerProductCategoryTouchController](tcgamecontrollerproductcategorytouchcontroller.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
