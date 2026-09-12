> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevice](https://developer.apple.com/documentation/gamecontroller/gcdevice)

# GCDevice (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines a common interface for game input devices.

## Declaration

```swift
protocol GCDevice : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol provides common properties for game controllers, and mouse and keyboard devices.

## Topics

### Getting device information

- [vendorName](gcdevice/vendorname.md): The manufacturer-provided name for the device, or the user’s name for the device.
- [productCategory](gcdevice/productcategory.md): The product category that identifies the type of controller.
- [Product category constants](product-category-constants.md)

### Handling input

- [handlerQueue](gcdevice/handlerqueue.md): The dispatch queue that the framework uses to call element value change handlers.
- [physicalInputProfile](gcdevice/physicalinputprofile.md): Deprecated. The device’s physical input profile, such as a controller’s extended gamepad.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GCController](gccontroller.md)
- [GCKeyboard](gckeyboard.md)
- [GCMouse](gcmouse.md)
- [GCRacingWheel](gcracingwheel.md)
- [GCSpatialAccessory](gcspatialaccessory.md)
- [GCStylus](gcstylus.md)

## See Also

### Game controllers

- [Supporting Game Controllers](supporting-game-controllers.md): Support a physical controller or add a virtual controller to enhance how people interact with your game through haptics, lighting, and motion sensing.
- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCController](gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCKeyboard](gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.

# GCDevice (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines a common interface for game input devices.

## Declaration

```objectivec
@protocol GCDevice <NSObject>
```

<a id="overview"></a>

## Overview

This protocol provides common properties for game controllers, and mouse and keyboard devices.

## Topics

### Getting device information

- [vendorName](gcdevice/vendorname.md): The manufacturer-provided name for the device, or the user’s name for the device.
- [productCategory](gcdevice/productcategory.md): The product category that identifies the type of controller.
- [Product category constants](product-category-constants.md)

### Handling input

- [handlerQueue](gcdevice/handlerqueue.md): The dispatch queue that the framework uses to call element value change handlers.
- [physicalInputProfile](gcdevice/physicalinputprofile.md): Deprecated. The device’s physical input profile, such as a controller’s extended gamepad.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GCController](gccontroller.md)
- [GCKeyboard](gckeyboard.md)
- [GCMouse](gcmouse.md)
- [GCRacingWheel](gcracingwheel.md)
- [GCSpatialAccessory](gcspatialaccessory.md)
- [GCStylus](gcstylus.md)

## See Also

### Game controllers

- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCController](gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCKeyboard](gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.
