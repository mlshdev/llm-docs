> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller](https://developer.apple.com/documentation/gamecontroller/gccontroller)

# GCController (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A representation of a real game controller, a virtual controller, or a snapshot of a controller.

## Declaration

```swift
class GCController
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)
- [Discovering game controllers](discovering-game-controllers.md)
- [Handling input events](handling-input-events.md)
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="overview"></a>

## Overview

This class represents a real or virtual controller that a user interacts with during a game. A *real controller* is a physical controller that connects directly or wirelessly to the device. A real controller can be formfitting or can attach closely to a device so players can use controls on both simultaneously. A *virtual controller* is a software emulation of a real controller.

You discover controllers, and then you process the input from those controllers during gameplay. Use the [controllers()](gccontroller/controllers%28%29.md) method to get the currently connected controllers. If necessary, use the [startWirelessControllerDiscovery(completionHandler:)](gccontroller/startwirelesscontrollerdiscovery%28completionhandler_%29.md) method to connect with wireless controllers.

This framework supports multiple connected game controllers. To identify which player is using a controller in a multiplayer game, check the [playerIndex](gccontroller/playerindex.md) property and set it, if necessary. For single-player games, use the [current](gccontroller/current.md) property to get the controller that the player is actively using.

A controller’s profile encapsulates the details about a controller’s buttons, pads, axis, and other input elements. Get the controller’s profile using one of the profile properties, such as [extendedGamepad](gccontroller/extendedgamepad.md), and then process the input from its elements.

You can either get the values of input elements on each iteration of your game loop, or set handlers to receive callbacks when those values change. For example, use the [leftThumbstick](gcextendedgamepad/leftthumbstick.md) property of the [GCExtendedGamepad](gcextendedgamepad.md) profile to get the thumbstick state. Use the [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md) property to set a handler that you implement to process any input values that change in the profile.

Alternatively, you can create a snapshot of a real or virtual controller using the [capture()](gccontroller/capture%28%29.md) method. A *snapshot* is a copy of a controller at a moment in time with its current element values. Creating a snapshot may impact performance, and over time a snapshot doesn’t stay current. Unlike other types of controllers, you can set the values of elements in a snapshot.

## Topics

### Discovering controllers

- [controllers()](gccontroller/controllers%28%29.md): Returns the connected controllers for the device.
- [startWirelessControllerDiscovery(completionHandler:)](gccontroller/startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [stopWirelessControllerDiscovery()](gccontroller/stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidConnect](../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnect](../foundation/nsnotification/name-swift.struct/gccontrollerdiddisconnect.md): A notification that posts after a controller disconnects from the device.

### Handling multiple controllers

- [current](gccontroller/current.md): The most recently used game controller.
- [GCControllerDidBecomeCurrent](../foundation/nsnotification/name-swift.struct/gccontrollerdidbecomecurrent.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrent](../foundation/nsnotification/name-swift.struct/gccontrollerdidstopbeingcurrent.md): A notification that posts when a controller stops being the current controller.

### Inspecting a controller

- [isAttachedToDevice](gccontroller/isattachedtodevice.md): A Boolean value that indicates whether the controller closely integrates with the device.
- [supportsHIDDevice(\_:)](gccontroller/supportshiddevice%28__%29.md): Returns a Boolean value that indicates whether the framework supports the specified human interface device.
- [shouldMonitorBackgroundEvents](gccontroller/shouldmonitorbackgroundevents.md): A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

### Accessing controller input

- [input](gccontroller/input.md): The input profile for the controller.
- [GCControllerLiveInput](gccontrollerliveinput.md): The input profile for a controller.
- [GCControllerInputState](gccontrollerinputstate.md): A class that represents an input state for gamepads and arcade sticks.

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

### Identifying controllers and displaying a player index

- [playerIndex](gccontroller/playerindex.md): The player index for the controller.
- [GCControllerPlayerIndex](gccontrollerplayerindex.md): The possible values for controller player indices.

### Accessing battery, haptics, and light objects

- [battery](gccontroller/battery.md): The controller’s battery information.
- [haptics](gccontroller/haptics.md): The controller’s haptics information.
- [light](gccontroller/light.md): The controller’s light settings.

### Creating snapshots

- [withExtendedGamepad()](gccontroller/withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [withMicroGamepad()](gccontroller/withmicrogamepad%28%29.md): Returns a snapshot of a newly created controller with a micro gamepad profile.
- [capture()](gccontroller/capture%28%29.md): Returns a snapshot of the controller with its current element values.
- [isSnapshot](gccontroller/issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.

### Responding to a paused controller or controller event

- [controllerPausedHandler](gccontroller/controllerpausedhandler.md): Deprecated. The block that the framework calls when the user presses the pause button on the controller.
- [GCGameControllerSceneDelegate](gcgamecontrollerscenedelegate.md)
- [GCEventInteraction](gceventinteraction.md): An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.

### Identifying the activation context

- [GCGameControllerActivationContext](gcgamecontrolleractivationcontext.md)

### Structures

- [GCController.DidBecomeCurrentMessage](gccontroller/didbecomecurrentmessage.md): A message that posts after a game controller becomes the most recently used controller.
- [GCController.DidConnectMessage](gccontroller/didconnectmessage.md): A message that posts after a game controller accessory connects to the device.
- [GCController.DidDisconnectMessage](gccontroller/diddisconnectmessage.md): A message that posts after a game controller accessory disconnects from the device.
- [GCController.DidStopBeingCurrentMessage](gccontroller/didstopbeingcurrentmessage.md): A message that posts after a game controller stops being the most recently used controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevice](gcdevice.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Game controllers

- [Supporting Game Controllers](supporting-game-controllers.md): Support a physical controller or add a virtual controller to enhance how people interact with your game through haptics, lighting, and motion sensing.
- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCKeyboard](gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.

# GCController (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A representation of a real game controller, a virtual controller, or a snapshot of a controller.

## Declaration

```objectivec
@interface GCController : NSObject
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)
- [Discovering game controllers](discovering-game-controllers.md)
- [Handling input events](handling-input-events.md)
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="overview"></a>

