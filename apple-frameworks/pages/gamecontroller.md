> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller](https://developer.apple.com/documentation/gamecontroller)

# Game Controller (Swift)

**Framework:** Game Controller  
**Kind:** Framework  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Support hardware game controllers in your game.

## Mentioned In

- [Discovering game controllers](gamecontroller/discovering-game-controllers.md)

<a id="overview"></a>

## Overview

Use Game Controller to support users interacting with your app using a physical or virtual game controller. Game controllers include third-party products, such as the DualShock 4, DualSense, and Xbox, as well as the mouse, keyboard, Siri Remote, and racing wheels.

![An illustration of a laptop displaying a game that shows a car driving on the road toward a country landscape. On the left is an overlay of a steering wheel controller.](https://developer.apple.com/images/com.apple.gamecontroller/media-4083651@2x.png)

To support game controllers, add the Game Controller capability (the [GCSupportsControllerUserInteraction](bundleresources/information-property-list/gcsupportscontrolleruserinteraction.md) property) to your project, and Xcode adds the Game Controller framework automatically. Then, choose the types of controllers your app supports (the [GCSupportedGameControllers](bundleresources/information-property-list/gcsupportedgamecontrollers.md) property) under the Game Controllers capability on the Signing & Capabilities pane.

For controllers other than the racing wheel, follow these steps to process the game controller input in your app:

- To get a physical game controller object, register for specific notifications when users connect and disconnect game controllers. Alternatively, you can display a virtual controller for the user to interact with.
- Then get a profile object from the physical or virtual controller to access its input elements, such as buttons, triggers, thumbsticks, and directional pads. Profiles encapsulate the hardware details and layout of the input elements on the controller from your app.
- To process the input, either get the values directly from the elements or register callbacks for when the user changes their values. Apps running in visionOS receive input events only when the person is looking at the app’s window.
- For controllers that support haptics, you can provide feedback to the user by creating an engine that manipulates the controller’s actuators.

Users may remap game controller elements in Settings and Preferences, so be sure to display the correct input element in your interface. If the [hasRemappedElements](gamecontroller/gcphysicalinputprofile/hasremappedelements.md) property is [true](https://developer.apple.com/documentation/swift/true), the user remapped elements and you can get the mapping between the actual and alias elements using the [mappedElementAlias(forPhysicalInputName:)](gamecontroller/gcphysicalinputprofile/mappedelementalias%28forphysicalinputname_%29.md) and [mappedPhysicalInputNames(forElementAlias:)](gamecontroller/gcphysicalinputprofile/mappedphysicalinputnames%28forelementalias_%29.md) methods.

To support racing wheel devices in your macOS app, see [Racing wheel device support](gamecontroller/racing-wheel-device-support.md).

## Topics

### Essentials

- [Game Controller updates](https://developer.apple.com/documentation/updates/gamecontroller): Learn about important changes to Game Controller.
- [Discovering game controllers](gamecontroller/discovering-game-controllers.md): Implement connection and input handling to provide seamless physical controller support for players.
- [Handling input events](gamecontroller/handling-input-events.md): Receive controller input using either polling or callbacks.

### Configuration

- [GCSupportsControllerUserInteraction](bundleresources/information-property-list/gcsupportscontrolleruserinteraction.md): A Boolean value indicating whether the app supports a game controller.
- [GCSupportedGameControllers](bundleresources/information-property-list/gcsupportedgamecontrollers.md): The types of game controller profiles that the app supports or requires.
- [GCSupportsMultipleMicroGamepads](bundleresources/information-property-list/gcsupportsmultiplemicrogamepads.md): A Boolean value indicating whether the physical Apple TV Remote and the Apple TV Remote app operate as separate game controllers.

### View controller

- [GCEventViewController](gamecontroller/gceventviewcontroller.md): A view controller that delivers input either from the responder chain to views, or from game controllers to profiles.

### Game controllers

- [Supporting Game Controllers](gamecontroller/supporting-game-controllers.md): Support a physical controller or add a virtual controller to enhance how people interact with your game through haptics, lighting, and motion sensing.
- [Letting players use their second-generation Siri Remote as a game controller](gamecontroller/letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](gamecontroller/discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gamecontroller/gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCController](gamecontroller/gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCRacingWheel](gamecontroller/gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCKeyboard](gamecontroller/gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gamecontroller/gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gamecontroller/gcstylus.md): An object that represents a physical stylus connected to the device.

### Game controller profiles

- [Input](gamecontroller/input.md): Receive controller input in the way that best integrates with the flow of your game or game engine.
- [GCMotion](gamecontroller/gcmotion.md): A controller profile that supports orientation and motion.
- [GCDeviceBattery](gamecontroller/gcdevicebattery.md): The charge level and state of a device’s battery.
- [GCDeviceHaptics](gamecontroller/gcdevicehaptics.md): The locations of haptic actuators on a game controller.
- [GCDeviceLight](gamecontroller/gcdevicelight.md): The colored light on a device.

### Virtual controller

- [Adding virtual controls to games that support game controllers in iOS](gamecontroller/adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md): Use touch input and virtual controllers to make your game available to players without controllers.
- [GCVirtualController](gamecontroller/gcvirtualcontroller.md): A software emulation of a real controller that you configure specifically for your game.

### Button elements and names

- [GCTouchedStateInput](gamecontroller/gctouchedstateinput.md): The common properties for an element that has touch state input.
- [GCPressedStateInput](gamecontroller/gcpressedstateinput.md): The common properties for an element that has press state input, such as input from a button.

### Racing wheels

- [Racing wheel device support](gamecontroller/racing-wheel-device-support.md): Add support for racing wheel devices in macOS.

### Game Controller framework migration from IOKit

Deploy an app that takes advantage of advanced game controller features using the Game Controller framework, while supporting game controllers on older macOS releases using IOKit.

- [Understanding game controller backward compatibility](gamecontroller/understanding-game-controller-backward-compatibility.md): Learn how macOS brings support for the latest game controllers to software that predates the introduction of the Game Controller framework.
- [kIOHIDGCSyntheticDeviceKey](gamecontroller/kiohidgcsyntheticdevicekey.md): A key that specifies whether the device is a game controller synthetic HID device.

### Aliases for backward compatibility

- [GCDeviceElement](gamecontroller/gcdeviceelement.md): An alias for a symbol name for backward compatibility with a previous SDK version.
- [GCDeviceAxisInput](gamecontroller/gcdeviceaxisinput.md): An alias for a symbol name for backward compatibility with a previous SDK version.
- [GCDeviceButtonInput](gamecontroller/gcdevicebuttoninput.md): An alias for a symbol name for backward compatibility with a previous SDK version.
- [GCDeviceTouchpad](gamecontroller/gcdevicetouchpad.md): An alias for a symbol name for backward compatibility with a previous SDK version.
- [GCDeviceDirectionPad](gamecontroller/gcdevicedirectionpad.md): An alias for a symbol name for backward compatibility with a previous SDK version.

### Deprecated symbols

- [Deprecated symbols](gamecontroller/deprecated-symbols.md)

### Classes

- [GCControllerHomeButtonSettingsManager](gamecontroller/gccontrollerhomebuttonsettingsmanager-258mu.md): Access the game controller system Home button settings.
- [GCDeviceType](gamecontroller/gcdevicetype.md): A class representing a type of spatial accessory.
- [GCSpatialAccessory](gamecontroller/gcspatialaccessory.md)

### Protocols

- [GCPhysicalInputExtents](gamecontroller/gcphysicalinputextents.md): Physical extents scale the normalized value reported by `GCLinearInput` into physical units.

### Enumerations

- [GCControllerHomeButtonSettingCustomizationStatus](gamecontroller/gccontrollerhomebuttonsettingcustomizationstatus.md): An additional returned flag indicating whether a setting has been modified by the user.
- [GCControllerHomeButtonSettingInAppAction](gamecontroller/gccontrollerhomebuttonsettinginappaction.md): How the system responds to a press of the game controller Home button while your application is front-most.
- [GCControllerHomeButtonSettingSystemAction](gamecontroller/gccontrollerhomebuttonsettingsystemaction.md): How the system responds to a press of the game controller Home button outside of contexts where an action of the front-most app takes priority.
- [GCControllerHomeButtonSettingsCustomizationActivity](gamecontroller/gccontrollerhomebuttonsettingscustomizationactivity.md): A hint passed to `-openControllerHomeButtonSettingsForActivity:` to indicate the reason the app is requesting to open Settings.

# Game Controller (Objective-C)

**Framework:** Game Controller  
**Kind:** Framework  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Support hardware game controllers in your game.

## Mentioned In

- [Discovering game controllers](gamecontroller/discovering-game-controllers.md)

<a id="overview"></a>

## Overview

Use Game Controller to support users interacting with your app using a physical or virtual game controller. Game controllers include third-party products, such as the DualShock 4, DualSense, and Xbox, as well as the mouse, keyboard, Siri Remote, and racing wheels.

![An illustration of a laptop displaying a game that shows a car driving on the road toward a country landscape. On the left is an overlay of a steering wheel controller.](https://developer.apple.com/images/com.apple.gamecontroller/media-4083651@2x.png)

To support game controllers, add the Game Controller capability (the [GCSupportsControllerUserInteraction](bundleresources/information-property-list/gcsupportscontrolleruserinteraction.md) property) to your project, and Xcode adds the Game Controller framework automatically. Then, choose the types of controllers your app supports (the [GCSupportedGameControllers](bundleresources/information-property-list/gcsupportedgamecontrollers.md) property) under the Game Controllers capability on the Signing & Capabilities pane.

For controllers other than the racing wheel, follow these steps to process the game controller input in your app:

- To get a physical game controller object, register for specific notifications when users connect and disconnect game controllers. Alternatively, you can display a virtual controller for the user to interact with.
- Then get a profile object from the physical or virtual controller to access its input elements, such as buttons, triggers, thumbsticks, and directional pads. Profiles encapsulate the hardware details and layout of the input elements on the controller from your app.
- To process the input, either get the values directly from the elements or register callbacks for when the user changes their values. Apps running in visionOS receive input events only when the person is looking at the app’s window.
- For controllers that support haptics, you can provide feedback to the user by creating an engine that manipulates the controller’s actuators.

Users may remap game controller elements in Settings and Preferences, so be sure to display the correct input element in your interface. If the [hasRemappedElements](gamecontroller/gcphysicalinputprofile/hasremappedelements.md) property is [true](https://developer.apple.com/documentation/swift/true), the user remapped elements and you can get the mapping between the actual and alias elements using the [mappedElementAliasForPhysicalInputName:](gamecontroller/gcphysicalinputprofile/mappedelementalias%28forphysicalinputname_%29.md) and [mappedPhysicalInputNamesForElementAlias:](gamecontroller/gcphysicalinputprofile/mappedphysicalinputnames%28forelementalias_%29.md) methods.

To support racing wheel devices in your macOS app, see [Racing wheel device support](gamecontroller/racing-wheel-device-support.md).

## Topics

### Essentials

- [Game Controller updates](https://developer.apple.com/documentation/updates/gamecontroller): Learn about important changes to Game Controller.
- [Discovering game controllers](gamecontroller/discovering-game-controllers.md): Implement connection and input handling to provide seamless physical controller support for players.
- [Handling input events](gamecontroller/handling-input-events.md): Receive controller input using either polling or callbacks.

### Configuration

- [GCSupportsControllerUserInteraction](bundleresources/information-property-list/gcsupportscontrolleruserinteraction.md): A Boolean value indicating whether the app supports a game controller.
- [GCSupportedGameControllers](bundleresources/information-property-list/gcsupportedgamecontrollers.md): The types of game controller profiles that the app supports or requires.
- [GCSupportsMultipleMicroGamepads](bundleresources/information-property-list/gcsupportsmultiplemicrogamepads.md): A Boolean value indicating whether the physical Apple TV Remote and the Apple TV Remote app operate as separate game controllers.

### View controller

- [GCEventViewController](gamecontroller/gceventviewcontroller.md): A view controller that delivers input either from the responder chain to views, or from game controllers to profiles.

### Game controllers

- [Letting players use their second-generation Siri Remote as a game controller](gamecontroller/letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](gamecontroller/discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gamecontroller/gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCController](gamecontroller/gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCRacingWheel](gamecontroller/gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCKeyboard](gamecontroller/gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gamecontroller/gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gamecontroller/gcstylus.md): An object that represents a physical stylus connected to the device.

### Game controller profiles

- [Input](gamecontroller/input.md): Receive controller input in the way that best integrates with the flow of your game or game engine.
- [GCMotion](gamecontroller/gcmotion.md): A controller profile that supports orientation and motion.
- [GCDeviceBattery](gamecontroller/gcdevicebattery.md): The charge level and state of a device’s battery.
- [GCDeviceHaptics](gamecontroller/gcdevicehaptics.md): The locations of haptic actuators on a game controller.
- [GCDeviceLight](gamecontroller/gcdevicelight.md): The colored light on a device.

### Virtual controller

- [Adding virtual controls to games that support game controllers in iOS](gamecontroller/adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md): Use touch input and virtual controllers to make your game available to players without controllers.
- [GCVirtualController](gamecontroller/gcvirtualcontroller.md): A software emulation of a real controller that you configure specifically for your game.

### Button elements and names

- [GCTouchedStateInput](gamecontroller/gctouchedstateinput.md): The common properties for an element that has touch state input.
- [GCPressedStateInput](gamecontroller/gcpressedstateinput.md): The common properties for an element that has press state input, such as input from a button.
- [GCInputButtonName](gamecontroller/gcinputbuttonname.md): The Objective-C type for an input button name.

### Racing wheels

- [Racing wheel device support](gamecontroller/racing-wheel-device-support.md): Add support for racing wheel devices in macOS.

### Game Controller framework migration from IOKit

Deploy an app that takes advantage of advanced game controller features using the Game Controller framework, while supporting game controllers on older macOS releases using IOKit.

- [Understanding game controller backward compatibility](gamecontroller/understanding-game-controller-backward-compatibility.md): Learn how macOS brings support for the latest game controllers to software that predates the introduction of the Game Controller framework.
- [kIOHIDGCSyntheticDeviceKey](gamecontroller/kiohidgcsyntheticdevicekey.md): A key that specifies whether the device is a game controller synthetic HID device.

### Deprecated symbols

- [Deprecated symbols](gamecontroller/deprecated-symbols.md)

### Classes

- [GCControllerHomeButtonSettingsManager](gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4.md): Access the game controller system Home button settings.
- [GCDeviceType](gamecontroller/gcdevicetype.md): A class representing a type of spatial accessory.
- [GCSpatialAccessory](gamecontroller/gcspatialaccessory.md)

### Protocols

- [GCPhysicalInputExtents](gamecontroller/gcphysicalinputextents.md): Physical extents scale the normalized value reported by `GCLinearInput` into physical units.

### Variables

- [GCInputGripButton](gamecontroller/gcinputgripbutton.md)
- [GCInputLeftSideButton](gamecontroller/gcinputleftsidebutton.md)
- [GCInputRightSideButton](gamecontroller/gcinputrightsidebutton.md)
- [GCInputStylusPrimaryButton](gamecontroller/gcinputstylusprimarybutton-2dayc.md): The stylus side button nearest the tip.
- [GCInputStylusSecondaryButton](gamecontroller/gcinputstylussecondarybutton-a8q.md): The stylus side button above the primary button.
- [GCInputStylusTip](gamecontroller/gcinputstylustip-817rt.md): The stylus tip button used to detect contact with a surface.
- [GCInputThumbstick](gamecontroller/gcinputthumbstick.md)
- [GCInputThumbstickButton](gamecontroller/gcinputthumbstickbutton.md)
- [GCInputTrigger](gamecontroller/gcinputtrigger.md)
- [GCSpatialAccessoryDidConnectNotification](gamecontroller/gcspatialaccessorydidconnectnotification.md): Use these constants with NSNotificationCenter to listen to connection and disconnection events.
- [GCSpatialAccessoryDidDisconnectNotification](gamecontroller/gcspatialaccessorydiddisconnectnotification.md)

### Macros

- [GAMECONTROLLER_EXPORT](gamecontroller/gamecontroller_export.md)
- [GAMECONTROLLER_EXTERN](gamecontroller/gamecontroller_extern.md)

### Type Aliases

- [GCControllerHomeButtonSettingsDidChangeHandler](gamecontroller/gccontrollerhomebuttonsettingsdidchangehandler.md): The type of the block that is scheduled after Home button settings change.

### Enumerations

- [GCControllerHomeButtonSettingCustomizationStatus](gamecontroller/gccontrollerhomebuttonsettingcustomizationstatus.md): An additional returned flag indicating whether a setting has been modified by the user.
- [GCControllerHomeButtonSettingInAppAction](gamecontroller/gccontrollerhomebuttonsettinginappaction.md): How the system responds to a press of the game controller Home button while your application is front-most.
- [GCControllerHomeButtonSettingSystemAction](gamecontroller/gccontrollerhomebuttonsettingsystemaction.md): How the system responds to a press of the game controller Home button outside of contexts where an action of the front-most app takes priority.
- [GCControllerHomeButtonSettingsCustomizationActivity](gamecontroller/gccontrollerhomebuttonsettingscustomizationactivity.md): A hint passed to `-openControllerHomeButtonSettingsForActivity:` to indicate the reason the app is requesting to open Settings.
