> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/racing-wheel-device-support](https://developer.apple.com/documentation/gamecontroller/racing-wheel-device-support)

# Racing wheel device support (Swift)

**Framework:** Game Controller  
**Kind:** API Collection

Add support for racing wheel devices in macOS.

<a id="overview"></a>

## Overview

For macOS apps that support racing wheel devices, follow these steps for your app:

- If you distribute your app through the Mac App Store, add the [com.apple.security.device.usb](../bundleresources/entitlements/com.apple.security.device.usb.md) entitlement to your Xcode project.
- To get a racing wheel controller object, register for the [GCRacingWheelDidConnect](../foundation/nsnotification/name-swift.struct/gcracingwheeldidconnect.md) (Swift) or  [GCRacingWheelDidConnectNotification](gcracingwheeldidconnectnotification.md) (Objective-C) and [GCRacingWheelDidDisconnect](../foundation/nsnotification/name-swift.struct/gcracingwheeldiddisconnect.md) (Swift) or [GCRacingWheelDidDisconnectNotification](gcracingwheeldiddisconnectnotification.md) (Objective-C) notifications. Alternatively, check the `GCRacingWheel` [connectedRacingWheels](gcracingwheel/connectedracingwheels.md) class property for the currently connected controllers.
- To start receiving input from a racing wheel controller, invoke the `GCRacingWheel` [acquireDevice()](gcracingwheel/acquiredevice%28%29.md) method. Then use the [relinquishDevice()](gcracingwheel/relinquishdevice%28%29.md) method when you finish processing input.
- To process the input, set callbacks for the specific racing wheel elements that you want to receive input from. For example, set the [valueDidChangeHandler](gcphysicalinputprofile/valuedidchangehandler.md) property of the steering wheel and accelerator pedal elements. Get these elements using the [wheel](gcracingwheelinputstate/wheel.md) and [acceleratorPedal](gcracingwheelinputstate/acceleratorpedal.md) properties of the racing wheel’s [wheelInput](gcracingwheel/wheelinput.md) property, as in: `racingWheel.wheelInput.wheel`.
- If you just want the latest value of the steering wheel, use the `GCSteeringWheelElement` [absoluteInput](gcaxiselement/absoluteinput.md) property.
- For games that poll for input, set the input buffer size using the [inputStateQueueDepth](gcdevicephysicalinput/inputstatequeuedepth.md) property. In each iteration of your game loop, repeatedly invoke the [nextInputState()](gcracingwheelinput/nextinputstate%28%29.md) method until the queue is empty and it returns `nil`.

## Topics

### Racing wheel controller

- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.

### Racing wheel input

- [GCRacingWheelInput](gcracingwheelinput.md): A controller profile that supports a racing wheel.
- [GCRacingWheelInputState](gcracingwheelinputstate.md): The input for the wheel of a racing wheel controller.

### Left and right paddles

- [GCInputLeftPaddle](gcinputleftpaddle-77y86.md): The name for the left paddle input.
- [GCInputRightPaddle](gcinputrightpaddle-5klic.md): The name for the right paddle input.

### Gear shifter elements

- [GCAxisInput](gcaxisinput.md): The common properties of inputs that provide absolute values along an axis with a fixed origin.
- [GCGearShifterElement](gcgearshifterelement.md): An element that represents either a pattern or a sequential gear shift.
- [GCRelativeInput](gcrelativeinput.md): The common properties of inputs that provide positions along an axis that are relative to the previous position.

### Steering and switch elements

- [GCSteeringWheelElement](gcsteeringwheelelement.md): The element that represents the wheel of a racing wheel controller.
- [GCSwitchPositionInput](gcswitchpositioninput.md): The common properties of inputs that switch between two or more positions.

### Directional pad elements

- [GCLinearInput](gclinearinput.md): The common properties of inputs that provide values in unit coordinates.

# Racing wheel device support (Objective-C)

**Framework:** Game Controller  
**Kind:** API Collection

Add support for racing wheel devices in macOS.

<a id="overview"></a>

## Overview

For macOS apps that support racing wheel devices, follow these steps for your app:

- If you distribute your app through the Mac App Store, add the [com.apple.security.device.usb](../bundleresources/entitlements/com.apple.security.device.usb.md) entitlement to your Xcode project.
- To get a racing wheel controller object, register for the [GCRacingWheelDidConnect](../foundation/nsnotification/name-swift.struct/gcracingwheeldidconnect.md) (Swift) or  [GCRacingWheelDidConnectNotification](gcracingwheeldidconnectnotification.md) (Objective-C) and [GCRacingWheelDidDisconnect](../foundation/nsnotification/name-swift.struct/gcracingwheeldiddisconnect.md) (Swift) or [GCRacingWheelDidDisconnectNotification](gcracingwheeldiddisconnectnotification.md) (Objective-C) notifications. Alternatively, check the `GCRacingWheel` [connectedRacingWheels](gcracingwheel/connectedracingwheels.md) class property for the currently connected controllers.
- To start receiving input from a racing wheel controller, invoke the `GCRacingWheel` [acquireDeviceWithError:](gcracingwheel/acquiredevice%28%29.md) method. Then use the [relinquishDevice](gcracingwheel/relinquishdevice%28%29.md) method when you finish processing input.
- To process the input, set callbacks for the specific racing wheel elements that you want to receive input from. For example, set the [valueDidChangeHandler](gcphysicalinputprofile/valuedidchangehandler.md) property of the steering wheel and accelerator pedal elements. Get these elements using the [wheel](gcracingwheelinputstate/wheel.md) and [acceleratorPedal](gcracingwheelinputstate/acceleratorpedal.md) properties of the racing wheel’s [wheelInput](gcracingwheel/wheelinput.md) property, as in: `racingWheel.wheelInput.wheel`.
- If you just want the latest value of the steering wheel, use the `GCSteeringWheelElement` [absoluteInput](gcaxiselement/absoluteinput.md) property.
- For games that poll for input, set the input buffer size using the [inputStateQueueDepth](gcdevicephysicalinput/inputstatequeuedepth.md) property. In each iteration of your game loop, repeatedly invoke the [nextInputState](gcracingwheelinput/nextinputstate%28%29.md) method until the queue is empty and it returns `nil`.

## Topics

### Racing wheel controller

- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.

### Racing wheel input

- [GCRacingWheelInput](gcracingwheelinput.md): A controller profile that supports a racing wheel.
- [GCRacingWheelInputState](gcracingwheelinputstate.md): The input for the wheel of a racing wheel controller.

### Left and right paddles

- [GCInputLeftPaddle](gcinputleftpaddle-818ad.md): The name for the left paddle input.
- [GCInputRightPaddle](gcinputrightpaddle-1p8hd.md): The name for the right paddle input.

### Gear shifter elements

- [GCAxisInput](gcaxisinput.md): The common properties of inputs that provide absolute values along an axis with a fixed origin.
- [GCInputAxisName](gcinputaxisname.md): The Objective-C type for an input axis name.
- [GCGearShifterElement](gcgearshifterelement.md): An element that represents either a pattern or a sequential gear shift.
- [GCRelativeInput](gcrelativeinput.md): The common properties of inputs that provide positions along an axis that are relative to the previous position.

### Steering and switch elements

- [GCSteeringWheelElement](gcsteeringwheelelement.md): The element that represents the wheel of a racing wheel controller.
- [GCSwitchPositionInput](gcswitchpositioninput.md): The common properties of inputs that switch between two or more positions.
- [GCInputSwitchName](gcinputswitchname.md): The Objective-C type for an input switch name.

### Directional pad elements

- [GCInputDirectionPadName](gcinputdirectionpadname.md): The Objective-C type for the name of a directional pad.
- [GCLinearInput](gclinearinput.md): The common properties of inputs that provide values in unit coordinates.