## Overview

This class represents a real or virtual controller that a user interacts with during a game. A *real controller* is a physical controller that connects directly or wirelessly to the device. A real controller can be formfitting or can attach closely to a device so players can use controls on both simultaneously. A *virtual controller* is a software emulation of a real controller.

You discover controllers, and then you process the input from those controllers during gameplay. Use the [controllers](gccontroller/controllers%28%29.md) method to get the currently connected controllers. If necessary, use the [startWirelessControllerDiscoveryWithCompletionHandler:](gccontroller/startwirelesscontrollerdiscovery%28completionhandler_%29.md) method to connect with wireless controllers.

This framework supports multiple connected game controllers. To identify which player is using a controller in a multiplayer game, check the [playerIndex](gccontroller/playerindex.md) property and set it, if necessary. For single-player games, use the [current](gccontroller/current.md) property to get the controller that the player is actively using.

A controller’s profile encapsulates the details about a controller’s buttons, pads, axis, and other input elements. Get the controller’s profile using one of the profile properties, such as [extendedGamepad](gccontroller/extendedgamepad.md), and then process the input from its elements.

You can either get the values of input elements on each iteration of your game loop, or set handlers to receive callbacks when those values change. For example, use the [leftThumbstick](gcextendedgamepad/leftthumbstick.md) property of the [GCExtendedGamepad](gcextendedgamepad.md) profile to get the thumbstick state. Use the [valueChangedHandler](gcextendedgamepad/valuechangedhandler.md) property to set a handler that you implement to process any input values that change in the profile.

Alternatively, you can create a snapshot of a real or virtual controller using the [capture](gccontroller/capture%28%29.md) method. A *snapshot* is a copy of a controller at a moment in time with its current element values. Creating a snapshot may impact performance, and over time a snapshot doesn’t stay current. Unlike other types of controllers, you can set the values of elements in a snapshot.

## Topics

### Discovering controllers

