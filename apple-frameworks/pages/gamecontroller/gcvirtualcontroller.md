> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller)

# GCVirtualController (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A software emulation of a real controller that you configure specifically for your game.

## Declaration

```swift
class GCVirtualController
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="overview"></a>

## Overview

Use a virtual controller to display software controls that you can customize over your game. You create a virtual controller from a configuration where you choose the input elements to display. You can even customize the images for the elements. When you connect the controller to the device, users interact with it similarly to a real controller.

![Screenshot of a virtual controller showing left and right thumbsticks with A and B buttons on the right thumbstick.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830787@2x.png)

To add a virtual controller to your game, create a [GCVirtualController.Configuration](gcvirtualcontroller/configuration.md) object containing the elements you want to appear in the controller. Then create the virtual controller by passing the configuration to the [init(configuration:)](gcvirtualcontroller/init%28configuration_%29.md) method. Use the [connect(replyHandler:)](gcvirtualcontroller/connect%28replyhandler_%29.md) method to display the virtual controller on the screen.

To customize an element in the virtual controller, pass a new [GCVirtualController.ElementConfiguration](gcvirtualcontroller/elementconfiguration.md) object for the element to the [updateConfiguration(forElement:configuration:)](gcvirtualcontroller/updateconfiguration%28forelement_configuration_%29.md) method.

You process input from a virtual controller similarly to a real controller. Use the [controller](gcvirtualcontroller/controller.md) property to get the underlying [GCController](gccontroller.md) object. You can either poll the elements of the controller object or set the element’s handlers to get callbacks when their input values change.

## Topics

### Creating virtual controllers

- [init(configuration:)](gcvirtualcontroller/init%28configuration_%29.md): Creates a new virtual controller using the configuration you specify.
- [GCVirtualController.Configuration](gcvirtualcontroller/configuration.md): The configuration of a virtual controller.

### Customizing the elements

- [updateConfiguration(forElement:configuration:)](gcvirtualcontroller/updateconfiguration%28forelement_configuration_%29.md): Changes the configuration for one of the virtual controller’s input elements.
- [GCVirtualController.ElementConfiguration](gcvirtualcontroller/elementconfiguration.md): The properties of a virtual controller’s element that you can customize.

### Accessing the elements

- [controller](gcvirtualcontroller/controller.md): The underlying controller object that you use to access input elements.

### Connecting and displaying virtual controllers

- [connect(replyHandler:)](gcvirtualcontroller/connect%28replyhandler_%29.md): Connects the virtual controller to the device and displays it on the screen.
- [disconnect()](gcvirtualcontroller/disconnect%28%29.md): Disconnects the virtual controller from the device and removes it from the screen.

### Presenting a custom interface

- [setPosition(\_:forDirectionPadElement:)](gcvirtualcontroller/setposition%28__fordirectionpadelement_%29.md): Changes the value of a directional pad element in the virtual controller.
- [setValue(\_:forButtonElement:)](gcvirtualcontroller/setvalue%28__forbuttonelement_%29.md): Changes the value of a button element in the virtual controller.

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

### Virtual controller

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md): Use touch input and virtual controllers to make your game available to players without controllers.

# GCVirtualController (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A software emulation of a real controller that you configure specifically for your game.

## Declaration

```objectivec
@interface GCVirtualController : NSObject
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="overview"></a>

## Overview

Use a virtual controller to display software controls that you can customize over your game. You create a virtual controller from a configuration where you choose the input elements to display. You can even customize the images for the elements. When you connect the controller to the device, users interact with it similarly to a real controller.

![Screenshot of a virtual controller showing left and right thumbsticks with A and B buttons on the right thumbstick.](https://developer.apple.com/images/com.apple.gamecontroller/media-3830787@2x.png)

To add a virtual controller to your game, create a [GCVirtualControllerConfiguration](gcvirtualcontroller/configuration.md) object containing the elements you want to appear in the controller. Then create the virtual controller by passing the configuration to the [initWithConfiguration:](gcvirtualcontroller/init%28configuration_%29.md) method. Use the [connectWithReplyHandler:](gcvirtualcontroller/connect%28replyhandler_%29.md) method to display the virtual controller on the screen.

To customize an element in the virtual controller, pass a new [GCVirtualControllerElementConfiguration](gcvirtualcontroller/elementconfiguration.md) object for the element to the [updateConfigurationForElement:configuration:](gcvirtualcontroller/updateconfiguration%28forelement_configuration_%29.md) method.

You process input from a virtual controller similarly to a real controller. Use the [controller](gcvirtualcontroller/controller.md) property to get the underlying [GCController](gccontroller.md) object. You can either poll the elements of the controller object or set the element’s handlers to get callbacks when their input values change.

## Topics

### Creating virtual controllers

- [virtualControllerWithConfiguration:](gcvirtualcontroller/virtualcontrollerwithconfiguration_.md): Creates a new virtual controller using the configuration you specify.
- [initWithConfiguration:](gcvirtualcontroller/init%28configuration_%29.md): Creates a new virtual controller using the configuration you specify.
- [GCVirtualControllerConfiguration](gcvirtualcontroller/configuration.md): The configuration of a virtual controller.

### Customizing the elements

- [updateConfigurationForElement:configuration:](gcvirtualcontroller/updateconfiguration%28forelement_configuration_%29.md): Changes the configuration for one of the virtual controller’s input elements.
- [GCVirtualControllerElementConfiguration](gcvirtualcontroller/elementconfiguration.md): The properties of a virtual controller’s element that you can customize.

### Accessing the elements

- [controller](gcvirtualcontroller/controller.md): The underlying controller object that you use to access input elements.

### Connecting and displaying virtual controllers

- [connectWithReplyHandler:](gcvirtualcontroller/connect%28replyhandler_%29.md): Connects the virtual controller to the device and displays it on the screen.
- [disconnect](gcvirtualcontroller/disconnect%28%29.md): Disconnects the virtual controller from the device and removes it from the screen.

### Presenting a custom interface

- [setPosition:forDirectionPadElement:](gcvirtualcontroller/setposition%28__fordirectionpadelement_%29.md): Changes the value of a directional pad element in the virtual controller.
- [setValue:forButtonElement:](gcvirtualcontroller/setvalue%28__forbuttonelement_%29.md): Changes the value of a button element in the virtual controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Virtual controller

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md): Use touch input and virtual controllers to make your game available to players without controllers.