- [controllers](gccontroller/controllers%28%29.md): Returns the connected controllers for the device.
- [startWirelessControllerDiscoveryWithCompletionHandler:](gccontroller/startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [stopWirelessControllerDiscovery](gccontroller/stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidConnectNotification](gccontrollerdidconnectnotification.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnectNotification](gccontrollerdiddisconnectnotification.md): A notification that posts after a controller disconnects from the device.

### Handling multiple controllers

- [current](gccontroller/current.md): The most recently used game controller.
- [GCControllerDidBecomeCurrentNotification](gccontrollerdidbecomecurrentnotification.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrentNotification](gccontrollerdidstopbeingcurrentnotification.md): A notification that posts when a controller stops being the current controller.

### Inspecting a controller

- [attachedToDevice](gccontroller/isattachedtodevice.md): A Boolean value that indicates whether the controller closely integrates with the device.
- [supportsHIDDevice:](gccontroller/supportshiddevice%28__%29.md): Returns a Boolean value that indicates whether the framework supports the specified human interface device.
- [shouldMonitorBackgroundEvents](gccontroller/shouldmonitorbackgroundevents.md): A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

### Accessing controller input

- [input](gccontroller/input.md): The input profile for the controller.
- [GCControllerLiveInput](gccontrollerliveinput.md): The input profile for a controller.
- [GCControllerInputState](gccontrollerinputstate.md): A class that represents an input state for gamepads and arcade sticks.

### Accessing controller profiles

- [extendedGamepad](gccontroller/extendedgamepad.md): The extended gamepad profile.
- [GCPhysicalInputProfile](gcphysicalinputprofile.md): The base class for controller profiles that support physical buttons, thumbsticks, and directional pads.
- [GCKeyboardInput](gckeyboardinput.md): A controller profile that uses the keyboard as the input device.
- [GCMouseInput](gcmouseinput.md): A controller profile that tracks input from a mouse.
- [GCExtendedGamepad](gcextendedgamepad.md): A controller profile that supports the extended set of gamepad controls.
- [GCDualShockGamepad](gcdualshockgamepad.md): A controller profile that supports the DualShock 4 controller.
- [GCXboxGamepad](gcxboxgamepad.md): A controller profile that supports the Xbox controller.
- [GCDualSenseGamepad](gcdualsensegamepad.md): A controller profile that supported the DualSense controller.
- [microGamepad](gccontroller/microgamepad.md): The micro gamepad profile.
- [GCMicroGamepad](gcmicrogamepad.md): A controller profile that supports the Siri Remote.
- [GCDirectionalGamepad](gcdirectionalgamepad.md): A profile that supports only the directional pad, without motion or rotation.
- [motion](gccontroller/motion.md): The motion input profile.
- [physicalInputProfile](gccontroller/physicalinputprofile.md): The physical input profile for the controller.
- [gamepad](gccontroller/gamepad.md): Deprecated. The gamepad profile.

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

### Identifying controllers and displaying a player index

- [playerIndex](gccontroller/playerindex.md): The player index for the controller.
- [GCControllerPlayerIndex](gccontrollerplayerindex.md): The possible values for controller player indices.

### Accessing battery, haptics, and light objects

- [battery](gccontroller/battery.md): The controller’s battery information.
- [haptics](gccontroller/haptics.md): The controller’s haptics information.
- [light](gccontroller/light.md): The controller’s light settings.

### Creating snapshots

- [controllerWithExtendedGamepad](gccontroller/withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [controllerWithMicroGamepad](gccontroller/withmicrogamepad%28%29.md): Returns a snapshot of a newly created controller with a micro gamepad profile.
- [capture](gccontroller/capture%28%29.md): Returns a snapshot of the controller with its current element values.
- [snapshot](gccontroller/issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.

### Responding to a paused controller or controller event

- [controllerPausedHandler](gccontroller/controllerpausedhandler.md): Deprecated. The block that the framework calls when the user presses the pause button on the controller.
- [GCGameControllerSceneDelegate](gcgamecontrollerscenedelegate.md)
- [GCEventInteraction](gceventinteraction.md): An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.

### Identifying the activation context

- [GCGameControllerActivationContext](gcgamecontrolleractivationcontext.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [GCDevice](gcdevice.md)

## See Also

### Game controllers

- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCKeyboard](gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.
